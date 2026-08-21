import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight, MessageCircle, Sparkles, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { productos } from '../../data/productos';

const CarruselRecomendados = () => {
  const navigate = useNavigate();
  const productosRecomendados = productos.filter(p => 
    ['act-antiflam', 'act-proboost-bolus', 'inusap-liquid', 'milkmore-gold'].includes(p.slug)
  );

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const minSwipeDistance = 40;

  const len = productosRecomendados.length;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 640;
  const isTablet = windowWidth >= 640 && windowWidth < 1024;

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % len);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + len) % len);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Autoplay con pausa al pasar el cursor
  useEffect(() => {
    if (isHovered || len <= 1) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered, len, currentSlide]);

  // Soporte para gestos táctiles (Swipe)
  const onTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = null;
  };

  const onTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }
  };

  return (
    <div 
      className="relative w-full max-w-[1600px] mx-auto py-6 sm:py-10 select-none overflow-visible flex flex-col items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Contenedor del Carrusel 3D Cards */}
      <div 
        className="relative w-full h-[530px] sm:h-[610px] md:h-[660px] lg:h-[700px] flex items-center justify-center touch-pan-y overflow-visible"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Flecha Izquierda al lado del contenedor, aparece solo cuando se pasa el mouse sobre ella */}
        {len > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
            aria-label="Producto anterior"
            className="absolute -left-5 sm:-left-10 md:-left-16 lg:-left-22 xl:-left-28 top-1/2 -translate-y-1/2 z-40 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/95 hover:bg-[var(--color-aovet-primary)] text-[var(--color-aovet-dark)] hover:text-white backdrop-blur-md border border-gray-200 flex items-center justify-center cursor-pointer opacity-0 hover:opacity-100 transition-all duration-300 shadow-2xl hover:scale-115 active:scale-95 group/btn focus:opacity-100"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 group-hover/btn:-translate-x-0.5 transition-transform" />
          </button>
        )}

        {/* Tarjetas del Carrusel 3D */}
        {productosRecomendados.map((prod, idx) => {
          let position = 'hidden';
          let transform = 'translateX(0) scale(0.4)';
          let zIndex = 0;
          let opacity = 0;

          if (idx === currentSlide) {
            position = 'center';
            transform = 'translateX(0) scale(1)';
            zIndex = 20;
            opacity = 1;
          } else if (idx === (currentSlide - 1 + len) % len) {
            position = 'left';
            transform = isMobile 
              ? 'translateX(-45%) scale(0.76)' 
              : isTablet 
                ? 'translateX(-56%) scale(0.82)' 
                : 'translateX(-62%) scale(0.85)';
            zIndex = 10;
            opacity = 0.88;
          } else if (idx === (currentSlide + 1) % len) {
            position = 'right';
            transform = isMobile 
              ? 'translateX(45%) scale(0.76)' 
              : isTablet 
                ? 'translateX(56%) scale(0.82)' 
                : 'translateX(62%) scale(0.85)';
            zIndex = 10;
            opacity = 0.88;
          } else {
            transform = 'translateX(0) scale(0.4)';
            opacity = 0;
          }

          const isCenter = position === 'center';

          return (
            <div
              key={prod.slug || idx}
              className="absolute w-[72vw] max-w-[270px] sm:w-[80vw] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[460px] h-[94%] sm:h-[92%] transition-all duration-700 ease-out cursor-pointer group"
              style={{ transform, zIndex, opacity }}
              onClick={() => {
                if (position === 'left') prevSlide();
                else if (position === 'right') nextSlide();
                else if (isCenter) navigate(`/producto/${prod.slug}`);
              }}
            >
              {/* Tarjeta del Producto Estilo Tuntun & AOVET */}
              <div 
                className={`relative w-full h-full rounded-2xl sm:rounded-[2.5rem] bg-white p-4 sm:p-8 md:p-9 flex flex-col justify-between transition-all duration-700 overflow-hidden border ${
                  isCenter 
                    ? 'border-[var(--color-aovet-primary)] shadow-[0_20px_50px_rgba(13,61,32,0.18)] ring-2 ring-[var(--color-aovet-accent)]/50' 
                    : 'border-gray-200 shadow-xl hover:border-[var(--color-aovet-primary)]/40 hover:shadow-2xl'
                }`}
              >
                {/* Elementos de Fondo Suave */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[var(--color-aovet-bg)] to-transparent rounded-bl-full pointer-events-none opacity-60"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[var(--color-aovet-accent)]/5 rounded-full pointer-events-none"></div>

                {/* Cabecera de la Tarjeta */}
                <div className="relative z-10 flex items-center justify-between gap-1.5 sm:gap-2">
                  <span className="bg-[var(--color-aovet-bg)] text-[var(--color-aovet-primary)] text-[10px] sm:text-xs font-black uppercase tracking-wider px-3 py-1 sm:px-4 sm:py-1.5 rounded-full border border-[var(--color-aovet-primary)]/20 shadow-sm flex items-center gap-1.5">
                    <ShieldCheck size={14} className="text-[var(--color-aovet-accent)] sm:w-4 sm:h-4" />
                    <span className="truncate max-w-[100px] sm:max-w-none">{prod.categoria}</span>
                  </span>
                  <span className="bg-amber-100/80 text-amber-900 text-[10px] sm:text-xs font-bold px-3 py-1 sm:px-3.5 sm:py-1 rounded-full flex items-center gap-1 border border-amber-200">
                    <Sparkles size={13} className="text-amber-500 sm:w-3.5 sm:h-3.5" />
                    <span className="hidden xs:inline sm:inline">Recomendado</span>
                  </span>
                </div>

                {/* Imagen Central del Producto Directa y Limpia */}
                <div className="relative z-10 flex-grow flex items-center justify-center my-2 sm:my-4 py-1">
                  <picture className="flex items-center justify-center">
                    <source srcSet={prod.imagen.replace('.webp', '.avif')} type="image/avif" />
                    <source srcSet={prod.imagen} type="image/webp" />
                    <img 
                      src={prod.imagen.replace('.webp', '.png')} 
                      alt={prod.nombre} 
                      width="260"
                      height="260"
                      loading="lazy"
                      decoding="async"
                      className="h-40 sm:h-56 md:h-64 lg:h-72 w-auto max-w-full object-contain mix-blend-multiply drop-shadow-xl group-hover:scale-105 transition-transform duration-500"
                    />
                  </picture>
                </div>

                {/* Información y Títulos */}
                <div className="relative z-10 space-y-1.5 sm:space-y-2.5 text-center sm:text-left">
                  <h3 className="text-base sm:text-2xl md:text-3xl font-black text-[var(--color-aovet-dark)] font-serif leading-tight group-hover:text-[var(--color-aovet-primary)] transition-colors line-clamp-1">
                    {prod.nombre}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 leading-tight sm:leading-relaxed font-normal text-justify">
                    {prod.descripcionBreve || prod.descripcion}
                  </p>
                </div>

                {/* Botones de Acción */}
                <div className="relative z-10 pt-2 sm:pt-4 flex items-center gap-2 sm:gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/producto/${prod.slug}`);
                    }}
                    className="flex-1 bg-[var(--color-aovet-primary)] hover:bg-[var(--color-aovet-dark)] text-white font-bold py-2.5 sm:py-3.5 px-3 sm:px-4 rounded-full text-xs sm:text-sm flex items-center justify-center gap-1.5 sm:gap-2 transition-all shadow-md active:scale-95 cursor-pointer"
                  >
                    <span>Ver Detalles</span>
                    <ArrowRight size={14} />
                  </button>

                  <a
                    href={`https://wa.me/593985401224?text=Hola,%20deseo%20cotizar%20el%20producto%20${encodeURIComponent(prod.nombre)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-emerald-50 hover:bg-[#25D366] text-[#25D366] hover:text-white border border-emerald-200 flex items-center justify-center transition-all shadow-sm active:scale-95 flex-shrink-0 cursor-pointer"
                    title="Cotizar por WhatsApp"
                    aria-label="Cotizar por WhatsApp"
                  >
                    <MessageCircle size={17} />
                  </a>
                </div>

                {/* Capa de oscurecimiento muy suave para tarjetas laterales */}
                <div 
                  className={`absolute inset-0 pointer-events-none transition-opacity duration-700 z-20 rounded-2xl sm:rounded-[2.5rem] ${
                    isCenter ? 'opacity-0' : 'opacity-20 bg-black/10'
                  }`}
                ></div>
              </div>
            </div>
          );
        })}

        {/* Flecha Derecha al lado del contenedor, aparece solo cuando se pasa el mouse sobre ella */}
        {len > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
            aria-label="Producto siguiente"
            className="absolute -right-5 sm:-right-10 md:-right-16 lg:-right-22 xl:-right-28 top-1/2 -translate-y-1/2 z-40 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/95 hover:bg-[var(--color-aovet-primary)] text-[var(--color-aovet-dark)] hover:text-white backdrop-blur-md border border-gray-200 flex items-center justify-center cursor-pointer opacity-0 hover:opacity-100 transition-all duration-300 shadow-2xl hover:scale-115 active:scale-95 group/btn focus:opacity-100"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 group-hover/btn:translate-x-0.5 transition-transform" />
          </button>
        )}
      </div>

      {/* Indicadores de Puntos Inferiores Estilo Tuntun */}
      {len > 1 && (
        <div className="flex items-center justify-center mt-3 sm:mt-6">
          <div className="flex items-center gap-2.5 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-gray-200 shadow-md">
            {productosRecomendados.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                aria-label={`Ir al producto ${index + 1}`}
                className={`transition-all duration-300 cursor-pointer ${
                  index === currentSlide 
                    ? 'w-7 h-2.5 bg-[var(--color-aovet-primary)] rounded-full shadow-[0_0_8px_rgba(13,61,32,0.4)]' 
                    : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400 rounded-full'
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CarruselRecomendados;
