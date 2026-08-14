import { motion } from 'motion/react';
import ContadorAnimado from '../ui/ContadorAnimado';
import BotonCTA from '../ui/BotonCTA';
import SeparadorGrieta from '../ui/SeparadorGrieta';

const contadores = [
  { id: 1, value: 15, label: "Años de experiencia", suffix: "+" },
  { id: 2, value: 20, label: "Marcas representadas", suffix: "+" },
  { id: 3, value: 500, label: "Clientes satisfechos", suffix: "+" },
  { id: 4, value: 100, label: "Cobertura nacional", suffix: "%" },
];

const Hero = () => {
  const scrollAProductos = () => {
    document.querySelector('#productos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex flex-col justify-center bg-gray-900 pt-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D3D20]/85 to-[#0D3D20]/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex flex-col justify-center pb-20">
        
        {/* Animated Egg Crack */}
        <div className="mb-8 flex justify-center lg:justify-start">
          <motion.svg 
            width="80" 
            height="100" 
            viewBox="0 0 80 100" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            initial="hidden"
            animate="visible"
          >
            <motion.path
              d="M40 90 C 15 90 5 65 5 50 C 5 20 20 5 40 5 C 60 5 75 20 75 50 C 75 65 65 90 40 90 Z"
              stroke="var(--color-aovet-accent)"
              strokeWidth="3"
              variants={{
                hidden: { pathLength: 0, opacity: 0 },
                visible: { pathLength: 1, opacity: 1, transition: { duration: 1.5, ease: "easeInOut" } }
              }}
            />
            <motion.path
              d="M20 40 L 40 50 L 30 65 L 50 75 L 45 90"
              stroke="var(--color-aovet-accent)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={{
                hidden: { pathLength: 0, opacity: 0 },
                visible: { pathLength: 1, opacity: 1, transition: { duration: 1, delay: 1.2, ease: "easeOut" } }
              }}
            />
          </motion.svg>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
                delayChildren: 1.5
              }
            }
          }}
          className="max-w-3xl text-center lg:text-left"
        >
          <motion.h1 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
            }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6"
          >
            Importamos confianza. <br/>
            <span className="text-[var(--color-aovet-accent)]">Distribuimos salud animal.</span>
          </motion.h1>
          
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
            }}
            className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto lg:mx-0"
          >
            Productos veterinarios de calidad para aves, bovinos, porcinos y mascotas, con el respaldo técnico que tu producción necesita.
          </motion.p>
          
          <motion.div 
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1, transition: { type: "spring", damping: 12, stiffness: 100 } }
            }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <BotonCTA 
              text="Ver catálogo" 
              onClick={scrollAProductos} 
              variant="primary"
            />
            <BotonCTA 
              text="Cotizar por WhatsApp" 
              href="https://wa.me/593985401224"
              variant="secondary"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Trust Counters */}
      <div className="relative z-10 bg-white shadow-xl py-12 -mb-16 rounded-t-3xl sm:rounded-t-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {contadores.map((contador) => (
              <ContadorAnimado 
                key={contador.id}
                value={contador.value} 
                label={contador.label} 
                suffix={contador.suffix} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
