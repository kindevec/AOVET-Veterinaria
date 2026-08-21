import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Plus, ArrowRight, ShieldCheck, Zap, PackageCheck, Award, HeartHandshake, Sparkles, CheckCircle, MessageCircle } from 'lucide-react';
import BotonCTA from '../components/ui/BotonCTA';
import SeparadorGrieta from '../components/ui/SeparadorGrieta';
import CarruselRecomendados from '../components/ui/CarruselRecomendados';
import { productos } from '../data/productos';

// Imágenes
import heroBg from '../assets/images/hero-bg.webp';
import nosotrosBg from '../assets/images/aovet_paisaje_campo.webp';
import catAves from '../assets/images/cat_aves_1785906732448.webp';
import catGanado from '../assets/images/cat_ganado_1785906742113.webp';
import catMascotas from '../assets/images/cat_mascotas_1785906749507.webp';
import prodVitamina from '../assets/images/prod_vitamina_1785906757394.webp';
import secIndustrial from '../assets/images/sec_industrial.webp';

import secArchCow from '../assets/images/aovet_ganado_campo.webp';
import secArchVet from '../assets/images/aovet_ternero_salud.webp';
import secVetProducts from '../assets/images/aovet_ganado_campo.webp';
import secFarmAction from '../assets/images/aovet_ganado_campo.webp';

// Variantes de animación reutilizables
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "backOut" } }
};

const Inicio = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-aovet-bg)] font-sans">
      
      {/* SECCIÓN 1: HERO CON BLOQUES BENTO SUPERPUESTOS */}
      <section className="relative flex flex-col bg-gray-900 pt-20 pb-24 md:pb-36 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-sky-400/80 via-sky-300/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex flex-col justify-center pt-6 sm:pt-8 pb-24 sm:pb-28">
          <div className="mb-3 sm:mb-4 flex justify-center w-full">
            <motion.svg width="80" height="100" viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg" initial="hidden" animate="visible">
              <motion.path d="M40 90 C 15 90 5 65 5 50 C 5 20 20 5 40 5 C 60 5 75 20 75 50 C 75 65 65 90 40 90 Z" stroke="var(--color-aovet-accent)" strokeWidth="3" variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 1.5, ease: "easeInOut" } } }} />
              <motion.path d="M20 40 L 40 50 L 30 65 L 50 75 L 45 90" stroke="var(--color-aovet-accent)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 1, delay: 1.2, ease: "easeOut" } } }} />
            </motion.svg>
          </div>

          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.15, delayChildren: 1.5 } } }} className="w-full">
            <motion.h1 
              variants={{ 
                hidden: { opacity: 0, y: 35, scale: 0.95 }, 
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1, 
                  transition: { 
                    type: "spring", 
                    stiffness: 110, 
                    damping: 12, 
                    duration: 0.8 
                  } 
                } 
              }} 
              animate={{
                y: [0, -6, 0],
                transition: {
                  repeat: Infinity,
                  duration: 4.5,
                  ease: "easeInOut"
                }
              }}
              whileHover={{ scale: 1.02 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-serif text-white text-center leading-[1.15] tracking-tight mb-8 sm:mb-10 antialiased hero-stroke [text-shadow:0_6px_16px_rgba(0,0,0,0.7),0_12px_28px_rgba(13,61,32,0.6)] cursor-default select-none mx-auto max-w-5xl -mt-2 sm:-mt-3"
            >
              <motion.span 
                className="inline-block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
              >
                Importamos confianza
              </motion.span> 
              <br/>
              <motion.span 
                className="text-[#2EE59D] inline-block drop-shadow-[0_0_20px_rgba(46,229,157,0.75)]"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
              >
                Distribuimos salud animal
              </motion.span>
            </motion.h1>
            
            <motion.div variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { type: "spring", damping: 12, stiffness: 100 } } }} className="grid grid-cols-2 sm:flex sm:flex-row gap-2.5 sm:gap-4 justify-center lg:justify-start w-full sm:w-auto max-w-sm sm:max-w-none mx-auto lg:mx-0">
              <BotonCTA text="Catálogo" onClick={() => navigate('/productos')} variant="primary" icon={PackageCheck} />
              <BotonCTA text="WhatsApp" href="https://wa.me/593985401224" variant="secondary" icon={MessageCircle} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* BLOQUES BENTO SUPERPUESTOS AL HERO */}
      <div className="-mt-16 sm:-mt-20 md:-mt-28 relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-[10px]"
        >
          {/* Card 1: Bloque Ancho Avicultura (Columna 1-2) */}
          <motion.div 
            variants={fadeInUp}
            whileHover={{ y: -6 }}
            onClick={() => navigate('/productos')}
            className="md:col-span-2 bg-[#E7ECE4] rounded-2xl sm:rounded-[2.5rem] p-5 sm:p-8 shadow-xl border border-white/60 flex flex-col justify-between cursor-pointer group relative overflow-hidden h-full min-h-[240px] sm:min-h-[280px]"
          >
            <div className="absolute right-0 bottom-0 top-4 sm:top-2 w-[44%] sm:w-[48%] max-w-[280px] pointer-events-none z-0 flex items-end justify-end p-2 sm:p-4">
              <picture className="w-full h-auto flex items-end justify-end">
                <source srcSet="/aves_clean.avif" type="image/avif" />
                <img 
                  src="/aves_clean.webp" 
                  alt="Salud y Nutrición Avícola AOVET" 
                  width="280"
                  height="260"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto max-h-[220px] sm:max-h-[260px] object-contain object-right-bottom group-hover:scale-105 transition-transform duration-700 drop-shadow-md" 
                />
              </picture>
            </div>
            <div className="flex flex-col justify-between h-full max-w-[62%] sm:max-w-sm relative z-10">
              <div>
                <span className="text-[var(--color-aovet-primary)] font-bold text-xs uppercase tracking-widest block mb-1">Avicultura de Alta Eficacia</span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#2C382E] font-serif mb-2 sm:mb-3 leading-tight">Salud y Nutrición Avícola</h3>
                <p className="text-xs sm:text-sm text-[#2C382E] font-medium leading-relaxed mb-4 sm:mb-6">Protección integral y bioseguridad para maximizar el rendimiento de tu galpón.</p>
              </div>
              <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[var(--color-aovet-primary)] group-hover:underline">Ver línea avícola <ArrowRight size={16} /></span>
            </div>
          </motion.div>

          {/* Card 2: Bloque Apilado Central (Columna 3) */}
          <motion.div variants={fadeInUp} className="flex flex-col gap-2.5 sm:gap-[10px] h-full">
            <motion.div whileHover={{ y: -4 }} onClick={() => navigate('/productos')} className="flex-1 bg-[#EBE5D8] rounded-2xl sm:rounded-[2rem] px-4 py-3 sm:px-5 sm:py-4 shadow-lg border border-white/60 flex items-center justify-between gap-3.5 cursor-pointer group">
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-[#2C382E] text-base sm:text-lg leading-tight mb-0.5">Ganadería de Precisión</h4>
                <p className="text-xs text-gray-600 leading-tight">Act Antiflam y tratamientos especializados.</p>
              </div>
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-white flex-shrink-0 shadow-md group-hover:scale-105 transition-transform duration-500">
                <img src={catGanado} alt="Ganadería" width="80" height="80" loading="lazy" decoding="async" className="w-full h-full object-cover" />
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -4 }} onClick={() => navigate('/productos')} className="flex-1 bg-[#E5DFD4] rounded-2xl sm:rounded-[2rem] px-4 py-3 sm:px-5 sm:py-4 shadow-lg border border-white/60 flex items-center justify-between gap-3.5 cursor-pointer group">
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-[#2C382E] text-base sm:text-lg leading-tight mb-0.5">Sector Industrial</h4>
                <p className="text-xs text-gray-600 leading-tight">Soluciones de alto rendimiento.</p>
              </div>
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-white flex-shrink-0 shadow-md group-hover:scale-105 transition-transform duration-500">
                <img src={secIndustrial} alt="Sector Industrial" width="80" height="80" loading="lazy" decoding="async" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </motion.div>

          {/* Card 3: Bloque Alto Derecha (Columna 4) */}
          <motion.div 
            variants={fadeInUp}
            whileHover={{ y: -6 }}
            onClick={() => navigate('/productos')}
            className="bg-[var(--color-aovet-dark)] text-white rounded-2xl sm:rounded-[2rem] px-4 py-3.5 sm:p-6 shadow-xl border border-gray-800 flex flex-col justify-between cursor-pointer group relative overflow-hidden"
          >
            <div className="flex flex-row sm:flex-col items-center sm:items-start justify-between gap-3 sm:gap-4">
              <div className="flex-1">
                <span className="text-[var(--color-aovet-accent)] font-bold text-[11px] sm:text-xs uppercase tracking-widest block mb-0.5 sm:mb-1.5">Clínicas & Pet</span>
                <h3 className="text-base sm:text-xl font-bold font-serif mb-0.5 sm:mb-2 leading-tight">Línea Pet Especializada</h3>
                <p className="text-xs text-gray-300 leading-tight">Próximamente: Antipulgas, suplementos y cuidado.</p>
              </div>
              <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-white/40 shadow-lg flex-shrink-0 sm:self-center sm:my-1">
                <img src={catMascotas} alt="Línea Pet Mascotas" width="96" height="96" loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
            <div className="hidden sm:block mt-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-aovet-accent)] group-hover:underline">
                Conocer más <ArrowRight size={14} />
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="mt-12 sm:mt-16">
        <SeparadorGrieta />
      </div>
      
      {/* SECCIÓN 2: LÍNEAS DE PRODUCCIÓN */}
      <section className="py-6 sm:py-12 px-0 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-[var(--color-aovet-dark)] rounded-none sm:rounded-[2.5rem] p-6 sm:p-10 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-8 sm:gap-12 items-center lg:items-start relative shadow-lg"
        >
          {/* Lado Izquierdo: Textos y Botón */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="lg:w-1/3 flex flex-col justify-between h-full z-10 text-center lg:text-left"
          >
            <div>
              <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--color-aovet-accent)] uppercase tracking-wide mb-4 sm:mb-6">
                SOLUCIONES <br className="hidden sm:inline" /> ESPECIALIZADAS
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-300 text-sm sm:text-base md:text-lg font-medium mb-6 sm:mb-10 max-w-sm mx-auto lg:mx-0 text-left">
                Líneas de productos veterinarios diseñadas para satisfacer los más altos estándares de cada sector productivo.
              </motion.p>
            </div>
            
            <motion.button 
              variants={fadeInUp}
              onClick={() => navigate('/productos')}
              className="w-full sm:w-auto self-center lg:self-start bg-[var(--color-aovet-primary)] text-white hover:bg-white hover:text-[var(--color-aovet-primary)] font-bold py-3.5 px-8 rounded-full transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer text-sm sm:text-base active:scale-95"
            >
              VER CATÁLOGO
            </motion.button>
          </motion.div>

          {/* Lado Derecho: Círculos / Tarjetas de Categorías */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-8 w-full z-10 mt-6 lg:mt-0"
          >
            {[
              { id: 'avicultura', name: 'Avicultura', desc: 'Salud integral y bioseguridad para aves.', img: catAves },
              { id: 'ganaderia', name: 'Ganadería', desc: 'Tratamientos y nutrición de precisión.', img: catGanado },
              { id: 'industrial', name: 'Industrial', desc: 'Soluciones veterinarias productivas.', img: secVetProducts }
            ].map((cat, idx) => (
              <motion.div 
                key={idx} 
                variants={scaleIn} 
                className="flex flex-row sm:flex-col items-center text-left sm:text-center gap-4 sm:gap-0 bg-white/5 sm:bg-transparent p-3.5 sm:p-0 rounded-2xl sm:rounded-none border border-white/10 sm:border-0 group cursor-pointer w-full hover:bg-white/10 sm:hover:bg-transparent transition-all active:scale-[0.98]" 
                onClick={() => navigate('/productos')}
              >
                <div className="w-20 h-20 sm:w-44 sm:h-44 lg:w-48 lg:h-48 rounded-full sm:mb-6 flex-shrink-0 flex items-center justify-center border-[3px] sm:border-[6px] border-white/20 sm:border-white/10 shadow-lg group-hover:scale-105 group-hover:border-[var(--color-aovet-accent)] transition-all overflow-hidden relative">
                  <img src={cat.img} alt={cat.name} width="192" height="192" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-white text-base sm:text-lg lg:text-xl mb-1 sm:mb-2">{cat.name}</h3>
                  <p className="text-xs sm:text-sm text-gray-300 sm:text-gray-400 sm:px-2 leading-snug sm:leading-normal">{cat.desc}</p>
                </div>
                <div className="sm:hidden text-white/40 group-hover:text-[var(--color-aovet-accent)] pr-1">
                  <ArrowRight size={20} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* SECCIÓN 3: PRODUCTOS RECOMENDADOS (CARRUSEL 3D COVERFLOW) */}
      <section className="py-6 sm:py-12 px-2 sm:px-6 lg:px-8 max-w-[1400px] mx-auto overflow-hidden sm:overflow-visible">
        <motion.div 
          initial={{ opacity: 0, width: "0%" }} whileInView={{ opacity: 1, width: "100%" }} transition={{ duration: 1 }} viewport={{ once: true }}
          className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 px-4 sm:px-0"
        >
          <div className="h-px bg-gray-300 flex-grow max-w-[60px] sm:max-w-[100px]"></div>
          <Sparkles className="text-[var(--color-aovet-accent)]" size={18} />
          <h2 className="text-lg sm:text-2xl md:text-3xl font-extrabold text-[var(--color-aovet-dark)] font-serif uppercase tracking-widest text-center px-2 sm:px-4">
            PRODUCTOS RECOMENDADOS
          </h2>
          <Sparkles className="text-[var(--color-aovet-accent)]" size={18} />
          <div className="h-px bg-gray-300 flex-grow max-w-[60px] sm:max-w-[100px]"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <CarruselRecomendados />
        </motion.div>
      </section>

      {/* SECCIÓN EDITORIAL UNIFICADA */}
      <section className="py-6 sm:py-12 px-0 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-gradient-to-b from-[#EBE5D8] via-[#E7ECE4] to-[#DFE6D8] rounded-none sm:rounded-[2.5rem] p-6 sm:p-10 md:p-12 lg:p-16 space-y-12 sm:space-y-16 relative shadow-sm border-0 sm:border border-gray-100"
        >
          {/* PARTE 1 */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <motion.div variants={fadeInUp} className="flex flex-col justify-center space-y-6">
              <div>
                <span className="text-[var(--color-aovet-primary)] font-bold text-xs uppercase tracking-widest mb-1 block">Excelencia Pecuaria</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2C382E] font-serif italic leading-tight mb-4">Salud & Nutrición AOVET</h3>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3 sm:gap-4 bg-white/70 backdrop-blur-sm p-3 rounded-2xl">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#C87D53] flex items-center justify-center text-white font-bold flex-shrink-0"><ShieldCheck size={20} className="sm:w-6 sm:h-6" /></div>
                  <div><h4 className="font-bold text-[#2C382E] text-xs sm:text-sm">Control Sanitario</h4><p className="text-[11px] sm:text-xs text-gray-600">Protocolos respaldados por veterinarios.</p></div>
                </div>
                <div className="flex items-center gap-3 sm:gap-4 bg-white/70 backdrop-blur-sm p-3 rounded-2xl">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[var(--color-aovet-primary)] flex items-center justify-center text-white font-bold flex-shrink-0"><Sparkles size={20} className="sm:w-6 sm:h-6" /></div>
                  <div><h4 className="font-bold text-[#2C382E] text-xs sm:text-sm">Rendimiento Óptimo</h4><p className="text-[11px] sm:text-xs text-gray-600">Fórmulas científicas concentradas.</p></div>
                </div>
              </div>
            </motion.div>
            <motion.div variants={scaleIn} className="flex flex-col items-center justify-center relative">
              <div className="w-56 sm:w-64 h-72 sm:h-80 rounded-t-[7rem] sm:rounded-t-[8rem] rounded-b-3xl bg-[#C87D53] overflow-hidden p-3 shadow-xl relative flex items-end justify-center">
                <div className="w-full h-full rounded-t-[6.5rem] sm:rounded-t-[7.5rem] rounded-b-2xl overflow-hidden bg-white">
                  <img src={secArchCow} alt="Ganado vacuno AOVET" width="256" height="320" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-2 md:right-8 bg-white border-2 border-[#C87D53] text-[#2C382E] text-xs font-bold w-18 h-18 sm:w-20 sm:h-20 rounded-full flex flex-col items-center justify-center text-center shadow-lg p-1 animate-pulse"><Award size={16} className="text-[#C87D53] mb-0.5 sm:mb-1" /><span className="text-[10px] sm:text-xs">100% Calidad</span></div>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-col items-center lg:items-start space-y-4">
              <div className="w-full max-w-xs bg-white/80 backdrop-blur-sm rounded-3xl p-4 shadow-sm border border-white flex flex-col items-center text-center">
                <div className="w-40 sm:w-48 h-40 sm:h-48 rounded-t-[4rem] sm:rounded-t-[5rem] rounded-b-2xl overflow-hidden mb-4 bg-gray-100 shadow-inner">
                  <img src={secArchVet} alt="Veterinaria especialista" width="192" height="192" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                </div>
                <h4 className="font-bold text-[#2C382E] text-sm sm:text-base mb-1">Respaldo Técnico</h4><p className="text-xs text-gray-600 leading-relaxed px-2">Asesoría personalizada en cada dosis para maximizar la productividad en finca.</p>
              </div>
            </motion.div>
          </motion.div>

          {/* PARTE 2 */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center pt-4">
            <motion.div variants={fadeInUp} className="flex justify-center items-center">
              <picture className="flex justify-center items-center">
                <source srcSet="/Insumos.avif" type="image/avif" />
                <img 
                  src="/Insumos.webp" 
                  alt="Insumos veterinarios AOVET" 
                  width="340"
                  height="340"
                  loading="lazy"
                  decoding="async"
                  className="max-h-[260px] sm:max-h-[340px] w-auto object-contain drop-shadow-lg hover:scale-105 transition-transform duration-300" 
                />
              </picture>
            </motion.div>
            <motion.div variants={fadeInUp} className="text-center lg:text-left flex flex-col justify-center space-y-4">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2C382E] font-serif leading-tight">Insumos de Clase Mundial</h3>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">Nos especializamos en la importación y distribución de productos veterinarios, seleccionando cuidadosamente productos de fabricantes confiables que cumplan con altos estándares de calidad y seguridad.</p>
              <div className="pt-2 flex justify-center lg:justify-start gap-2 sm:gap-3 flex-wrap">
                <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-bold bg-white text-[#2C382E] px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-sm"><CheckCircle size={13} className="text-[var(--color-aovet-primary)]" /> Bio-seguros</span>
                <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-bold bg-white text-[#2C382E] px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-sm"><CheckCircle size={13} className="text-[var(--color-aovet-primary)]" /> Garantía Total</span>
              </div>
            </motion.div>
            <motion.div variants={scaleIn} className="flex justify-center">
              <div className="w-56 sm:w-60 h-64 sm:h-72 rounded-t-[6rem] sm:rounded-t-[7rem] rounded-b-3xl bg-[#AEC2AA] p-3 shadow-lg flex flex-col items-center justify-between text-center text-[#2C382E]">
                <div className="w-full h-36 sm:h-44 rounded-t-[5.5rem] sm:rounded-t-[6.5rem] rounded-b-2xl overflow-hidden bg-white">
                  <img src={catGanado} alt="Ganadería de precisión" width="240" height="176" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                </div>
                <div className="py-2"><span className="font-bold text-xs sm:text-sm block">Ganadería de Precisión</span><span className="text-[10px] sm:text-[11px] text-gray-700">Mayor producción de leche y carne.</span></div>
              </div>
            </motion.div>
          </motion.div>

          {/* PARTE 3 */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-4">
            <motion.div variants={fadeInUp} className="lg:col-span-2 h-[260px] sm:h-[350px] lg:h-auto rounded-none sm:rounded-3xl overflow-hidden shadow-md relative group">
              <img src={secFarmAction} alt="Veterinario en campo Ecuador" width="800" height="400" loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-5 sm:p-8 text-white">
                <span className="text-[var(--color-aovet-accent)] font-bold text-[11px] sm:text-xs uppercase tracking-widest mb-1">Acompañamiento Técnico</span>
                <h4 className="text-xl sm:text-2xl font-bold">Asistencia Directa en Finca</h4>
                <p className="text-xs sm:text-sm text-gray-200 max-w-lg mt-1">Nuestros profesionales visitan tus instalaciones para realizar diagnósticos certeros y planes de tratamiento a medida.</p>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm border border-white/60 relative overflow-hidden">
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[var(--color-aovet-primary)] text-white flex items-center justify-center mb-4 sm:mb-6 shadow-sm"><HeartHandshake size={20} className="sm:w-6 sm:h-6" /></div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#2C382E] font-serif mb-3 sm:mb-4">Consejos & Asesoría</h3>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-6">¿Dudas sobre dosis o tratamientos? Contáctate directamente con nuestros especialistas de campo.</p>
              </div>
              <button onClick={() => window.open('https://wa.me/593985401224', '_blank')} className="w-full bg-[var(--color-aovet-primary)] hover:bg-[var(--color-aovet-dark)] text-white font-bold py-3 sm:py-3.5 px-6 rounded-full transition-colors flex items-center justify-center gap-2 shadow-sm text-xs sm:text-sm cursor-pointer">
                Consultar un especialista <ArrowRight size={15} />
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* SECCIÓN 4: POR QUÉ ELEGIRNOS */}
      <section className="py-6 sm:py-12 px-0 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}
          className="bg-[#E7ECE4] rounded-none sm:rounded-[2.5rem] flex flex-col lg:flex-row overflow-hidden shadow-lg border-0 sm:border border-gray-100"
        >
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="w-full lg:w-[55%] p-6 sm:p-10 md:p-12 lg:p-16 flex flex-col justify-between z-10">
            <div className="mb-8 sm:mb-12">
              <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl md:text-4xl text-[var(--color-aovet-dark)] font-serif italic mb-4 sm:mb-6">Por qué elegir AOVET</motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-700 text-sm sm:text-base md:text-lg font-medium max-w-md leading-relaxed text-justify">Elegir nuestra empresa significa contar con un aliado comprometido con la salud animal, la calidad y el crecimiento de nuestros clientes.</motion.p>
            </div>
            <motion.button variants={fadeInUp} onClick={() => navigate('/nosotros')} className="w-full sm:w-auto self-center sm:self-start bg-[var(--color-aovet-primary)] hover:bg-[var(--color-aovet-dark)] text-white font-bold py-3.5 px-8 rounded-full transition-all flex items-center justify-center gap-2 mb-8 sm:mb-12 shadow-sm cursor-pointer text-sm sm:text-base active:scale-95">
              NUESTRA HISTORIA
            </motion.button>
            <motion.div variants={staggerContainer} className="grid grid-cols-3 gap-2 sm:gap-4 lg:pr-12">
              {[{ icon: ShieldCheck, text: "Calidad Certificada" }, { icon: Zap, text: "Respuesta Rápida" }, { icon: PackageCheck, text: "Cadena de Frío" }].map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <motion.div variants={fadeInUp} key={idx} className="flex flex-col items-center text-center">
                    <Icon size={26} className="text-[var(--color-aovet-primary)] mb-2 sm:mb-3" strokeWidth={1.5} />
                    <p className="text-[11px] sm:text-sm font-bold text-[var(--color-aovet-dark)] leading-tight">{feat.text}</p>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>
          <div className="w-full h-[280px] sm:h-[350px] lg:h-auto lg:w-[45%] z-0">
            <div className="w-full h-full relative overflow-hidden lg:imagen-curva-referencia">
              <img src={nosotrosBg} alt="Campo ganadero y producción agropecuaria AOVET Ecuador" width="600" height="450" loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* SECCIÓN 5: PRE-FOOTER */}
      <section className="py-4 sm:py-8 px-0 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-6 sm:mb-12 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}
          className="bg-white rounded-none sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-md border-y sm:border border-gray-100 flex flex-col md:flex-row justify-between gap-8 md:gap-12"
        >
          <div className="flex gap-4 sm:gap-6 items-start">
            <div className="w-16 h-16 sm:w-24 sm:h-24 hidden sm:flex flex-col justify-center items-center text-[var(--color-aovet-primary)]/20 flex-shrink-0">
              <ShieldCheck size={48} className="sm:w-16 sm:h-16" strokeWidth={1} />
            </div>
            <div>
              <h3 className="font-bold text-[var(--color-aovet-dark)] text-lg sm:text-xl mb-1">¡Te esperamos!</h3>
              <p className="text-xs text-[var(--color-aovet-primary)] font-bold mb-3 sm:mb-4">Mgs. Mvz. Franklin Jonatan Arichabala Yanza</p>
              <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-gray-600">
                <li className="flex items-center gap-2.5 sm:gap-3"><MapPin size={16} className="text-[var(--color-aovet-primary)] flex-shrink-0" /><span>San Juanpamba - vía a Jadan Cuenca - Ecuador</span></li>
                <li className="flex items-center gap-2.5 sm:gap-3"><Phone size={16} className="text-[var(--color-aovet-primary)] flex-shrink-0" /><span className="font-bold">0985401224</span></li>
                <li className="flex items-center gap-2.5 sm:gap-3"><Mail size={16} className="text-[var(--color-aovet-primary)] flex-shrink-0" /><span className="break-all font-medium">jonatanarichabala_89@hotmail.com</span></li>
              </ul>
            </div>
          </div>
          <div className="flex-grow flex flex-col md:flex-row items-stretch md:items-start gap-6 md:gap-8 md:justify-end">
            <div className="w-full max-w-md">
              <h3 className="font-bold text-[var(--color-aovet-dark)] text-lg sm:text-xl mb-3 sm:mb-4">Suscríbete a novedades<br className="hidden sm:inline" />y promociones</h3>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 border border-gray-300 rounded-2xl sm:rounded-full p-1.5 focus-within:border-[var(--color-aovet-primary)] focus-within:ring-1 focus-within:ring-[var(--color-aovet-primary)] transition-all bg-gray-50">
                <input type="email" placeholder="Tu e-mail" className="bg-transparent border-none outline-none px-3 sm:px-4 py-2 sm:py-0 flex-grow text-xs sm:text-sm text-gray-700" />
                <button className="bg-[var(--color-aovet-accent)] hover:bg-[var(--color-aovet-dark)] text-white px-5 sm:px-6 py-2.5 rounded-xl sm:rounded-full text-xs sm:text-sm font-bold transition-colors cursor-pointer">Suscribirse</button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default Inicio;
