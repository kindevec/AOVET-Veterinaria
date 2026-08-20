import { motion } from 'motion/react';
import { Users, Leaf, ShieldCheck, Milestone, Award, CheckCircle2, HeartHandshake, Sparkles, Building2, Truck, Target, Compass, Check } from 'lucide-react';
import SeparadorGrieta from '../components/ui/SeparadorGrieta';

// Imágenes
import nosMainVet from '../assets/images/nos_main_vet_1785908284799.webp';
import nosTeamDir from '../assets/images/nos_team_dir_1785908292981.webp';
import nosTeamTech from '../assets/images/aovet_ternero_salud.webp';
import nosotrosBg from '../assets/images/nosotros-bg.webp';
import secFarmAction from '../assets/images/sec_farm_action_1785907355629.webp';
import catGanado from '../assets/images/aovet_ganado_campo.webp';

const valores = [
  "Calidad certificada",
  "Asesoría técnica",
  "Cobertura nacional",
  "Marcas internacionales"
];

const Nosotros = () => {
  return (
    <div className="pt-24 min-h-screen bg-[var(--color-aovet-bg)] font-sans">
      
      {/* SECCIÓN 1: INTRODUCCIÓN PRINCIPAL CON IMAGEN ELEGANTE */}
      <section className="py-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Texto de presentación */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6 }}
            >
              <span className="text-[var(--color-aovet-primary)] font-bold text-xs uppercase tracking-widest mb-2 block">
                Acerca de AOVET
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--color-aovet-dark)] font-serif mb-6 leading-tight">
                Comprometidos con la salud y productividad animal
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 text-justify">
                En <strong className="text-[var(--color-aovet-primary)]">AOVET</strong> nos especializamos en la importación y distribución de productos veterinarios, seleccionando cuidadosamente productos de fabricantes confiables que cumplan con altos estándares de calidad y seguridad.
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-8 text-justify">
                Nuestro compromiso no se limita a entregar un producto. Buscamos brindar asesoría técnica, atención personalizada y soluciones adaptadas a las necesidades de cada cliente, contribuyendo a mejorar el rendimiento, bienestar y productividad de los animales.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {valores.map((valor, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                    <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-aovet-accent)]"></div>
                    <span className="font-bold text-[var(--color-aovet-dark)] text-sm">{valor}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Imagen Principal de Laboratorio / Instalaciones */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative h-[480px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white"
            >
              <img 
                src={nosMainVet} 
                alt="Instalaciones y centro de distribución AOVET" 
                width="600"
                height="480"
                decoding="async"
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-aovet-dark)]/70 via-transparent to-transparent"></div>
              
              {/* Sello flotante de garantía */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/40 shadow-lg flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-aovet-primary)] text-white flex items-center justify-center flex-shrink-0">
                    <Award size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-[var(--color-aovet-dark)] text-base">Garantía Internacional</p>
                    <p className="text-gray-600 text-xs mt-0.5">Productos certificados y bioseguros para el campo.</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
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

      {/* SECCIÓN 3: NUESTRA HISTORIA (Timeline Elegante) */}
      <section className="py-20 bg-[var(--color-aovet-bg)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--color-aovet-primary)] font-bold text-xs uppercase tracking-widest mb-1 block">Trayectoria</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-aovet-dark)] font-serif mb-4">Nuestra Historia</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Un crecimiento sostenido enfocado en la innovación y respaldo al productor.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {[
              { year: "2010", title: "Fundación AOVET", text: "Inicios enfocados en la importación de biológicos avícolas." },
              { year: "2015", title: "Expansión Ganadera", text: "Ampliación de portafolio para ganado de leche y carne." },
              { year: "2020", title: "Alianzas Globales", text: "Representación exclusiva de laboratorios internacionales." },
              { year: "Actualidad", title: "Cobertura 24/7", text: "Red logística que abastece a todo el país con cadena de frío." }
            ].map((hito, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: idx * 0.1 }} 
                className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between items-center text-center relative group hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-[var(--color-aovet-primary)] text-white rounded-2xl flex items-center justify-center font-bold text-lg mb-4 shadow-sm mx-auto group-hover:scale-105 transition-transform">
                  {hito.year}
                </div>
                <div className="text-center w-full">
                  <h3 className="font-bold text-[var(--color-aovet-dark)] text-lg mb-2 text-center">{hito.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed text-center">{hito.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 4: NUESTRO EQUIPO (Con Fotos Profesionales) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--color-aovet-primary)] font-bold text-xs uppercase tracking-widest mb-1 block">Talento Humano</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-aovet-dark)] font-serif mb-4">El equipo detrás de AOVET</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Profesionales apasionados por la salud animal y el servicio técnico.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { role: "Dirección General", desc: "Visión estratégica, desarrollo de alianzas internacionales y liderazgo comercial.", img: nosTeamDir },
              { role: "Dirección Técnica Veterinaria", desc: "Médicos veterinarios dedicados al diagnóstico y seguimiento sanitario en finca.", img: nosTeamTech }
            ].map((team, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, scale: 0.95 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                viewport={{ once: true }} 
                className="bg-[var(--color-aovet-bg)] rounded-[2.5rem] overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="h-64 sm:h-72 w-full overflow-hidden relative">
                  <img src={team.img} alt={team.role} width="360" height="288" loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-aovet-dark)]/70 via-transparent to-transparent"></div>
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

      {/* SECCIÓN 5: SOSTENIBILIDAD Y COMPROMISO AMBIENTAL */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-12">
        <div className="bg-[var(--color-aovet-dark)] rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-10 md:p-16 text-white relative overflow-hidden shadow-2xl grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="relative z-10">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[var(--color-aovet-primary)] rounded-full flex items-center justify-center mb-6 shadow-md border border-white/10">
              <Leaf size={28} className="text-[var(--color-aovet-accent)]" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-serif mb-4 sm:mb-6 leading-tight">
              Compromiso con la Sostenibilidad y el Entorno
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed font-normal">
              Entendemos que el desarrollo pecuario depende directamente del equilibrio con la naturaleza. En AOVET promovemos el uso responsable de productos sanitarios, reciclaje de materiales de empaque y asesoría enfocada en buenas prácticas pecuarias sostenibles.
            </p>
          </div>

          <div className="h-64 sm:h-80 lg:h-full min-h-[260px] sm:min-h-[340px] rounded-2xl sm:rounded-3xl overflow-hidden relative shadow-xl border border-white/15 group">
            <img 
              src={catGanado} 
              alt="Ganadería sostenible AOVET" 
              width="600"
              height="400"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Nosotros;
