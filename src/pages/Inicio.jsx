import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Plus, ArrowRight, ShieldCheck, Zap, PackageCheck, Award, HeartHandshake, Sparkles, CheckCircle } from 'lucide-react';
import BotonCTA from '../components/ui/BotonCTA';
import SeparadorGrieta from '../components/ui/SeparadorGrieta';
import { productos } from '../data/productos';

// Imágenes
import heroBg from '../assets/images/hero-bg.jpg';
import nosotrosBg from '../assets/images/nosotros-bg.jpg';
import catAves from '../assets/images/cat_aves_1785906732448.jpg';
import catGanado from '../assets/images/cat_ganado_1785906742113.jpg';
import catMascotas from '../assets/images/cat_mascotas_1785906749507.jpg';
import prodVitamina from '../assets/images/prod_vitamina_1785906757394.jpg';
import prodVacuna from '../assets/images/prod_vacuna_1785906764797.jpg';

import secArchCow from '../assets/images/sec_arch_cow_1785907332144.jpg';
import secArchVet from '../assets/images/sec_arch_vet_1785907340022.jpg';
import secVetProducts from '../assets/images/sec_vet_products_1785907348242.jpg';
import secFarmAction from '../assets/images/sec_farm_action_1785907355629.jpg';

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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex flex-col justify-center pt-12 pb-24">
          <div className="mb-6 flex justify-center lg:justify-start">
            <motion.svg width="80" height="100" viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg" initial="hidden" animate="visible">
              <motion.path d="M40 90 C 15 90 5 65 5 50 C 5 20 20 5 40 5 C 60 5 75 20 75 50 C 75 65 65 90 40 90 Z" stroke="var(--color-aovet-accent)" strokeWidth="3" variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 1.5, ease: "easeInOut" } } }} />
              <motion.path d="M20 40 L 40 50 L 30 65 L 50 75 L 45 90" stroke="var(--color-aovet-accent)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 1, delay: 1.2, ease: "easeOut" } } }} />
            </motion.svg>
          </div>

          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.15, delayChildren: 1.5 } } }} className="max-w-3xl text-center lg:text-left">
            <motion.h1 variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } }} className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-8 [text-shadow:-1.5px_-1.5px_0_#0D3D20,1.5px_-1.5px_0_#0D3D20,-1.5px_1.5px_0_#0D3D20,1.5px_1.5px_0_#0D3D20,0_10px_15px_rgba(0,0,0,0.5)]">
              Importamos confianza. <br/>
              <span className="text-[#FFCC00]">Distribuimos salud animal.</span>
            </motion.h1>
            
            <motion.div variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { type: "spring", damping: 12, stiffness: 100 } } }} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <BotonCTA text="Ver catálogo" onClick={() => navigate('/productos')} variant="primary" />
              <BotonCTA text="Cotizar por WhatsApp" href="https://wa.me/593999999999" variant="secondary" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* BLOQUES BENTO SUPERPUESTOS AL HERO */}
      <div className="-mt-20 md:-mt-28 relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[10px]"
        >
          {/* Card 1: Bloque Ancho Avicultura (Columna 1-2) */}
          <motion.div 
            variants={fadeInUp}
            whileHover={{ y: -6 }}
            onClick={() => navigate('/productos')}
            className="md:col-span-2 bg-[#E7ECE4] rounded-[2.5rem] p-8 shadow-2xl border border-white/60 flex flex-col justify-between cursor-pointer group relative overflow-hidden h-full min-h-[280px]"
          >
            <div className="absolute inset-0 z-0 pt-[70px] pb-[10px] pr-[10px]">
              <img src="/aves.png" alt="Línea Avícola" className="w-full h-full object-contain object-right-bottom group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="flex flex-col justify-between h-full max-w-sm relative z-10">
              <div>
                <span className="text-[var(--color-aovet-primary)] font-bold text-xs uppercase tracking-widest block mb-1">Avicultura de Alta Eficacia</span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#2C382E] font-serif mb-3 leading-tight">Salud y Nutrición Avícola</h3>
                <p className="text-sm text-[#2C382E] font-medium leading-relaxed mb-6">Protección integral y bioseguridad para maximizar el rendimiento de tu galpón.</p>
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-bold text-[var(--color-aovet-primary)] group-hover:underline">Ver línea avícola <ArrowRight size={16} /></span>
            </div>
          </motion.div>

          {/* Card 2: Bloque Apilado Central (Columna 3) */}
          <motion.div variants={fadeInUp} className="flex flex-col gap-[10px] h-full">
            <motion.div whileHover={{ y: -4 }} onClick={() => navigate('/productos')} className="flex-1 bg-[#EBE5D8] rounded-[2.5rem] p-6 sm:p-7 shadow-xl border border-white/60 flex items-center justify-between gap-4 cursor-pointer group">
              <div>
                <h4 className="font-bold text-[#2C382E] text-lg mb-1">Ganadería de Precisión</h4>
                <p className="text-xs text-gray-600">Act Antiflam y tratamientos especializados.</p>
              </div>
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white flex-shrink-0 shadow-md">
                <img src={catGanado} alt="Ganadería" className="w-full h-full object-cover" />
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -4 }} onClick={() => navigate('/productos')} className="flex-1 bg-[#E5DFD4] rounded-[2.5rem] p-6 sm:p-7 shadow-xl border border-white/60 flex items-center justify-between gap-4 cursor-pointer group">
              <div>
                <h4 className="font-bold text-[#2C382E] text-lg mb-1">Sector Industrial</h4>
                <p className="text-xs text-gray-600">Soluciones de alto rendimiento.</p>
              </div>
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white flex-shrink-0 shadow-md">
                <img src={prodVacuna} alt="Porcinos" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </motion.div>

          {/* Card 3: Bloque Alto Derecha (Columna 4) */}
          <motion.div 
            variants={fadeInUp}
            whileHover={{ y: -6 }}
            onClick={() => navigate('/productos')}
            className="bg-[var(--color-aovet-dark)] text-white rounded-[2.5rem] p-8 shadow-2xl border border-gray-800 flex flex-col justify-between cursor-pointer group relative overflow-hidden"
          >
            <div>
              <span className="text-[var(--color-aovet-accent)] font-bold text-xs uppercase tracking-widest block mb-2">Clínicas & Pet</span>
              <h3 className="text-2xl font-bold font-serif mb-3 leading-tight">Línea Pet Especializada</h3>
              <p className="text-xs text-gray-300 leading-relaxed mb-6">Próximamente: Antipulgas, suplementos y cuidado especializado para mascotas.</p>
            </div>
            <div className="w-full h-36 rounded-2xl overflow-hidden border-2 border-white/20 shadow-md">
              <img src={catMascotas} alt="Línea Pet Mascotas" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="mt-16">
        <SeparadorGrieta />
      </div>
      
      {/* SECCIÓN 2: LÍNEAS DE PRODUCCIÓN */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-[var(--color-aovet-dark)] rounded-[2.5rem] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 items-center lg:items-start relative shadow-lg"
        >
          {/* Lado Izquierdo: Textos y Botón */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="lg:w-1/3 flex flex-col justify-between h-full z-10"
          >
            <div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold text-[var(--color-aovet-accent)] uppercase tracking-wide mb-6">
                SOLUCIONES <br/> ESPECIALIZADAS
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-300 text-lg font-medium mb-10 max-w-sm">
                Líneas de productos veterinarios diseñadas para satisfacer los más altos estándares de cada sector productivo.
              </motion.p>
            </div>
            
            <motion.button 
              variants={fadeInUp}
              onClick={() => navigate('/productos')}
              className="self-start bg-[var(--color-aovet-primary)] text-white hover:bg-white hover:text-[var(--color-aovet-primary)] font-bold py-3 px-8 rounded-full transition-colors flex items-center gap-2 shadow-md"
            >
              VER CATÁLOGO
            </motion.button>
          </motion.div>

          {/* Lado Derecho: Círculos de Categorías */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-8 w-full z-10 mt-8 lg:mt-0"
          >
            {[
              { id: 'avicultura', name: 'Avicultura', desc: 'Salud integral para aves.', img: catAves },
              { id: 'ganaderia', name: 'Ganadería', desc: 'Desparasitantes y tratamientos.', img: catGanado },
              { id: 'industrial', name: 'Industrial', desc: 'Soluciones productivas.', img: secVetProducts }
            ].map((cat, idx) => (
              <motion.div key={idx} variants={scaleIn} className="flex flex-col items-center text-center group cursor-pointer" onClick={() => navigate('/productos')}>
                <div className={`w-40 h-40 rounded-full mb-6 flex items-center justify-center border-[6px] border-white/10 shadow-xl group-hover:scale-105 group-hover:border-[var(--color-aovet-accent)] transition-all overflow-hidden relative`}>
                  <img src={cat.img} alt={cat.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-white text-lg mb-2">{cat.name}</h3>
                <p className="text-sm text-gray-400 px-2">{cat.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* SECCIÓN 3: PRODUCTOS RECOMENDADOS */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, width: "0%" }} whileInView={{ opacity: 1, width: "100%" }} transition={{ duration: 1 }} viewport={{ once: true }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <div className="h-px bg-gray-300 flex-grow max-w-[100px]"></div>
          <span className="text-[var(--color-aovet-primary)]">♥</span>
          <h2 className="text-xl md:text-2xl font-bold text-[var(--color-aovet-dark)] uppercase tracking-widest text-center px-4">
            PRODUCTOS RECOMENDADOS
          </h2>
          <span className="text-[var(--color-aovet-primary)]">♥</span>
          <div className="h-px bg-gray-300 flex-grow max-w-[100px]"></div>
        </motion.div>

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {productos.filter(p => ['act-antiflam', 'act-proboost-bolus', 'inusap-liquid', 'milkmore-gold'].includes(p.slug)).map((prod, idx) => (
            <motion.div key={idx} variants={fadeInUp} whileHover={{ y: -5 }} onClick={() => navigate(`/producto/${prod.slug}`)} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200 flex items-center gap-4 relative group hover:shadow-md transition-all cursor-pointer">
              <div className="w-20 h-24 bg-gray-50 rounded-xl overflow-hidden flex items-center justify-center flex-shrink-0 p-1">
                <img src={prod.imagen} alt={prod.nombre} className="w-full h-full object-contain mix-blend-multiply" />
              </div>
              <div className="flex flex-col justify-center flex-grow pr-8">
                <h3 className="font-bold text-[var(--color-aovet-dark)] text-sm leading-tight mb-1">{prod.nombre}</h3>
                <p className="text-xs text-gray-500 mb-2 leading-tight line-clamp-2">{prod.descripcionBreve || prod.descripcion}</p>
                <span className="font-bold text-[var(--color-aovet-primary)] text-sm">Ver Detalles</span>
              </div>
              <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-gray-100 text-[var(--color-aovet-primary)] flex items-center justify-center group-hover:bg-[var(--color-aovet-primary)] group-hover:text-white transition-colors shadow-sm">
                <ArrowRight size={16} strokeWidth={2.5} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* SECCIÓN EDITORIAL UNIFICADA */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-gradient-to-b from-[#EBE5D8] via-[#E7ECE4] to-[#DFE6D8] rounded-[2.5rem] p-8 md:p-12 lg:p-16 space-y-16 relative shadow-sm border border-gray-100"
        >
          {/* PARTE 1 */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <motion.div variants={fadeInUp} className="flex flex-col justify-center space-y-6">
              <div>
                <span className="text-[var(--color-aovet-primary)] font-bold text-xs uppercase tracking-widest mb-1 block">Excelencia Pecuaria</span>
                <h3 className="text-3xl font-extrabold text-[#2C382E] font-serif italic leading-tight mb-4">Salud & Nutrición AOVET</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-white/70 backdrop-blur-sm p-3 rounded-2xl">
                  <div className="w-12 h-12 rounded-full bg-[#C87D53] flex items-center justify-center text-white font-bold flex-shrink-0"><ShieldCheck size={24} /></div>
                  <div><h4 className="font-bold text-[#2C382E] text-sm">Control Sanitario</h4><p className="text-xs text-gray-600">Protocolos respaldados por veterinarios.</p></div>
                </div>
                <div className="flex items-center gap-4 bg-white/70 backdrop-blur-sm p-3 rounded-2xl">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-aovet-primary)] flex items-center justify-center text-white font-bold flex-shrink-0"><Sparkles size={24} /></div>
                  <div><h4 className="font-bold text-[#2C382E] text-sm">Rendimiento Óptimo</h4><p className="text-xs text-gray-600">Fórmulas científicas concentradas.</p></div>
                </div>
              </div>
            </motion.div>
            <motion.div variants={scaleIn} className="flex flex-col items-center justify-center relative">
              <div className="w-64 h-80 rounded-t-[8rem] rounded-b-3xl bg-[#C87D53] overflow-hidden p-3 shadow-xl relative flex items-end justify-center">
                <div className="w-full h-full rounded-t-[7.5rem] rounded-b-2xl overflow-hidden bg-white"><img src={secArchCow} alt="Ganado vacuno AOVET" className="w-full h-full object-cover" /></div>
              </div>
              <div className="absolute -bottom-4 -right-2 md:right-8 bg-white border-2 border-[#C87D53] text-[#2C382E] text-xs font-bold w-20 h-20 rounded-full flex flex-col items-center justify-center text-center shadow-lg p-1 animate-pulse"><Award size={18} className="text-[#C87D53] mb-1" /><span>100% Calidad</span></div>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-col items-center lg:items-start space-y-4">
              <div className="w-full max-w-xs bg-white/80 backdrop-blur-sm rounded-3xl p-4 shadow-sm border border-white flex flex-col items-center text-center">
                <div className="w-48 h-48 rounded-t-[5rem] rounded-b-2xl overflow-hidden mb-4 bg-gray-100 shadow-inner"><img src={secArchVet} alt="Veterinaria especialista" className="w-full h-full object-cover" /></div>
                <h4 className="font-bold text-[#2C382E] text-base mb-1">Respaldo Técnico</h4><p className="text-xs text-gray-600 leading-relaxed px-2">Asesoría personalizada en cada dosis para maximizar la productividad en finca.</p>
              </div>
            </motion.div>
          </motion.div>

          {/* PARTE 2 */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center pt-4">
            <motion.div variants={fadeInUp} className="flex justify-center items-center">
              <img src="/Insumos.png" alt="Insumos veterinarios AOVET" className="max-h-[340px] w-auto object-contain drop-shadow-lg hover:scale-105 transition-transform duration-300" />
            </motion.div>
            <motion.div variants={fadeInUp} className="text-center lg:text-left flex flex-col justify-center space-y-4">
              <h3 className="text-3xl font-extrabold text-[#2C382E] font-serif leading-tight">Insumos de Clase Mundial</h3>
              <p className="text-sm text-gray-700 leading-relaxed">Importamos de los laboratorios más confiables a nivel internacional los medicamentos y nutrientes que garantizan la salud de tu ganadería y avicultura.</p>
              <div className="pt-2 flex justify-center lg:justify-start gap-3">
                <span className="inline-flex items-center gap-1 text-xs font-bold bg-white text-[#2C382E] px-4 py-2 rounded-full shadow-sm"><CheckCircle size={14} className="text-[var(--color-aovet-primary)]" /> Bio-seguros</span>
                <span className="inline-flex items-center gap-1 text-xs font-bold bg-white text-[#2C382E] px-4 py-2 rounded-full shadow-sm"><CheckCircle size={14} className="text-[var(--color-aovet-primary)]" /> Garantía Total</span>
              </div>
            </motion.div>
            <motion.div variants={scaleIn} className="flex justify-center">
              <div className="w-60 h-72 rounded-t-[7rem] rounded-b-3xl bg-[#AEC2AA] p-3 shadow-lg flex flex-col items-center justify-between text-center text-[#2C382E]">
                <div className="w-full h-44 rounded-t-[6.5rem] rounded-b-2xl overflow-hidden bg-white"><img src={catGanado} alt="Ganadería de precisión" className="w-full h-full object-cover" /></div>
                <div className="py-2"><span className="font-bold text-sm block">Ganadería de Precisión</span><span className="text-[11px] text-gray-700">Mayor producción de leche y carne.</span></div>
              </div>
            </motion.div>
          </motion.div>

          {/* PARTE 3 */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-4">
            <motion.div variants={fadeInUp} className="lg:col-span-2 h-[350px] lg:h-auto rounded-3xl overflow-hidden shadow-md relative group">
              <img src={secFarmAction} alt="Veterinario en campo Ecuador" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-8 text-white">
                <span className="text-[var(--color-aovet-accent)] font-bold text-xs uppercase tracking-widest mb-1">Acompañamiento Técnico</span>
                <h4 className="text-2xl font-bold">Asistencia Directa en Finca</h4>
                <p className="text-sm text-gray-200 max-w-lg mt-1">Nuestros profesionales visitan tus instalaciones para realizar diagnósticos certeros y planes de tratamiento a medida.</p>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 flex flex-col justify-between shadow-sm border border-white/60 relative overflow-hidden">
              <div>
                <div className="w-12 h-12 rounded-full bg-[var(--color-aovet-primary)] text-white flex items-center justify-center mb-6 shadow-sm"><HeartHandshake size={24} /></div>
                <h3 className="text-2xl font-bold text-[#2C382E] font-serif mb-4">Consejos & Asesoría</h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-6">¿Dudas sobre dosis o tratamientos? Contáctate directamente con nuestros especialistas de campo.</p>
              </div>
              <button onClick={() => window.open('https://wa.me/593999999999', '_blank')} className="w-full bg-[var(--color-aovet-primary)] hover:bg-[var(--color-aovet-dark)] text-white font-bold py-3.5 px-6 rounded-full transition-colors flex items-center justify-center gap-2 shadow-sm text-sm">
                Consultar un especialista <ArrowRight size={16} />
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* SECCIÓN 4: POR QUÉ ELEGIRNOS */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}
          className="bg-[#E7ECE4] rounded-[2.5rem] flex flex-col lg:flex-row overflow-hidden shadow-lg border border-gray-100"
        >
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="w-full lg:w-[55%] p-8 md:p-12 lg:p-16 flex flex-col justify-between z-10">
            <div className="mb-12">
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl text-[var(--color-aovet-dark)] font-serif italic mb-6">Por qué elegir AOVET</motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-700 text-lg font-medium max-w-md leading-relaxed">Garantizamos el éxito de tu producción con productos comprobados, cadena de frío estricta y asesoría constante.</motion.p>
            </div>
            <motion.button variants={fadeInUp} onClick={() => navigate('/nosotros')} className="self-start bg-[var(--color-aovet-primary)] hover:bg-[var(--color-aovet-dark)] text-white font-bold py-3 px-8 rounded-full transition-colors flex items-center gap-2 mb-12 shadow-sm">
              NUESTRA HISTORIA
            </motion.button>
            <motion.div variants={staggerContainer} className="grid grid-cols-3 gap-2 sm:gap-4 lg:pr-12">
              {[{ icon: ShieldCheck, text: "Calidad Certificada" }, { icon: Zap, text: "Respuesta Rápida" }, { icon: PackageCheck, text: "Cadena de Frío" }].map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <motion.div variants={fadeInUp} key={idx} className="flex flex-col items-center text-center">
                    <Icon size={32} className="text-[var(--color-aovet-primary)] mb-3" strokeWidth={1.5} />
                    <p className="text-sm font-bold text-[var(--color-aovet-dark)] leading-tight">{feat.text}</p>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>
          <div className="w-full h-[350px] lg:h-auto lg:w-[45%] z-0">
            <div className="w-full h-full relative overflow-hidden imagen-curva-referencia">
              <img src={nosotrosBg} alt="Instalaciones AOVET" className="w-full h-full object-cover" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* SECCIÓN 5: PRE-FOOTER */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-12 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-10 shadow-md border border-gray-100 flex flex-col md:flex-row justify-between gap-12"
        >
          <div className="flex gap-6 items-start">
            <div className="w-24 h-24 hidden lg:flex flex-col justify-center items-center text-[var(--color-aovet-primary)]/20">
              <ShieldCheck size={64} strokeWidth={1} />
            </div>
            <div>
              <h3 className="font-bold text-[var(--color-aovet-dark)] text-xl mb-1">¡Te esperamos!</h3>
              <p className="text-xs text-[var(--color-aovet-primary)] font-bold mb-4">Mgs. Mvz. Franklin Jonatan Arichabala Yanza</p>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center gap-3"><MapPin size={18} className="text-[var(--color-aovet-primary)] flex-shrink-0" /><span>San Juanpamba - vía a Jadan Cuenca - Ecuador</span></li>
                <li className="flex items-center gap-3"><Phone size={18} className="text-[var(--color-aovet-primary)] flex-shrink-0" /><span className="font-bold">0985401224</span></li>
                <li className="flex items-center gap-3"><Mail size={18} className="text-[var(--color-aovet-primary)] flex-shrink-0" /><span>jonatanarichabala_89@hotmail.com</span></li>
              </ul>
            </div>
          </div>
          <div className="flex-grow flex flex-col md:flex-row items-end md:items-start gap-8 md:justify-end">
            <div className="w-full max-w-md">
              <h3 className="font-bold text-[var(--color-aovet-dark)] text-xl mb-4">Suscríbete a novedades<br/>y promociones</h3>
              <div className="flex border border-gray-300 rounded-full overflow-hidden p-1 focus-within:border-[var(--color-aovet-primary)] focus-within:ring-1 focus-within:ring-[var(--color-aovet-primary)] transition-all bg-gray-50">
                <input type="email" placeholder="Tu e-mail" className="bg-transparent border-none outline-none px-4 flex-grow text-sm text-gray-700" />
                <button className="bg-[var(--color-aovet-accent)] hover:bg-[var(--color-aovet-dark)] text-white px-6 py-2 rounded-full text-sm font-bold transition-colors">Suscribirse</button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default Inicio;
