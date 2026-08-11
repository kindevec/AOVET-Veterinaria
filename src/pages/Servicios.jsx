import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Stethoscope, Truck, ShieldCheck, Headset, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import SeparadorGrieta from '../components/ui/SeparadorGrieta';
import BotonCTA from '../components/ui/BotonCTA';

const servicios = [
  {
    icon: Stethoscope,
    title: "Asesoría técnica veterinaria",
    desc: "Profesionales expertos listos para guiar tu plan sanitario y productivo."
  },
  {
    icon: ShieldCheck,
    title: "Importación certificada",
    desc: "Traemos marcas internacionales de primera línea cumpliendo toda normativa."
  },
  {
    icon: Truck,
    title: "Distribución nacional",
    desc: "Entregas seguras y rápidas a cualquier rincón del país, cuidando la cadena de frío."
  },
  {
    icon: Headset,
    title: "Soporte post-venta",
    desc: "Acompañamiento continuo para asegurar la eficacia de nuestros productos en tu granja."
  }
];

const Servicios = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-24 min-h-screen bg-[var(--color-aovet-bg)]">
      
      {/* 1. Header Introductorio */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-aovet-dark)] mb-4">Nuestros Servicios</h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Más que proveedores, somos aliados estratégicos en la productividad y salud de tus animales.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Grilla de 4 Servicios Principales */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>
            {servicios.map((s, idx) => {
              const Icon = s.icon;
              return (
                <motion.div key={idx} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} whileHover={{ scale: 1.03, y: -5 }} className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 flex flex-col items-center text-center transition-shadow hover:shadow-xl">
                  <div className="w-16 h-16 bg-[var(--color-aovet-bg)] text-[var(--color-aovet-primary)] rounded-full flex items-center justify-center mb-6">
                    <Icon size={32} strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-aovet-dark)] mb-3">{s.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{s.desc}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* 3. Nuestro Proceso de Trabajo */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[var(--color-aovet-dark)] mb-4">¿Cómo trabajamos contigo?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Un proceso simple, ágil y centrado en solucionar tus necesidades al instante.</p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 relative justify-between">
            <div className="hidden md:block absolute top-1/2 left-10 right-10 h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>
            {[
              { num: "01", title: "Contacto Inicial", desc: "Nos cuentas tu requerimiento por WhatsApp o formulario." },
              { num: "02", title: "Asesoría y Cotización", desc: "Un veterinario analiza tu caso y te envía la proforma." },
              { num: "03", title: "Despacho Rápido", desc: "Preparamos el pedido con cadena de frío si se requiere." },
              { num: "04", title: "Seguimiento", desc: "Confirmamos la llegada y evaluamos los resultados." }
            ].map((paso, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.15 }} className="flex-1 bg-[var(--color-aovet-bg)] md:bg-white rounded-3xl p-6 relative z-10 text-center border md:border-none border-gray-100 shadow-sm md:shadow-none">
                <div className="w-14 h-14 mx-auto bg-white md:bg-[var(--color-aovet-bg)] border-2 border-[var(--color-aovet-primary)] rounded-full flex items-center justify-center font-black text-[var(--color-aovet-primary)] text-xl mb-6 shadow-sm">
                  {paso.num}
                </div>
                <h3 className="font-bold text-[var(--color-aovet-dark)] text-lg mb-2">{paso.title}</h3>
                <p className="text-gray-600 text-sm">{paso.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Cobertura Nacional */}
      <section className="py-20 bg-[var(--color-aovet-bg)] border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 text-[var(--color-aovet-primary)] mb-4">
                <MapPin size={32} />
                <h3 className="text-xl font-bold uppercase tracking-wider">Logística Integrada</h3>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-aovet-dark)] mb-6">Llegamos a todas las provincias del Ecuador</h2>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Nuestra red de distribución está diseñada para llegar a tiempo, ya sea a una tienda veterinaria en el centro de la ciudad o a una hacienda en el sector rural más alejado.
              </p>
              <ul className="grid grid-cols-2 gap-4">
                {[
                  "Envíos 24h a capitales",
                  "Entregas en finca",
                  "Rastreo de envíos",
                  "Manejo de frío"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 font-medium text-[var(--color-aovet-dark)]">
                    <CheckCircle2 className="text-[var(--color-aovet-accent)]" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-[var(--color-aovet-dark)] text-white rounded-3xl p-10 shadow-xl flex flex-col justify-center min-h-[300px] relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-5 text-[var(--color-aovet-accent)]">
                 <MapPin size={150} />
               </div>
               <h3 className="text-2xl font-bold text-[var(--color-aovet-accent)] mb-2 relative z-10">+24</h3>
               <p className="text-xl font-medium mb-6 relative z-10">Provincias cubiertas</p>
               <h3 className="text-2xl font-bold text-[var(--color-aovet-accent)] mb-2 relative z-10">100%</h3>
               <p className="text-xl font-medium relative z-10">Compromiso de entrega</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. CTA de Asesoría / Visita Técnica */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[var(--color-aovet-primary)] rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
            {/* Círculos decorativos */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[var(--color-aovet-accent)] opacity-10 rounded-full blur-3xl"></div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">¿Problemas sanitarios en tu producción?</h2>
            <p className="text-lg md:text-xl text-gray-100 mb-10 max-w-3xl mx-auto relative z-10">
              No dejes la salud de tus animales al azar. Nuestro equipo de médicos veterinarios está listo para visitarte, evaluar tu situación y diseñar un protocolo sanitario a medida.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 relative z-10">
              <button 
                onClick={() => window.open('https://wa.me/593999999999', '_blank')}
                className="inline-flex items-center gap-2 bg-[var(--color-aovet-accent)] text-[var(--color-aovet-dark)] font-bold px-8 py-4 rounded-full text-lg hover:bg-white transition-all transform hover:scale-105 active:scale-95 shadow-lg"
              >
                Agenda una visita técnica <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => navigate('/contacto')}
                className="font-bold text-white hover:text-[var(--color-aovet-accent)] underline underline-offset-4 transition-colors"
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
