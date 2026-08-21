import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Snowflake, PackageCheck, ChevronLeft, ChevronRight, Sparkles, Tag, ArrowRight } from 'lucide-react';
import { productos } from '../data/productos';
import ProductoCard from '../components/ui/ProductoCard';
import BotonCTA from '../components/ui/BotonCTA';
import CatalogosSection from '../components/secciones/CatalogosSection';

// Imágenes para las 3 publicidades del Slider Hero
import heroBg from '../assets/images/hero-bg.webp';
import secFarmAction from '../assets/images/sec_farm_action_1785907355629.webp';
import nosMainVet from '../assets/images/aovet_paisaje_campo.webp';

const categorias = [
  { id: 'todos', label: 'Todos' },
  { id: 'avicultura', label: 'Avicultura 🐔' },
  { id: 'ganaderia', label: 'Ganadería 🐄' },
  { id: 'industrial', label: 'Industrial 🏭' },
  { id: 'mascotas', label: 'Mascotas (Próximamente) 🐕' }
];

const slidesPublicidad = [
  {
    id: 1,
    tag: "LÍNEA AVÍCOLA DE ALTA EFICACIA",
    titulo: "Salud Integral para Aves",
    subtitulo: "Las mejores soluciones en salud y nutrición avícola con trazabilidad térmica garantizada.",
    ctaText: "Ver Línea Avícola",
    categoriaFiltro: "avicultura",
    bgImage: heroBg,
    colorBadge: "bg-[var(--color-aovet-accent)] text-[var(--color-aovet-dark)]"
  },
  {
    id: 2,
    tag: "PROMOCIÓN DESTACADA BOVINOS",
    titulo: "Salud y Bienestar Ganadero",
    subtitulo: "Maximiza la ganancia de peso y producción lechera con Act Antiflam y tratamientos especializados.",
    ctaText: "Ver Productos Ganaderos",
    categoriaFiltro: "ganaderia",
    bgImage: secFarmAction,
    colorBadge: "bg-[var(--color-aovet-primary)] text-white"
  },
  {
    id: 3,
    tag: "EXCELENCIA INDUSTRIAL",
    titulo: "Soluciones para Granjas Industriales",
    subtitulo: "Promotores de crecimiento y tratamientos para maximizar el rendimiento productivo.",
    ctaText: "Ver Portafolio Completo",
    categoriaFiltro: "industrial",
    bgImage: nosMainVet,
    colorBadge: "bg-amber-500 text-white"
  }
];

const Productos = () => {
  const [filtroActivo, setFiltroActivo] = useState('todos');
  
  // Estado del Slider
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play del Slider cada 6 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesPublicidad.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesPublicidad.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slidesPublicidad.length - 1 : prev - 1));
  };

  const productosFiltrados = filtroActivo === 'todos' 
    ? productos 
    : productos.filter(p => p.categoria === filtroActivo);

  const destacados = productos.slice(0, 3);

  return (
    <div className="pt-20 min-h-screen bg-white font-sans">
      
      {/* 1. HERO SLIDER DE PUBLICIDAD (Gran imagen de fondo + Carousel 3 promos) */}
      <section className="relative min-h-[580px] md:min-h-[640px] flex items-center justify-center bg-gray-900 overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slidesPublicidad[currentSlide].bgImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/75 to-transparent"></div>
          </motion.div>
        </AnimatePresence>

        {/* Contenido del Slide Activo */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl text-white"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 shadow-md bg-white/10 backdrop-blur-md border border-white/20">
                <Tag size={14} className="text-[var(--color-aovet-accent)]" />
                <span>{slidesPublicidad[currentSlide].tag}</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-serif leading-tight mb-6 text-white drop-shadow-md">
                {slidesPublicidad[currentSlide].titulo}
              </h1>

              <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed drop-shadow-sm">
                {slidesPublicidad[currentSlide].subtitulo}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => {
                    setFiltroActivo(slidesPublicidad[currentSlide].categoriaFiltro);
                    const el = document.getElementById('catalogo-seccion');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-[var(--color-aovet-primary)] hover:bg-[var(--color-aovet-dark)] text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-xl flex items-center gap-2"
                >
                  {slidesPublicidad[currentSlide].ctaText} <ArrowRight size={18} />
                </button>
                <a
                  href="https://wa.me/593985401224"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white/20 hover:bg-white hover:text-[var(--color-aovet-dark)] text-white font-bold py-4 px-8 rounded-full backdrop-blur-md transition-all border border-white/30"
                >
                  Cotizar por WhatsApp
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Flechas de Navegación */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white hover:text-[var(--color-aovet-dark)] transition-all flex items-center justify-center border border-white/30"
          aria-label="Slide anterior"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white hover:text-[var(--color-aovet-dark)] transition-all flex items-center justify-center border border-white/30"
          aria-label="Siguiente slide"
        >
          <ChevronRight size={24} />
        </button>

        {/* Indicadores de Dots del Slider */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 bg-black/30 backdrop-blur-md px-6 py-2 rounded-full border border-white/10">
          {slidesPublicidad.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2.5 rounded-full transition-all ${
                currentSlide === idx ? 'w-8 bg-[var(--color-aovet-accent)]' : 'w-2.5 bg-white/50 hover:bg-white'
              }`}
              aria-label={`Ir al slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 2. Productos Destacados del Mes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-2 h-8 bg-[var(--color-aovet-accent)] rounded-full"></div>
            <h2 className="text-3xl font-bold text-[var(--color-aovet-dark)] font-serif">Destacados del Mes</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destacados.map(prod => (
              <div key={`dest-${prod.id}`} className="ring-2 ring-[var(--color-aovet-accent)] rounded-2xl relative shadow-md">
                <div className="absolute -top-4 -right-4 bg-[var(--color-aovet-accent)] text-[var(--color-aovet-dark)] font-bold px-4 py-1 rounded-full z-10 shadow-md text-xs uppercase tracking-wider">
                  Más Vendido
                </div>
                <ProductoCard producto={prod} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Catálogo Principal con Filtros */}
      <section id="catalogo-seccion" className="py-16 bg-[var(--color-aovet-bg)] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-aovet-dark)] font-serif mb-8">Explora nuestro portafolio</h2>
            
            {/* Filtros */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categorias.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setFiltroActivo(cat.id)}
                  className={`px-6 py-3 rounded-full font-bold transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-aovet-primary)] text-sm ${
                    filtroActivo === cat.id 
                      ? 'bg-[var(--color-aovet-primary)] text-white shadow-md scale-105'
                      : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-100'
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

      {/* Sección de Catálogos */}
      <CatalogosSection />

      {/* 4. Garantía y Cadena de Frío */}
      <section className="py-20 bg-[var(--color-aovet-dark)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 text-[var(--color-aovet-accent)] mb-4">
                <Snowflake size={32} />
                <h3 className="text-xl font-bold uppercase tracking-wider">Manejo Seguro</h3>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">Garantía total de Cadena de Frío</h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Sabemos que la eficacia de los biológicos e insumos veterinarios depende estrictamente del control de temperatura. En AOVET implementamos rigurosos protocolos de almacenamiento y transporte refrigerado.
              </p>
              <ul className="space-y-4">
                {[
                  "Cuartos fríos monitoreados 24/7.",
                  "Embalaje térmico validado.",
                  "Trazabilidad de temperatura hasta tu granja."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <PackageCheck className="text-[var(--color-aovet-primary)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 p-8 rounded-3xl backdrop-blur-sm border border-white/20 shadow-xl">
              <div className="flex flex-col gap-6">
                <div className="bg-white/20 p-6 rounded-2xl flex items-center justify-between">
                  <span className="font-bold">Temperatura Ideal</span>
                  <span className="text-2xl font-mono text-[var(--color-aovet-accent)] font-bold">2°C - 8°C</span>
                </div>
                <p className="text-sm text-gray-300 italic text-center">
                  Cualquier producto biológico que salga de nuestro almacén cumple estrictamente con estos parámetros térmicos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Productos;
