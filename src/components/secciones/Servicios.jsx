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
      </div>
      
      <div className="mt-20">
        <SeparadorGrieta />
      </div>
    </section>
  );
};

export default Servicios;
