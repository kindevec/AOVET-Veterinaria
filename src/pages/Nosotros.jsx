import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Users, Leaf, ShieldCheck, Milestone, Award, CheckCircle2, HeartHandshake, Sparkles, Building2, Truck, Target, Compass, Check, MessageCircle, PackageCheck, Recycle, Zap, Snowflake } from 'lucide-react';
import SeparadorGrieta from '../components/ui/SeparadorGrieta';
import BotonCTA from '../components/ui/BotonCTA';
import Timeline3D from '../components/ui/Timeline3D';

// Imágenes
import aovetComprometidos from '../assets/images/aovet_comprometidos_salud.jpg';
import nosMainVet from '../assets/images/nos_main_vet_1785908284799.webp';
import nosTeamDir from '../assets/images/nos_team_dir_1785908292981.webp';
import imgDireccionTecnica from '../assets/images/aovet_direccion_tecnica.jpg';
import nosTeamTech from '../assets/images/aovet_veterinario_campo.webp';
import nosotrosBg from '../assets/images/nosotros-bg.jpg';
import imgFundacionAves from '../assets/images/aovet_fundacion_aves.jpg';
import imgExpansionGanadera from '../assets/images/aovet_expansion_ganadera.jpg';
import imgCobertura247 from '../assets/images/aovet_cobertura_24_7.jpg';
import imgSostenibilidad from '../assets/images/aovet_sostenibilidad_zootecnia.jpg';
import catGanado from '../assets/images/aovet_ganado_campo.webp';
import catAves from '../assets/images/cat_aves_1785906732448.webp';
import paisajeCampo from '../assets/images/aovet_paisaje_campo.webp';

const valores = [
  "Calidad certificada",
  "Asesoría técnica",
  "Cobertura nacional",
  "Marcas internacionales"
];

const hitosHistoria = [
  { 
    id: "hito-2010",
    year: "2010", 
    title: "Fundación AOVET", 
    text: "Inicios enfocados en la importación de biológicos avícolas de alta calidad y asesoría sanitaria integral para el sector productivo.",
    category: "Avicultura",
    image: imgFundacionAves,
    highlight: "Pioneros en biológicos avícolas"
  },
  { 
    id: "hito-2015",
    year: "2015", 
    title: "Expansión Ganadera", 
    text: "Ampliación de portafolio para ganado de leche y carne con formulaciones farmacológicas y nutricionales de vanguardia.",
    category: "Ganadería",
    image: imgExpansionGanadera,
    imagePosition: "object-[center_70%]",
    highlight: "Nutrición y sanidad bovina"
  },
  { 
    id: "hito-2020",
    year: "2020", 
    title: "Alianzas Globales", 
    text: "Representación exclusiva de laboratorios internacionales y rigurosa certificación de Buenas Prácticas de Almacenamiento.",
    category: "Alianzas",
    image: nosMainVet,
    highlight: "Calidad farmacéutica certificada"
  },
  { 
    id: "hito-actualidad",
    year: "Actualidad", 
    title: "Cobertura 24/7", 
    text: "Red logística que abastece a todo el país con cadena de frío garantizada y acompañamiento técnico directo en finca.",
    category: "Cadena de Frío",
    image: imgCobertura247,
    highlight: "Monitoreo térmico permanente"
  }
];

const Nosotros = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[var(--color-aovet-bg)] font-sans">
      
      {/* 1. HERO BANNER DE NOSOTROS */}
      <section className="relative flex flex-col justify-center bg-gray-900 pt-20 pb-24 md:pb-36 overflow-hidden h-[580px] sm:h-[660px] md:h-[720px] lg:h-[760px] min-h-[580px] md:min-h-[660px] lg:min-h-[760px]">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${nosotrosBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/65 via-transparent to-black/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex flex-col justify-center pt-12 pb-24">
          <div className="mb-4 sm:mb-6 flex justify-center w-full -translate-y-4 sm:-translate-y-6 md:-translate-y-8">
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
              animate={{
                y: [0, -6, 0],
                transition: { repeat: Infinity, duration: 4.5, ease: "easeInOut" }
              }}
              whileHover={{ scale: 1.02 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-serif text-center leading-[1.12] tracking-tight mb-8 sm:mb-12 antialiased cursor-default select-none mx-auto max-w-5xl -translate-y-4 sm:-translate-y-6 md:-translate-y-8"
            >
              <motion.span className="text-[var(--color-aovet-accent)] inline-block drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
                Sobre Nosotros
              </motion.span>
            </motion.h1>

            <motion.div variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { type: "spring", damping: 12, stiffness: 100 } } }} className="flex flex-wrap gap-3 sm:gap-4 justify-center items-center w-full sm:w-auto mx-auto -translate-y-2 sm:-translate-y-4">
              <BotonCTA 
                text="Contáctanos" 
                onClick={() => navigate('/contacto')} 
                variant="primary" 
                icon={MessageCircle} 
              />
              <BotonCTA 
                text="Ver Servicios" 
                onClick={() => navigate('/servicios')} 
                variant="secondary" 
                icon={PackageCheck}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECCIÓN 1: COMPROMETIDOS CON LA SALUD Y PRODUCTIVIDAD ANIMAL */}
      <section className="py-12 sm:py-16 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="bg-[#E7ECE4] rounded-3xl lg:rounded-[2.5rem] overflow-hidden shadow-xl border border-white/60 grid grid-cols-1 lg:grid-cols-12"
          >
            {/* Columna Izquierda: Información (5 columnas en desktop) */}
            <div className="lg:col-span-5 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-extrabold text-[var(--color-aovet-dark)] font-serif mb-4 sm:mb-6 leading-tight text-center">
                  Comprometidos con la salud y productividad animal
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
                  En <strong className="text-[var(--color-aovet-primary)]">AOVET</strong> nos especializamos en la importación y distribución estratégica de productos veterinarios certificados con los más rigurosos estándares de bioseguridad. Acompañamos a cada productor con asesoría técnica especializada y soluciones de vanguardia orientadas a optimizar la salud, el bienestar y el rendimiento productivo en granjas de todo el país.
                </p>
              </div>

              {/* 4 Valores Originales */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {valores.map((valor, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white/80 backdrop-blur-sm p-3 sm:p-3.5 rounded-2xl shadow-sm border border-white/70">
                    <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-aovet-accent)] flex-shrink-0"></div>
                    <span className="font-bold text-[var(--color-aovet-dark)] text-xs sm:text-sm">{valor}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Columna Derecha: Imagen más amplia y centrada (7 columnas en desktop) */}
            <div className="lg:col-span-7 relative h-full min-h-[380px] sm:min-h-[460px] lg:min-h-[520px] overflow-hidden">
              <img 
                src={aovetComprometidos} 
                alt="Comprometidos con la salud y productividad animal AOVET" 
                width="800"
                height="600"
                decoding="async"
                className="w-full h-full object-cover object-center scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-aovet-dark)]/50 via-transparent to-transparent"></div>
              
              {/* Sello flotante de garantía */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/60 shadow-lg flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-aovet-primary)] text-white flex items-center justify-center flex-shrink-0 shadow-md">
                    <Award size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-[var(--color-aovet-dark)] text-sm sm:text-base">Garantía Internacional</p>
                    <p className="text-gray-600 text-xs mt-0.5">Productos certificados y bioseguros para el campo.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <SeparadorGrieta />

      {/* SECCIÓN 2: MISIÓN Y VISIÓN */}
      <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
        {/* Decoración de Fondo */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[var(--color-aovet-bg)] rounded-full filter blur-3xl opacity-70 pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-50 rounded-full filter blur-3xl opacity-60 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[var(--color-aovet-bg)] text-[var(--color-aovet-primary)] border border-[var(--color-aovet-primary)]/20 font-bold text-xs uppercase tracking-widest mb-3">
              <Sparkles size={13} className="text-[var(--color-aovet-accent)]" />
              Nuestra Razón de Ser
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-aovet-dark)] font-serif leading-tight">
              Misión & Visión
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-3 text-sm sm:text-base leading-relaxed">
              Los pilares y valores estratégicos que guían nuestro compromiso diario con la sanidad animal.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Card Misión */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#F2F7F0] via-white to-[#E8F2E4] rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-10 lg:p-12 shadow-xl border border-emerald-100/90 flex flex-col justify-between relative overflow-hidden group hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500"
            >
              {/* Marca de Agua / Icono Decorativo Suave */}
              <div className="absolute -right-8 -bottom-8 w-44 h-44 text-emerald-900/5 pointer-events-none group-hover:scale-110 transition-transform duration-700">
                <Target size={176} />
              </div>

              <div>
                {/* Cabecera Misión */}
                <div className="flex items-center gap-4 mb-6 sm:mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--color-aovet-primary)] text-white flex items-center justify-center shadow-lg shadow-[var(--color-aovet-primary)]/25 group-hover:scale-110 transition-transform duration-500 flex-shrink-0">
                    <Target size={28} />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--color-aovet-dark)] font-serif">Misión</h3>
                </div>

                {/* Texto Justificado */}
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-[1.05rem] text-justify font-normal mb-6">
                  Brindar soluciones veterinarias de alta calidad mediante la importación y distribución de productos confiables e innovadores, contribuyendo a la salud y productividad animal. Nos comprometemos a ofrecer un servicio eficiente, asesoría técnica especializada y relaciones comerciales basadas en la confianza, satisfaciendo las necesidades de nuestros clientes y promoviendo el desarrollo sostenible del sector pecuario.
                </p>
              </div>

              {/* Pilares Clave Misión */}
              <div className="pt-4 border-t border-emerald-900/10 space-y-2 relative z-10">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[var(--color-aovet-dark)]">
                  <Check size={16} className="text-[var(--color-aovet-primary)] flex-shrink-0" />
                  <span>Soluciones innovadoras y certificadas</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[var(--color-aovet-dark)]">
                  <Check size={16} className="text-[var(--color-aovet-primary)] flex-shrink-0" />
                  <span>Asesoría técnica y atención personalizada</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[var(--color-aovet-dark)]">
                  <Check size={16} className="text-[var(--color-aovet-primary)] flex-shrink-0" />
                  <span>Desarrollo sostenible del sector pecuario</span>
                </div>
              </div>
            </motion.div>

            {/* Card Visión */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-[#0D3D20] via-[#124E2A] to-[#0A2E18] text-white rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-10 lg:p-12 shadow-2xl border border-emerald-500/20 flex flex-col justify-between relative overflow-hidden group hover:shadow-[0_25px_60px_rgba(13,61,32,0.4)] hover:-translate-y-1.5 transition-all duration-500"
            >
              {/* Marca de Agua / Icono Decorativo Suave */}
              <div className="absolute -right-8 -bottom-8 w-44 h-44 text-white/5 pointer-events-none group-hover:scale-110 transition-transform duration-700">
                <Compass size={176} />
              </div>

              <div>
                {/* Cabecera Visión */}
                <div className="flex items-center gap-4 mb-6 sm:mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--color-aovet-accent)] text-[var(--color-aovet-dark)] flex items-center justify-center shadow-lg shadow-[var(--color-aovet-accent)]/25 group-hover:scale-110 transition-transform duration-500 flex-shrink-0">
                    <Compass size={28} />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-serif">Visión</h3>
                </div>

                {/* Texto Justificado */}
                <p className="text-emerald-50/95 leading-relaxed text-sm sm:text-base md:text-[1.05rem] text-justify font-normal mb-6">
                  Ser la empresa líder en la importación y distribución de productos veterinarios, reconocida por la excelencia de su portafolio, la innovación, el servicio al cliente y el respaldo técnico. Aspiramos a expandir nuestra presencia en el mercado nacional y regional, convirtiéndonos en el aliado estratégico de productores, médicos veterinarios y distribuidores para impulsar una producción animal más eficiente, saludable y sostenible.
                </p>
              </div>

              {/* Pilares Clave Visión */}
              <div className="pt-4 border-t border-white/10 space-y-2 relative z-10">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-100">
                  <Sparkles size={15} className="text-[var(--color-aovet-accent)] flex-shrink-0" />
                  <span>Liderazgo en el mercado nacional y regional</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-100">
                  <Sparkles size={15} className="text-[var(--color-aovet-accent)] flex-shrink-0" />
                  <span>Excelencia de portafolio y respaldo técnico</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-100">
                  <Sparkles size={15} className="text-[var(--color-aovet-accent)] flex-shrink-0" />
                  <span>Aliado estratégico de productores y veterinarios</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: NUESTRA HISTORIA (Timeline 3D Interactivo) */}
      <div id="historia-seccion">
        <Timeline3D 
          events={hitosHistoria} 
          badge="Trayectoria"
          title="Nuestra Historia"
          subtitle="Un crecimiento sostenido enfocado en la innovación y respaldo al productor."
          className="bg-[var(--color-aovet-bg)]"
        />
      </div>

      {/* SECCIÓN 4: NUESTRO EQUIPO (Con Fotos Profesionales) */}
      <section className="pt-16 sm:pt-20 pb-8 sm:pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--color-aovet-primary)] font-bold text-xs uppercase tracking-widest mb-1 block">Talento Humano</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-aovet-dark)] font-serif mb-4">El equipo detrás de AOVET</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Profesionales apasionados por la salud animal y el servicio técnico.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { 
                role: "Dirección General", 
                desc: "Visión estratégica, desarrollo de alianzas internacionales y liderazgo comercial.", 
                img: nosTeamDir,
                pos: "object-top"
              },
              { 
                role: "Dirección Técnica Veterinaria", 
                desc: "Médicos veterinarios dedicados al diagnóstico y seguimiento sanitario en finca.", 
                img: imgDireccionTecnica,
                pos: "object-center"
              }
            ].map((team, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, scale: 0.95 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                viewport={{ once: true }} 
                className="bg-[var(--color-aovet-bg)] rounded-[2.5rem] overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col group"
              >
                <div className="h-72 sm:h-80 w-full overflow-hidden relative bg-gray-100">
                  <img 
                    src={team.img} 
                    alt={team.role} 
                    width="500" 
                    height="400" 
                    loading="lazy" 
                    decoding="async" 
                    className={`w-full h-full object-cover ${team.pos} group-hover:scale-105 transition-transform duration-500`} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-aovet-dark)]/80 via-[var(--color-aovet-dark)]/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-0 right-0 text-center text-white font-bold text-lg sm:text-xl px-4">
                    {team.role}
                  </div>
                </div>
                <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between items-center text-center">
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 text-center">{team.desc}</p>
                  <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-[var(--color-aovet-primary)]">
                    <CheckCircle2 size={16} /> <span>Equipo Calificado AOVET</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Separador Orgánico igual a Inicio */}
      <div className="-my-3">
        <SeparadorGrieta />
      </div>

      {/* SECCIÓN 5: SOSTENIBILIDAD Y COMPROMISO AMBIENTAL */}
      <section className="pt-2 sm:pt-4 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-50px" }}
          className="bg-[var(--color-aovet-dark)] rounded-3xl sm:rounded-[2.5rem] text-white relative overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-2 items-stretch"
        >
          {/* Columna Izquierda: Texto con espaciado interior */}
          <div className="relative z-10 flex flex-col justify-center p-8 sm:p-12 lg:p-16">
            <div className="flex items-start gap-4 sm:gap-5 mb-5 sm:mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[var(--color-aovet-primary)] rounded-2xl flex items-center justify-center shadow-md border border-white/10 flex-shrink-0 mt-1">
                <Leaf size={26} className="text-[var(--color-aovet-accent)]" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-serif leading-tight text-white">
                Compromiso con la Sostenibilidad y el Entorno
              </h2>
            </div>
            
            <p className="text-sm sm:text-base md:text-[1.02rem] text-gray-300 leading-relaxed font-normal text-justify mb-6 sm:mb-8">
              Entendemos que el desarrollo pecuario depende directamente del equilibrio con la naturaleza. En AOVET promovemos el uso responsable de productos sanitarios, reciclaje de materiales de empaque y asesoría enfocada en buenas prácticas pecuarias sostenibles.
            </p>

            {/* Iconos y pilares temáticos del texto */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-5 border-t border-white/10">
              <div className="flex items-center gap-2.5 bg-white/5 rounded-xl px-3 py-2.5 border border-white/10">
                <ShieldCheck size={18} className="text-[var(--color-aovet-accent)] flex-shrink-0" />
                <span className="text-xs font-semibold text-gray-200">Uso Responsable</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/5 rounded-xl px-3 py-2.5 border border-white/10">
                <Recycle size={18} className="text-[var(--color-aovet-accent)] flex-shrink-0" />
                <span className="text-xs font-semibold text-gray-200">Reciclaje de Empaque</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/5 rounded-xl px-3 py-2.5 border border-white/10">
                <CheckCircle2 size={18} className="text-[var(--color-aovet-accent)] flex-shrink-0" />
                <span className="text-xs font-semibold text-gray-200">Prácticas Sostenibles</span>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Imagen que ocupa todo el espacio vertical del contenedor */}
          <div className="relative w-full h-full min-h-[300px] sm:min-h-[360px] lg:min-h-full overflow-hidden group">
            <img 
              src={imgSostenibilidad} 
              alt="Economía circular y sostenibilidad pecuaria AOVET" 
              width="600"
              height="600"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 absolute inset-0" 
            />
            {/* Sombra y degradado para integración visual perfecta */}
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[var(--color-aovet-dark)]/40 via-transparent to-transparent pointer-events-none"></div>
          </div>

        </motion.div>
      </section>

    </div>
  );
};

export default Nosotros;
