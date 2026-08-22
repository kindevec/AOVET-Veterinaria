import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export const Timeline3D = ({
  events = [],
  className = '',
  title = "Nuestra Historia",
  subtitle = "Un crecimiento sostenido enfocado en la innovación y respaldo al productor.",
  badge = "Trayectoria"
}) => {
  const [activeEvent, setActiveEvent] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      if (rect.top > window.innerHeight || rect.bottom < 0) return;
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
        y: ((e.clientY - rect.top) / rect.height) * 2 - 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden relative ${className}`}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Cabecera de la Sección */}
        <div className="text-center mb-16 sm:mb-20">
          {badge && (
            <motion.span 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[var(--color-aovet-primary)]/10 text-[var(--color-aovet-primary)] border border-[var(--color-aovet-primary)]/20 font-bold text-xs uppercase tracking-widest mb-3"
            >
              <Sparkles size={13} className="text-[var(--color-aovet-accent)]" />
              {badge}
            </motion.span>
          )}
          {title && (
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-aovet-dark)] font-serif leading-tight mb-4"
            >
              {title}
            </motion.h2>
          )}
          {subtitle && (
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed"
            >
              {subtitle}
            </motion.p>
          )}
        </div>

        {/* Línea Central de la Línea de Tiempo */}
        <div className="relative">
          {/* Línea vertical (a la izquierda en móviles, centrada en desktop) */}
          <div 
            className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 top-4 bottom-8 w-1 rounded-full bg-gradient-to-b from-[var(--color-aovet-primary)] via-[var(--color-aovet-accent)] to-[var(--color-aovet-primary)] opacity-40 md:opacity-50"
            style={{
              boxShadow: '0 0 12px rgba(26, 107, 56, 0.35)'
            }}
          />

          {/* Eventos del Timeline */}
          <div className="space-y-16 sm:space-y-24">
            {events.map((event, index) => {
              const isEven = index % 2 === 0;
              const isHighlighted = activeEvent === event.id;

              // Componente Tarjeta de Imagen (limpia, sin etiquetas)
              const imageCard = (
                <motion.div
                  className={`relative rounded-3xl overflow-hidden border transition-all duration-500 shadow-lg h-56 sm:h-64 md:h-72 lg:h-80 w-full bg-gray-900 group ${
                    isHighlighted
                      ? 'border-[var(--color-aovet-primary)] shadow-[0_20px_45px_rgba(13,61,32,0.18)] ring-2 ring-[var(--color-aovet-accent)]/50'
                      : 'border-gray-100 hover:border-gray-200 hover:shadow-xl'
                  }`}
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: `perspective(1000px) rotateY(${
                      mousePosition.x * (isEven ? 2.5 : -2.5)
                    }deg) rotateX(${mousePosition.y * -2.5}deg)`,
                  }}
                >
                  <motion.img
                    src={event.image}
                    alt={event.title}
                    className={`w-full h-full object-cover ${event.imagePosition || 'object-center'} group-hover:scale-105 transition-transform duration-700`}
                    animate={{
                      scale: isHighlighted ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
                </motion.div>
              );

              // Componente Tarjeta de Texto: Solo Título (centrado) y Descripción
              const textCard = (
                <motion.div
                  className={`relative bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 md:p-9 border transition-all duration-500 shadow-lg flex flex-col justify-center h-full min-h-[200px] md:min-h-[260px] ${
                    isHighlighted
                      ? 'border-[var(--color-aovet-primary)] shadow-[0_20px_45px_rgba(13,61,32,0.15)] ring-1 ring-[var(--color-aovet-accent)]/40 bg-emerald-50/30'
                      : 'border-gray-100 hover:border-gray-200 hover:shadow-xl'
                  }`}
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: `perspective(1000px) rotateY(${
                      mousePosition.x * (isEven ? -2.5 : 2.5)
                    }deg) rotateX(${mousePosition.y * -2.5}deg)`,
                  }}
                >
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[var(--color-aovet-dark)] font-serif leading-tight mb-3 text-center">
                    {event.title}
                  </h3>

                  <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed text-justify font-normal">
                    {event.text || event.description}
                  </p>

                  {/* Barra de Progreso Inferior Animada */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[var(--color-aovet-primary)] via-[var(--color-aovet-accent)] to-[var(--color-aovet-primary)]"
                    initial={{ width: "0%" }}
                    animate={{ width: isHighlighted ? "100%" : "0%" }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.div>
              );

              return (
                <motion.div
                  key={event.id || index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className="relative flex flex-col md:flex-row items-center"
                  onMouseEnter={() => setActiveEvent(event.id)}
                  onMouseLeave={() => setActiveEvent(null)}
                >
                  {/* Nodo central / Hito del año */}
                  <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 z-30 flex items-center justify-center top-4 md:top-1/2 md:-translate-y-1/2">
                    <motion.div
                      whileHover={{ scale: 1.12 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setActiveEvent(isHighlighted ? null : event.id)}
                      className={`min-w-[3.5rem] sm:min-w-[4.25rem] px-3.5 sm:px-4 h-12 sm:h-14 rounded-2xl flex items-center justify-center border-2 transition-all duration-500 cursor-pointer shadow-lg whitespace-nowrap ${
                        isHighlighted
                          ? 'bg-[var(--color-aovet-accent)] text-[var(--color-aovet-dark)] border-white ring-4 ring-[var(--color-aovet-accent)]/40 scale-110 shadow-[0_0_25px_rgba(244,185,66,0.6)]'
                          : 'bg-[var(--color-aovet-primary)] text-white border-white/80 hover:bg-[var(--color-aovet-dark)] shadow-[0_4px_15px_rgba(13,61,32,0.3)]'
                      }`}
                    >
                      <span className="font-mono font-black text-xs sm:text-sm md:text-base tracking-wide text-center">
                        {event.year}
                      </span>
                    </motion.div>
                  </div>

                  {/* Desktop Layout: Dos columnas simétricas separadas por el nodo central */}
                  {/* LADO IZQUIERDO */}
                  <div className="hidden md:block md:w-1/2 md:pr-14 lg:md:pr-18">
                    {isEven ? imageCard : textCard}
                  </div>

                  {/* LADO DERECHO */}
                  <div className="hidden md:block md:w-1/2 md:pl-14 lg:md:pl-18">
                    {isEven ? textCard : imageCard}
                  </div>

                  {/* Mobile Layout (< md): En columna con nodo a la izquierda */}
                  <div className="w-full md:hidden pl-16 space-y-4">
                    {imageCard}
                    {textCard}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline3D;
