import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';

export interface TimelineEvent {
  id: string;
  year: string;
  date?: string;
  title: string;
  description?: string;
  text?: string;
  icon?: React.ReactNode;
  image?: string;
  category?: string;
  highlight?: string;
  color?: string;
  link?: {
    url: string;
    text: string;
  };
}

interface Timeline3DProps {
  events: TimelineEvent[];
  backgroundColor?: string;
  primaryColor?: string;
  secondaryColor?: string;
  textColor?: string;
  accentColor?: string;
  showImages?: boolean;
  className?: string;
  title?: string;
  subtitle?: string;
  badge?: string;
}

export const Timeline3D: React.FC<Timeline3DProps> = ({
  events,
  className = '',
  title = "Nuestra Historia",
  subtitle = "Un crecimiento sostenido enfocado en la innovación y respaldo al productor.",
  badge = "Trayectoria",
}) => {
  const [activeEvent, setActiveEvent] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
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
      className={`w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden relative ${className}`}
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          {badge && (
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[var(--color-aovet-primary)]/10 text-[var(--color-aovet-primary)] border border-[var(--color-aovet-primary)]/20 font-bold text-xs uppercase tracking-widest mb-3">
              {badge}
            </span>
          )}
          {title && (
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-aovet-dark)] font-serif leading-tight mb-4">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* Central line */}
        <div className="relative">
          <div
            className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 top-4 bottom-8 w-1 rounded-full bg-gradient-to-b from-[var(--color-aovet-primary)] via-[var(--color-aovet-accent)] to-[var(--color-aovet-primary)] opacity-40 md:opacity-50"
            style={{
              boxShadow: '0 0 12px rgba(26, 107, 56, 0.35)',
            }}
          ></div>

          {/* Timeline events */}
          <div className="space-y-12 sm:space-y-20">
            {events.map((event, index) => {
              const isEven = index % 2 === 0;
              const isHighlighted = activeEvent === event.id;

              return (
                <motion.div
                  key={event.id}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  onMouseEnter={() => setActiveEvent(event.id)}
                  onMouseLeave={() => setActiveEvent(null)}
                >
                  <div className="hidden md:block md:w-1/2" />

                  {/* Timeline node */}
                  <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 z-30 flex items-center justify-center">
                    <motion.div
                      className={`min-w-[3.5rem] sm:min-w-[4.25rem] px-3.5 sm:px-4 h-12 sm:h-14 rounded-2xl flex items-center justify-center border-2 transition-all duration-500 cursor-pointer shadow-lg whitespace-nowrap ${
                        isHighlighted
                          ? 'bg-[var(--color-aovet-accent)] text-[var(--color-aovet-dark)] border-white ring-4 ring-[var(--color-aovet-accent)]/40 scale-110 shadow-[0_0_25px_rgba(244,185,66,0.6)]'
                          : 'bg-[var(--color-aovet-primary)] text-white border-white/80 hover:bg-[var(--color-aovet-dark)] shadow-[0_4px_15px_rgba(13,61,32,0.3)]'
                      }`}
                      whileHover={{ scale: 1.12 }}
                      onClick={() => setActiveEvent(isHighlighted ? null : event.id)}
                    >
                      <span className="font-mono font-black text-xs sm:text-sm md:text-base tracking-wide text-center">
                        {event.year}
                      </span>
                    </motion.div>
                  </div>

                  {/* Content card */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${
                    isEven ? 'md:pr-12 lg:pr-16' : 'md:pl-12 lg:pl-16'
                  }`}>
                    <motion.div
                      className={`relative bg-white/95 backdrop-blur-md rounded-3xl overflow-hidden border transition-all duration-500 shadow-lg ${
                        isHighlighted
                          ? 'border-[var(--color-aovet-primary)] shadow-[0_20px_45px_rgba(13,61,32,0.15)] ring-1 ring-[var(--color-aovet-accent)]/40'
                          : 'border-gray-100 hover:border-gray-200 hover:shadow-xl'
                      }`}
                      style={{
                        transformStyle: 'preserve-3d',
                        transform: `perspective(1000px) rotateY(${
                          mousePosition.x * (isEven ? 2.5 : -2.5)
                        }deg) rotateX(${mousePosition.y * -2.5}deg)`,
                      }}
                    >
                      {event.image && (
                        <div className="relative h-44 sm:h-52 overflow-hidden group">
                          <motion.img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            animate={{
                              scale: isHighlighted ? 1.05 : 1,
                            }}
                            transition={{ duration: 0.6 }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
                        </div>
                      )}

                      <div className="p-6 sm:p-7">
                        <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--color-aovet-dark)] font-serif leading-tight mb-2">
                          {event.title}
                        </h3>

                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed text-justify">
                          {event.text || event.description}
                        </p>
                      </div>

                      <motion.div
                        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[var(--color-aovet-primary)] via-[var(--color-aovet-accent)] to-[var(--color-aovet-primary)]"
                        initial={{ width: "0%" }}
                        animate={{ width: isHighlighted ? "100%" : "0%" }}
                        transition={{ duration: 0.4 }}
                      />
                    </motion.div>
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
