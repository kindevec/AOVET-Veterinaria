import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import WhatsappIcon from '../icons/WhatsappIcon';

const ProductoCard = ({ producto, isDestacado = false }) => {
  const numeroWhatsApp = "593985401224";
  const mensaje = encodeURIComponent(`Hola, quiero cotizar ${producto.nombre}`);
  const whatsappUrl = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;

  const esMasVendido = isDestacado || producto.masVendido;

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full relative group"
    >
      {/* 1. Etiqueta de MÁS VENDIDO en la Esquina Superior */}
      {esMasVendido && (
        <div className="absolute top-3 right-3 z-10 bg-gradient-to-r from-[var(--color-aovet-accent)] to-amber-400 text-[var(--color-aovet-dark)] text-[11px] font-extrabold px-3 py-1 rounded-full shadow-md uppercase tracking-wider flex items-center gap-1">
          <span>🔥</span> Más Vendido
        </div>
      )}

      {/* Imagen del Producto */}
      <div className="relative h-48 overflow-hidden bg-white p-4 flex items-center justify-center border-b border-gray-50/80">
        <picture className="w-full h-full flex items-center justify-center">
          <source srcSet={producto.imagen.replace('.webp', '.avif')} type="image/avif" />
          <source srcSet={producto.imagen} type="image/webp" />
          <img 
            src={producto.imagen.replace('.webp', '.png')} 
            alt={producto.nombre} 
            width="250"
            height="180"
            loading="lazy"
            decoding="async"
            className="max-w-full max-h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
          />
        </picture>
      </div>
      
      <div className="p-6 flex flex-col flex-grow text-center">
        {/* 2. Etiqueta para clasificar por TIPO: Abajo de la imagen, encima del nombre en el lado izquierdo */}
        <div className="mb-2.5 flex items-center justify-start">
          <span className="inline-flex items-center text-[11px] font-bold text-[var(--color-aovet-primary)] bg-[var(--color-aovet-primary)]/10 border border-[var(--color-aovet-primary)]/20 px-2.5 py-0.5 rounded-md uppercase tracking-wider">
            {producto.categoria}
          </span>
        </div>

        <h3 className="text-xl font-bold mb-2 text-[var(--color-aovet-dark)] text-left">{producto.nombre}</h3>
        <p className="text-gray-600 mb-6 flex-grow text-left text-sm leading-relaxed">{producto.descripcion}</p>
        
        <div className="mt-auto flex flex-col gap-2 w-full">
          {producto.slug && (
            <Link
              to={`/producto/${producto.slug}`}
              className="w-full inline-flex items-center justify-center px-4 py-2 bg-white text-[var(--color-aovet-dark)] font-bold rounded-lg border-2 border-[var(--color-aovet-primary)] hover:bg-gray-50 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-aovet-primary)] text-sm"
            >
              Ver Detalles
            </Link>
          )}
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-[var(--color-aovet-primary)] text-white font-bold rounded-lg hover:bg-[var(--color-aovet-dark)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-aovet-primary)] text-sm shadow-sm cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <WhatsappIcon size={18} className="flex-shrink-0" />
            <span>Solicitar cotización</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductoCard;
