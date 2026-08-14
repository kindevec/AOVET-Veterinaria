import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const ProductoCard = ({ producto }) => {
  const numeroWhatsApp = "593985401224";
  const mensaje = encodeURIComponent(`Hola, quiero cotizar ${producto.nombre}`);
  const whatsappUrl = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100 flex flex-col h-full"
    >
      <div className="relative h-48 overflow-hidden bg-white p-4">
        <img 
          src={producto.imagen} 
          alt={producto.nombre} 
          className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 hover:scale-110"
          loading="lazy"
        />
        <div className="absolute top-3 right-3 bg-[var(--color-aovet-accent)] text-[var(--color-aovet-text)] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          {producto.categoria}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-[var(--color-aovet-dark)]">{producto.nombre}</h3>
        <p className="text-gray-600 mb-6 flex-grow">{producto.descripcion}</p>
        
        <div className="mt-auto flex flex-col gap-2 w-full">
          {producto.slug && (
            <Link
              to={`/producto/${producto.slug}`}
              className="w-full inline-flex items-center justify-center px-4 py-2 bg-white text-[var(--color-aovet-dark)] font-bold rounded-lg border-2 border-[var(--color-aovet-primary)] hover:bg-gray-50 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-aovet-primary)]"
            >
              Ver Detalles
            </Link>
          )}
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center px-4 py-2 bg-[var(--color-aovet-primary)] text-white font-bold rounded-lg hover:bg-[var(--color-aovet-dark)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-aovet-primary)]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Solicitar cotización
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductoCard;
