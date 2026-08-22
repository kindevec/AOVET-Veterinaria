import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Stethoscope, Truck, ShieldCheck, Headset, MapPin, CheckCircle2, ArrowRight, MessageCircle, Sparkles, PackageCheck } from 'lucide-react';
import SeparadorGrieta from '../components/ui/SeparadorGrieta';
import BotonCTA from '../components/ui/BotonCTA';
import WhatsappIcon from '../components/icons/WhatsappIcon';
import MapaEcuadorLogistica from '../components/ui/MapaEcuadorLogistica';
import {
  CardHoverReveal,
  CardHoverRevealContent,
  CardHoverRevealMain
} from '../components/ui/reveal-on-hover';
import { Badge } from '../components/ui/badge';

import heroBgServicios from '../assets/images/aovet_servicios_banner.jpg';
import imgPaso1 from '../assets/images/aovet_contacto_inicial.jpg';
import imgPaso2 from '../assets/images/aovet_asesoria_cotizacion.jpg';
import imgPaso3 from '../assets/images/aovet_despacho_rapido.jpg';
import imgPaso4 from '../assets/images/sec_farm_action_1785907355629.webp';

const PASOS_TRABAJO = [
  {
    id: 'paso-1',
    num: '01',
    title: 'Contacto Inicial',
    description: 'Nos cuentas tu requerimiento por WhatsApp o formulario.',
    imageUrl: imgPaso1,
  },
  {
    id: 'paso-2',
    num: '02',
    title: 'Asesoría y Cotización',
    description: 'Un veterinario analiza tu caso y te envía la proforma.',
    imageUrl: imgPaso2,
  },
  {
    id: 'paso-3',
    num: '03',
    title: 'Despacho Rápido',
    description: 'Preparamos el pedido con cadena de frío si se requiere.',
    imageUrl: imgPaso3,
  },
  {
    id: 'paso-4',
    num: '04',
    title: 'Seguimiento',
    description: 'Confirmamos la llegada y evaluamos los resultados.',
    imageUrl: imgPaso4,
  },
];

const servicios = [
  {
    icon: Stethoscope,
    title: "Asesoría técnica veterinaria"
  },
  {
    icon: ShieldCheck,
    title: "Importación certificada"
  },
  {
    icon: Truck,
    title: "Distribución nacional"
  },
  {
    icon: Headset,
    title: "Soporte post-venta"
  }
];

const Servicios = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[var(--color-aovet-bg)] font-sans">
      
      {/* 1. HERO BANNER DE SERVICIOS */}
      <section className="relative flex flex-col justify-center bg-gray-900 pt-20 pb-24 md:pb-36 overflow-hidden h-[580px] sm:h-[660px] md:h-[720px] lg:h-[760px] min-h-[580px] md:min-h-[660px] lg:min-h-[760px]">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBgServicios})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/65 via-black/45 to-black/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex flex-col justify-center pt-24 sm:pt-16 md:pt-14 pb-16 sm:pb-24">
          <div className="mb-4 sm:mb-6 flex justify-center w-full translate-y-3 sm:-translate-y-4 md:-translate-y-6">
            <motion.svg width="80" height="100" viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg" initial="hidden" animate="visible">
              <motion.path d="M40 90 C 15 90 5 65 5 50 C 5 20 20 5 40 5 C 60 5 75 20 75 50 C 75 65 65 90 40 90 Z" stroke="#FB923C" strokeWidth="3" variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 1.5, ease: "easeInOut" } } }} />
              <motion.path d="M20 40 L 40 50 L 30 65 L 50 75 L 45 90" stroke="#FB923C" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 1, delay: 1.2, ease: "easeOut" } } }} />
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
              <motion.span className="text-[#FB923C] inline-block drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)] drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] [text-shadow:_0_2px_14px_rgba(0,0,0,0.85)]">
                Nuestros Servicios
              </motion.span>
            </motion.h1>

            <motion.p
              variants={{ 
                hidden: { opacity: 0, y: 20 }, 
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } 
              }}
              className="text-base sm:text-lg md:text-xl text-white/95 font-medium max-w-2xl mx-auto text-center mb-8 sm:mb-10 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] [text-shadow:_0_1px_8px_rgba(0,0,0,0.85)] translate-y-2 sm:-translate-y-4 md:-translate-y-6"
            >
              Acompañamiento veterinario integral en granja, diagnóstico de precisión y logística de distribución rápida a nivel nacional.
            </motion.p>

            <motion.div variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { type: "spring", damping: 12, stiffness: 100 } } }} className="flex flex-wrap gap-3 sm:gap-4 justify-center items-center w-full sm:w-auto mx-auto translate-y-1 sm:-translate-y-2 md:-translate-y-4">
              <BotonCTA 
                text="Asesoría Técnica" 
                href="https://wa.me/593985401224" 
                variant="primary" 
                icon={WhatsappIcon} 
              />
              <BotonCTA 
                text="Ver Catálogo" 
                onClick={() => navigate('/productos')} 
                variant="secondary" 
                icon={PackageCheck}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Grilla de 4 Servicios Principales */}
      <section className="pt-8 sm:pt-12 pb-3 sm:pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6" 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.1 }} 
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          >
            {servicios.map((s, idx) => {
              const Icon = s.icon;
              return (
                <motion.div 
                  key={idx} 
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} 
                  whileHover={{ scale: 1.03, y: -5 }} 
                  className="bg-white p-6 sm:p-7 rounded-2xl shadow-md border border-gray-100 flex flex-col items-center text-center transition-shadow hover:shadow-xl"
                >
                  <div className="w-14 h-14 bg-[var(--color-aovet-bg)] text-[var(--color-aovet-primary)] rounded-full flex items-center justify-center mb-4">
                    <Icon size={28} strokeWidth={2} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[var(--color-aovet-dark)]">{s.title}</h3>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      <div className="py-2 sm:py-3">
        <SeparadorGrieta />
      </div>

      {/* 3. Nuestro Proceso de Trabajo */}
      <section className="pt-1 sm:pt-2 pb-4 sm:pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-aovet-dark)] mb-2">
              ¿Cómo trabajamos contigo?
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg">
              Un proceso simple, ágil y centrado en solucionar tus necesidades al instante.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {PASOS_TRABAJO.map((slide, idx) => (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
              >
                <CardHoverReveal className="aspect-[3/4] shadow-md hover:shadow-2xl border border-gray-100 rounded-3xl relative overflow-hidden bg-[var(--color-aovet-dark)] transition-all duration-300">
                  <CardHoverRevealMain>
                    <img
                      alt={slide.title}
                      src={slide.imageUrl}
                      width="600"
                      height="800"
                      loading="lazy"
                      className="size-full object-cover brightness-95"
                    />
                    {/* Gradiente permanente para legibilidad base */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-aovet-dark)]/95 via-[var(--color-aovet-dark)]/40 to-transparent pointer-events-none" />
                    
                    {/* Número de paso visible antes del hover */}
                    <div className="absolute top-5 left-5 z-10">
                      <span className="w-11 h-11 rounded-2xl bg-[var(--color-aovet-accent)] text-[var(--color-aovet-dark)] font-black text-base flex items-center justify-center shadow-md">
                        {slide.num}
                      </span>
                    </div>

                    {/* Título visible inicialmente (sin descripción) */}
                    <div className="absolute bottom-5 left-5 right-5 z-10 pointer-events-none transition-opacity duration-300 group-hover:opacity-0">
                      <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                        {slide.title}
                      </h3>
                    </div>
                  </CardHoverRevealMain>

                  {/* Al pasar el mouse se revela la descripción */}
                  <CardHoverRevealContent className="rounded-2xl bg-[var(--color-aovet-dark)]/95 backdrop-blur-2xl p-4 sm:p-5 border border-emerald-500/20 shadow-2xl text-white">
                    <p className="text-gray-200 text-xs sm:text-sm leading-relaxed font-medium">
                      {slide.description}
                    </p>
                  </CardHoverRevealContent>
                </CardHoverReveal>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="py-2 sm:py-3">
        <SeparadorGrieta />
      </div>

      {/* 4. Cobertura Nacional / Logística Integrada */}
      <section className="pt-3 sm:pt-5 pb-4 sm:pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Columna Izquierda: Información de Cobertura y Logística */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              className="lg:col-span-6 flex flex-col justify-start pt-0 lg:pt-1"
            >
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-[var(--color-aovet-dark)] font-serif mb-7 sm:mb-8 leading-[1.2] text-center">
                  Llegamos a todas las provincias del Ecuador
                </h2>

                <p className="text-gray-700 text-base sm:text-lg lg:text-[1.08rem] mb-10 sm:mb-12 leading-relaxed font-normal text-justify">
                  Nuestra red de distribución está diseñada para despachar oportunamente biológicos, fármacos y suplementos a cada rincón del país. Garantizamos entregas seguras con estricta trazabilidad y control de temperatura desde nuestra sede matriz en Cuenca hacia cualquier cantón o parroquia rural.
                </p>
              </div>

              {/* 4 Pilares Logísticos con animaciones */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full">
                {[
                  "Envíos 24h a capitales",
                  "Entregas directas en finca",
                  "Rastreo y trazabilidad",
                  "Manejo de cadena de frío"
                ].map((item, idx) => (
                  <motion.li 
                    key={idx} 
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ x: 6, transition: { duration: 0.2 } }}
                    className="flex items-center gap-3 text-base sm:text-lg font-bold text-[var(--color-aovet-dark)] cursor-default group"
                  >
                    <div className="w-8 h-8 rounded-full bg-[var(--color-aovet-primary)]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-aovet-primary)] group-hover:text-white transition-colors duration-300">
                      <CheckCircle2 className="text-[var(--color-aovet-accent)] group-hover:text-white transition-colors" size={20} strokeWidth={2.5} />
                    </div>
                    <span className="group-hover:text-[var(--color-aovet-primary)] transition-colors">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            {/* Columna Derecha: Mapa Interactivo de Cobertura Ecuador */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96, x: 20 }} 
              whileInView={{ opacity: 1, scale: 1, x: 0 }} 
              viewport={{ once: true, amount: 0.2 }} 
              transition={{ duration: 0.6 }} 
              className="lg:col-span-6 w-full flex items-start justify-center bg-transparent -mt-2 sm:-mt-5 lg:-mt-10"
            >
              <MapaEcuadorLogistica />
            </motion.div>
          </div>
        </div>
      </section>

      <div className="py-2 sm:py-3">
        <SeparadorGrieta />
      </div>

      {/* 5. CTA de Asesoría / Visita Técnica - ¿Problemas sanitarios en tu producción? */}
      <section className="pt-3 sm:pt-5 pb-10 sm:pb-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[var(--color-aovet-primary)] rounded-3xl sm:rounded-[3rem] p-8 sm:p-10 md:p-14 text-center text-white relative overflow-hidden shadow-2xl">
            {/* Círculos decorativos */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[var(--color-aovet-accent)] opacity-10 rounded-full blur-3xl"></div>
            
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-5 relative z-10">¿Problemas sanitarios en tu producción?</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-6 sm:mb-8 max-w-3xl mx-auto relative z-10">
              No dejes la salud de tus animales al azar. Nuestro equipo de médicos veterinarios está listo para visitarte, evaluar tu situación y diseñar un protocolo sanitario a medida.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 relative z-10">
              <button 
                onClick={() => window.open('https://wa.me/593985401224', '_blank')}
                className="inline-flex items-center gap-2 bg-[var(--color-aovet-accent)] text-[var(--color-aovet-dark)] font-bold px-8 py-3.5 sm:py-4 rounded-full text-base sm:text-lg hover:bg-white transition-all transform hover:scale-105 active:scale-95 shadow-lg cursor-pointer"
              >
                <WhatsappIcon size={22} className="flex-shrink-0" />
                <span>Agenda una visita técnica</span>
              </button>
              <button 
                onClick={() => navigate('/contacto')}
                className="font-bold text-white hover:text-[var(--color-aovet-accent)] underline underline-offset-4 transition-colors text-sm sm:text-base"
              >
                O envíanos un mensaje
              </button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Servicios;
