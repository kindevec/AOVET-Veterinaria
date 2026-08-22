import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';

// SVG del logo oficial de WhatsApp
const WhatsappIcon = ({ size = 28, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.0001 2.01666C6.4777 2.01666 1.99965 6.49501 1.99965 12.0175C1.99965 13.9113 2.53123 15.6888 3.44754 17.202L2.01074 21.9993L6.96349 20.6122C8.42398 21.464 10.1558 21.9566 12.0001 21.9566C17.5218 21.9566 22.0005 17.4782 22.0005 11.9559C22.0005 6.43343 17.5218 1.95511 12.0001 1.95511V2.01666ZM12.0001 20.2526C10.3701 20.2526 8.85244 19.7891 7.55184 18.9959L7.26127 18.8239L4.41727 19.6206L5.2323 16.8927L5.04273 16.5936C4.16109 15.2016 3.65582 13.6669 3.65582 12.0175C3.65582 7.41165 7.40455 3.6627 12.0105 3.6627C16.6163 3.6627 20.3653 7.41178 20.3653 12.0175C20.3653 16.6234 16.6165 20.3725 12.0105 20.3725L12.0001 20.2526ZM16.6346 13.882C16.3814 13.7554 15.1387 13.1432 14.9068 13.0588C14.6749 12.9744 14.506 12.9323 14.3371 13.1855C14.1683 13.4387 13.6833 14.0296 13.5358 14.2192C13.388 14.4091 13.2405 14.4302 12.9873 14.3038C12.7341 14.1772 11.919 13.9103 10.9575 13.056C10.1996 12.383 9.69176 11.5542 9.54415 11.3009C9.39655 11.0478 9.52843 10.9106 9.65507 10.7844C9.76906 10.6706 9.90422 10.4891 10.0308 10.3414C10.1575 10.1938 10.2001 10.0883 10.2842 9.91953C10.3688 9.7508 10.3263 9.60333 10.2632 9.47668C10.1998 9.35017 9.69342 8.1054 9.48247 7.59918C9.27648 7.10425 9.06649 7.17188 8.91054 7.16111C8.7628 7.15065 8.59407 7.15065 8.42533 7.15065C8.25647 7.15065 7.98233 7.21389 7.75031 7.46709C7.5183 7.72033 6.86438 8.33235 6.86438 9.57726C6.86438 10.822 7.77123 12.0247 7.89787 12.1935C8.02452 12.3622 9.67073 15.0116 12.2859 16.0378C14.4533 16.8887 14.9082 16.7176 15.3722 16.6756C15.8365 16.6334 16.8913 16.0637 17.1023 15.452C17.3134 14.8402 17.3134 14.3129 17.2501 14.2073C17.1868 14.1018 17.0179 14.0597 16.7648 13.9333L16.6346 13.882Z" />
  </svg>
);

const WhatsAppFloat = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const containerRef = useRef(null);
  const numeroWhatsApp = "593985401224";
  const whatsappUrl = `https://wa.me/${numeroWhatsApp}?text=Hola,%20deseo%20asesor%C3%ADa%20sobre%20los%20productos%20y%20servicios%20de%20AOVET`;

  // Auto-ocultar después de 4.5 segundos si se encuentra afuera
  useEffect(() => {
    if (!isRevealed) return;
    const timer = setTimeout(() => {
      setIsRevealed(false);
    }, 4500);
    return () => clearTimeout(timer);
  }, [isRevealed]);

  // Ocultar al hacer clic en cualquier parte fuera
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsRevealed(false);
      }
    };
    if (isRevealed) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isRevealed]);

  const handleInteraction = (e) => {
    if (!isRevealed) {
      // Primer toque: aparece el icono completo
      e.preventDefault();
      setIsRevealed(true);
    } else {
      // Segundo toque (ya visible): abre la conversación
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div 
      ref={containerRef}
      className="fixed bottom-20 right-0 sm:bottom-6 sm:right-0 z-50 select-none flex items-center"
      onMouseEnter={() => setIsRevealed(true)}
      onMouseLeave={() => setIsRevealed(false)}
    >
      <motion.div
        drag="x"
        dragConstraints={{ left: -100, right: 0 }}
        dragElastic={{ left: 0.15, right: 0 }}
        onDragEnd={(e, info) => {
          if (info.offset.x < -30 || info.velocity.x < -150) {
            setIsRevealed(true);
          } else if (info.offset.x > 20) {
            setIsRevealed(false);
          }
        }}
        animate={{
          x: isRevealed ? -16 : 30
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 24
        }}
        className="cursor-pointer touch-pan-y"
      >
        {/* Botón circular de WhatsApp que se oculta y aparece */}
        <div
          id="whatsapp-float"
          onClick={handleInteraction}
          className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-[0_8px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_10px_35px_rgba(37,211,102,0.6)] flex items-center justify-center cursor-pointer transition-colors border-2 border-white"
          title={isRevealed ? "Toca para abrir WhatsApp" : "Toca o hala para mostrar WhatsApp"}
          aria-label="Contactar por WhatsApp"
        >
          {/* Anillo de pulso sutil cuando está oculto */}
          {!isRevealed && (
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 pointer-events-none"></span>
          )}

          {/* Icono de WhatsApp */}
          <WhatsappIcon size={28} className="relative z-10 sm:w-7 sm:h-7" />
        </div>
      </motion.div>
    </div>
  );
};

export default WhatsAppFloat;
