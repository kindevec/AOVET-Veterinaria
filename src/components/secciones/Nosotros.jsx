import { motion } from 'motion/react';
import SeparadorGrieta from '../ui/SeparadorGrieta';

const valores = [
  "Calidad certificada",
  "Asesoría técnica",
  "Cobertura nacional",
  "Marcas internacionales"
];

const Nosotros = () => {
  return (
    <section id="nosotros" className="py-24 bg-[var(--color-aovet-bg)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-aovet-dark)] mb-6">
              Comprometidos con el campo ecuatoriano
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              En <strong className="text-[var(--color-aovet-primary)]">AOVET</strong> nos especializamos en la importación y distribución de productos veterinarios, seleccionando cuidadosamente productos de fabricantes confiables que cumplan con altos estándares de calidad y seguridad.
            </p>
            
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.12
                  }
                }
              }}
            >
              {valores.map((valor, idx) => (
                <motion.div 
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                  }}
                  className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100"
                >
                  <div className="w-2 h-2 rounded-full bg-[var(--color-aovet-accent)]"></div>
                  <span className="font-bold text-[var(--color-aovet-text)]">{valor}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Reveal */}
          <motion.div
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1586528116311-ad8ed7c80a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Bodega logística y distribución AOVET" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-aovet-dark)]/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl">
                <p className="font-bold text-[var(--color-aovet-dark)] text-lg">Distribución eficiente</p>
                <p className="text-gray-600 text-sm mt-1">Llegamos a donde tu producción nos necesita.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
      
      <SeparadorGrieta />
    </section>
  );
};

export default Nosotros;
