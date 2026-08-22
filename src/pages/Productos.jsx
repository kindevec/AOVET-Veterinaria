import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Snowflake, PackageCheck, ChevronLeft, ChevronRight, Sparkles, Tag, ArrowRight, MessageCircle, Thermometer } from 'lucide-react';
import { cn } from '../lib/utils';
import { productos } from '../data/productos';
import ProductoCard from '../components/ui/ProductoCard';
import BotonCTA from '../components/ui/BotonCTA';
import WhatsappIcon from '../components/icons/WhatsappIcon';
import SeparadorGrieta from '../components/ui/SeparadorGrieta';

// Imagen de fondo para el banner estático
import heroBgProductos from '../assets/images/aovet_productos_banner.jpg';

const categorias = [
  { id: 'todos', label: 'Todos' },
  { id: 'avicultura', label: 'Avicultura 🐔' },
  { id: 'ganaderia', label: 'Ganadería 🐄' },
  { id: 'industrial', label: 'Industrial 🏭' },
  { id: 'mascotas', label: 'Mascotas (Próximamente) 🐕' }
];

const Productos = () => {
  const [filtroActivo, setFiltroActivo] = useState('todos');

  const productosFiltrados = filtroActivo === 'todos' 
    ? productos 
    : productos.filter(p => p.categoria === filtroActivo);

  const destacados = productos.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-aovet-bg)] font-sans">
      
      {/* 1. HERO BANNER ESTÁTICO DE PRODUCTOS */}
      <section className="relative flex flex-col justify-center bg-gray-900 pt-20 pb-24 md:pb-36 overflow-hidden h-[580px] sm:h-[660px] md:h-[720px] lg:h-[760px] min-h-[580px] md:min-h-[660px] lg:min-h-[760px]">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBgProductos})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/65 via-black/45 to-black/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex flex-col justify-center pt-24 sm:pt-16 md:pt-14 pb-16 sm:pb-24">
          <div className="mb-4 sm:mb-6 flex justify-center w-full translate-y-3 sm:-translate-y-4 md:-translate-y-6">
            <motion.svg width="80" height="100" viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg" initial="hidden" animate="visible">
              <motion.path d="M40 90 C 15 90 5 65 5 50 C 5 20 20 5 40 5 C 60 5 75 20 75 50 C 75 65 65 90 40 90 Z" stroke="var(--color-aovet-accent)" strokeWidth="3" variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 1.5, ease: "easeInOut" } } }} />
              <motion.path d="M20 40 L 40 50 L 30 65 L 50 75 L 45 90" stroke="var(--color-aovet-accent)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 1, delay: 1.2, ease: "easeOut" } } }} />
            </motion.svg>
          </div>

          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } } }} className="w-full">
            <motion.h1 
              variants={{ 
                hidden: { opacity: 0, y: 35, scale: 0.95 }, 
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1, 
                  transition: { type: "spring", stiffness: 110, damping: 12, duration: 0.8 } 
                } 
              }} 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-serif text-center leading-[1.12] tracking-tight mb-4 sm:mb-6 antialiased cursor-default select-none mx-auto max-w-5xl translate-y-2 sm:-translate-y-4 md:-translate-y-6 drop-shadow-2xl"
            >
              <motion.span className="text-[var(--color-aovet-accent)] inline-block drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)] drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] [text-shadow:_0_2px_14px_rgba(0,0,0,0.85)]">
                Catálogo de Productos
              </motion.span>
            </motion.h1>

            <motion.p
              variants={{ 
                hidden: { opacity: 0, y: 20 }, 
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } 
              }}
              className="text-base sm:text-lg md:text-xl text-white/95 font-medium max-w-2xl mx-auto text-center mb-8 sm:mb-10 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] [text-shadow:_0_1px_8px_rgba(0,0,0,0.85)] translate-y-2 sm:-translate-y-4 md:-translate-y-6"
            >
              Explora nuestra línea integral de fármacos, biológicos, nutrición y suplementos de alta eficacia para avicultura, ganadería y animales de producción.
            </motion.p>

            <motion.div variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { type: "spring", damping: 12, stiffness: 100 } } }} className="flex flex-wrap gap-3 sm:gap-4 justify-center items-center w-full sm:w-auto mx-auto translate-y-1 sm:-translate-y-2 md:-translate-y-4">
              <BotonCTA 
                text="Explorar Catálogo" 
                onClick={() => {
                  const el = document.getElementById('catalogo-seccion');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }} 
                variant="primary" 
                icon={PackageCheck} 
              />
              <BotonCTA 
                text="Cotizar por WhatsApp" 
                href="https://wa.me/593985401224" 
                variant="secondary" 
                icon={WhatsappIcon} 
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Productos Destacados del Mes */}
      <section className="pt-8 sm:pt-12 pb-4 sm:pb-6 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8 sm:mb-10">
            <div className="w-2 h-8 bg-[var(--color-aovet-accent)] rounded-full"></div>
            <h2 className="text-3xl font-bold text-[var(--color-aovet-dark)] font-serif">Destacados del Mes</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destacados.map(prod => (
              <div key={`dest-${prod.id}`} className="ring-2 ring-[var(--color-aovet-accent)] rounded-2xl relative shadow-md">
                <ProductoCard producto={prod} isDestacado={true} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Catálogo Principal con Filtros */}
      <section id="catalogo-seccion" className="pt-4 sm:pt-6 pb-12 sm:pb-16 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-aovet-dark)] font-serif mb-8">Explora nuestro portafolio</h2>
            
            {/* Filtros */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categorias.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setFiltroActivo(cat.id)}
                  className={`px-6 py-3 rounded-full font-bold transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-aovet-primary)] text-sm cursor-pointer ${
                    filtroActivo === cat.id 
                      ? 'bg-[var(--color-aovet-primary)] text-white shadow-md scale-105'
                      : 'bg-white/80 backdrop-blur-xs text-gray-700 border border-gray-300/80 hover:bg-white shadow-xs'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid de Productos */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <AnimatePresence mode="popLayout">
              {productosFiltrados.map((producto) => (
                <ProductoCard key={producto.id} producto={producto} />
              ))}
            </AnimatePresence>
          </motion.div>

          {productosFiltrados.length === 0 && (
            <div className="text-center py-20 text-gray-500 font-medium">
              No se encontraron productos en esta categoría.
            </div>
          )}
        </div>
      </section>

      <div className="py-2 sm:py-4">
        <SeparadorGrieta />
      </div>

      {/* 4. Garantía y Cadena de Frío */}
      <section className="pt-4 sm:pt-6 pb-16 sm:pb-20 bg-transparent text-[var(--color-aovet-text)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Columna Izquierda con animación de desplazamiento y acercamiento */}
            <motion.div
              initial={{ opacity: 0, x: -40, scale: 0.94 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-[var(--color-aovet-dark)] mb-6">
                Garantía total de Cadena de Frío
              </h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Sabemos que la eficacia de los biológicos e insumos veterinarios depende estrictamente del control de temperatura. En AOVET implementamos rigurosos protocolos de almacenamiento y transporte refrigerado.
              </p>
              <ul className="space-y-4">
                {[
                  "Cuartos fríos monitoreados 24/7.",
                  "Embalaje térmico validado.",
                  "Trazabilidad de temperatura hasta tu granja."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-800 font-medium">
                    <div className="w-8 h-8 rounded-full bg-[var(--color-aovet-primary)]/10 flex items-center justify-center flex-shrink-0">
                      <PackageCheck className="text-[var(--color-aovet-primary)]" size={18} />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Columna Derecha con animación de desplazamiento, zoom y escala óptima */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.92 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative group cursor-default"
            >
              {/* Resplandor ambiental AOVET */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-aovet-primary)]/40 via-[var(--color-aovet-accent)]/30 to-[var(--color-aovet-primary)]/40 rounded-3xl sm:rounded-[2.5rem] blur-xl opacity-60 group-hover:opacity-90 transition duration-500"></div>

              {/* Contenedor Unificado Translúcido con Borde Animado y Micro-animaciones */}
              <div className="relative bg-gradient-to-br from-[#0D3D20]/80 via-[#1A6B38]/55 to-[#082815]/85 backdrop-blur-2xl text-white p-6 sm:p-8 md:p-9 rounded-3xl sm:rounded-[2.5rem] border border-[var(--color-aovet-accent)]/40 shadow-[0_25px_60px_rgba(13,61,32,0.35)] space-y-6 text-center overflow-hidden">
                
                {/* Esferas de luz difusa ambiental en movimiento dentro del cristal */}
                <motion.div 
                  animate={{ x: [0, 25, 0], y: [0, -15, 0], scale: [1, 1.2, 1] }} 
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }} 
                  className="absolute -top-12 -right-12 w-48 h-48 bg-[var(--color-aovet-accent)]/20 rounded-full blur-2xl pointer-events-none" 
                />
                <motion.div 
                  animate={{ x: [0, -20, 0], y: [0, 20, 0], scale: [1, 1.25, 1] }} 
                  transition={{ repeat: Infinity, duration: 7, delay: 1, ease: "easeInOut" }} 
                  className="absolute -bottom-12 -left-12 w-48 h-48 bg-emerald-400/25 rounded-full blur-2xl pointer-events-none" 
                />

                {/* Borde Animado con Rayo de Luz Viajero (Animated Border Beam) */}
                <div
                  className={cn(
                    "-inset-px pointer-events-none absolute rounded-[inherit] border-2 border-transparent border-inset [mask-clip:padding-box,border-box]",
                    "[mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]"
                  )}
                >
                  <motion.div
                    className="absolute aspect-square bg-gradient-to-r from-transparent via-[var(--color-aovet-accent)] to-[var(--color-aovet-accent)] drop-shadow-[0_0_18px_rgba(244,185,66,1)]"
                    animate={{
                      offsetDistance: ["0%", "100%"],
                    }}
                    style={{
                      width: 100,
                      offsetPath: `rect(0 auto auto 0 round 2.5rem)`,
                    }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 4.5,
                      ease: "linear",
                    }}
                  />
                </div>

                {/* Fila Principal de Temperatura centrada y agrupada armónicamente */}
                <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-7 md:gap-8 text-center">
                  <div className="flex items-center justify-center gap-2 sm:gap-2.5">
                    <motion.div
                      animate={{ y: [0, -4, 0], scale: [1, 1.06, 1] }}
                      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    >
                      <Thermometer size={34} className="text-[var(--color-aovet-accent)] drop-shadow-[0_0_12px_rgba(244,185,66,0.75)] flex-shrink-0" />
                    </motion.div>
                    <span className="text-xl sm:text-2xl font-bold text-white font-serif tracking-tight text-center">
                      Temperatura Ideal
                    </span>
                  </div>

                  <motion.div 
                    animate={{ 
                      scale: [1, 1.03, 1],
                      filter: [
                        "drop-shadow(0 0 12px rgba(244,185,66,0.6))",
                        "drop-shadow(0 0 25px rgba(244,185,66,0.95))",
                        "drop-shadow(0 0 12px rgba(244,185,66,0.6))"
                      ]
                    }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    className="grid grid-cols-[auto_auto] items-center text-left font-mono text-[var(--color-aovet-accent)] font-black tracking-tight leading-none gap-y-1"
                  >
                    <span className="text-2xl sm:text-3xl lg:text-4xl opacity-0 select-none mr-1.5">-</span>
                    <span className="text-2xl sm:text-3xl lg:text-4xl">2°C</span>
                    <span className="text-2xl sm:text-3xl lg:text-4xl mr-1.5">-</span>
                    <span className="text-2xl sm:text-3xl lg:text-4xl">8°C</span>
                  </motion.div>
                </div>

                {/* Línea divisoria elegante con destello viajero animado */}
                <div className="relative z-10 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-aovet-accent)]/40 to-transparent w-full overflow-hidden">
                  <motion.div
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                    className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/90 to-transparent"
                  />
                </div>

                {/* Mensaje directo institucional centrado */}
                <p className="relative z-10 text-xs sm:text-sm text-emerald-100/90 leading-relaxed text-center italic max-w-lg mx-auto font-medium">
                  Cualquier producto biológico que salga de nuestro almacén cumple estrictamente con estos parámetros térmicos.
                </p>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Productos;
