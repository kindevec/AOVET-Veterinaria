import { motion } from 'motion/react';
import { Stethoscope, Truck, ShieldCheck, Headset } from 'lucide-react';
import SeparadorGrieta from '../ui/SeparadorGrieta';

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
  return (
    <section id="servicios" className="py-20 bg-[var(--color-aovet-bg)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-aovet-dark)] mb-4">Nuestros Servicios</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Más que proveedores, somos aliados en la productividad y salud de tus animales.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            visible: { transition: { staggerChildren: 0.12 } }
          }}
        >
          {servicios.map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 flex flex-col items-center text-center transition-shadow hover:shadow-xl"
              >
                <div className="w-16 h-16 bg-[var(--color-aovet-bg)] text-[var(--color-aovet-primary)] rounded-full flex items-center justify-center mb-6">
                  <Icon size={32} strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-[var(--color-aovet-dark)] mb-3">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed">{s.desc}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Botón de WhatsApp debajo de la grilla */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex justify-center text-center"
        >
          <a
            href="https://wa.me/593985401224"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3.5 px-8 rounded-full transition-all shadow-md active:scale-95 text-base cursor-pointer border border-[#1fbd58]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-message-circle"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
            <span>Contactar un Asesor por WhatsApp</span>
          </a>
        </motion.div>
      </div>
      
      <div className="mt-20">
        <SeparadorGrieta />
      </div>
    </section>
  );
};

export default Servicios;
