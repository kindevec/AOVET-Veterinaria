import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Download, Info, ShieldAlert, Droplets, CheckCircle, ArrowLeft } from 'lucide-react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { productos } from '../../data/productos';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find product by slug
  const productData = productos.find(p => p.slug === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [zoomStyle, setZoomStyle] = React.useState({ transform: 'scale(1)', transformOrigin: 'center center' });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomStyle({ transformOrigin: `${x}% ${y}%`, transform: 'scale(1.8)' });
  };

  const handleMouseLeave = () => {
    setZoomStyle({ transformOrigin: 'center center', transform: 'scale(1)' });
  };

  if (!productData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-20">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Producto no encontrado</h2>
        <button onClick={() => navigate('/productos')} className="text-[var(--color-aovet-primary)] font-bold flex items-center gap-2 hover:underline">
          <ArrowLeft size={20} /> Volver al catálogo
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 font-sans bg-white">
      <Link to="/productos" className="inline-flex items-center gap-2 text-gray-500 hover:text-[var(--color-aovet-primary)] mb-8 transition-colors font-medium">
        <ArrowLeft size={18} /> Volver a productos
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Imagen del producto */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          animate={{ opacity: 1, x: 0 }} 
          className="bg-gray-50 rounded-3xl p-8 flex items-center justify-center relative shadow-inner h-[400px] md:h-[500px]"
        >
          <div 
            className="w-full h-full rounded-2xl flex items-center justify-center relative overflow-hidden bg-white shadow-sm border border-gray-100 p-4 cursor-zoom-in"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <picture className="w-full h-full flex items-center justify-center">
              <source srcSet={productData.imagen.replace('.webp', '.avif')} type="image/avif" />
              <source srcSet={productData.imagen} type="image/webp" />
              <img 
                src={productData.imagen.replace('.webp', '.png')} 
                alt={productData.nombre} 
                width="400"
                height="300"
                decoding="async"
                className="max-w-full max-h-full object-contain mix-blend-multiply transition-transform duration-300 ease-out" 
                style={zoomStyle}
              />
            </picture>
          </div>
          <div className="absolute top-6 right-6 pointer-events-none bg-[var(--color-aovet-accent)] text-[var(--color-aovet-dark)] font-bold px-4 py-1 rounded-full text-sm uppercase shadow-sm">
            {productData.categoria}
          </div>
        </motion.div>

        {/* Detalles del producto */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }} 
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--color-aovet-dark)] font-serif mb-4 leading-tight">
            {productData.nombre}
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed text-justify">{productData.descripcionBreve || productData.descripcion}</p>
          
          <div className="flex flex-wrap gap-4 mb-10">
            {productData.fichaTecnicaUrl ? (
              <a 
                href={productData.fichaTecnicaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--color-aovet-primary)] hover:bg-[var(--color-aovet-dark)] text-white font-bold py-3.5 px-6 rounded-full transition-all flex items-center gap-2 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
              >
                <Download size={20} />
                <span>Descargar Ficha Técnica</span>
              </a>
            ) : (
              <button 
                onClick={() => alert("La ficha técnica de este producto estará disponible para descarga próximamente.")}
                className="bg-[var(--color-aovet-primary)] hover:bg-[var(--color-aovet-dark)] text-white font-bold py-3.5 px-6 rounded-full transition-all flex items-center gap-2 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
                title="Descargar Ficha Técnica"
              >
                <Download size={20} />
                <span>Descargar Ficha Técnica</span>
              </button>
            )}
            <a 
              href={`https://wa.me/593985401224?text=Hola, quiero cotizar ${productData.nombre}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 hover:bg-gray-200 text-[var(--color-aovet-dark)] font-bold py-3.5 px-6 rounded-full transition-all border border-gray-200 hover:shadow-sm"
            >
              Solicitar Cotización
            </a>
          </div>

          {/* Acordeones / Secciones de info */}
          <div className="space-y-8">
            {productData.beneficios && productData.beneficios.length > 0 && (
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="flex items-center gap-2 text-xl font-bold text-[var(--color-aovet-dark)] mb-4 border-b pb-3">
                  <CheckCircle size={24} className="text-[var(--color-aovet-primary)]"/> Beneficios
                </h3>
                <ul className="space-y-2.5">
                  {productData.beneficios.map((ben, idx) => {
                    const colonIdx = ben.indexOf(':');
                    if (colonIdx !== -1) {
                      const label = ben.substring(0, colonIdx);
                      const val = ben.substring(colonIdx + 1);
                      return (
                        <li key={idx} className="text-gray-700 flex items-start gap-2.5 leading-relaxed text-left">
                          <span className="text-[var(--color-aovet-accent)] mt-0.5 flex-shrink-0 font-bold">•</span> 
                          <span className="text-left leading-relaxed">
                            <strong className="font-semibold text-[var(--color-aovet-dark)]">{label}:</strong>
                            {val}
                          </span>
                        </li>
                      );
                    }
                    return (
                      <li key={idx} className="text-gray-700 flex items-start gap-2.5 leading-relaxed text-left">
                        <span className="text-[var(--color-aovet-accent)] mt-0.5 flex-shrink-0 font-bold">•</span> 
                        <span className="text-left leading-relaxed">{ben}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              {productData.composicion && productData.composicion.length > 0 && (
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm h-full flex flex-col justify-start">
                  <h3 className="flex items-center gap-2 text-lg font-bold text-[var(--color-aovet-dark)] mb-4 pb-2 border-b border-gray-200/60">
                    <Droplets size={20} className="text-[var(--color-aovet-primary)]"/> Composición
                  </h3>
                  <ul className={`text-sm text-gray-700 ${productData.composicion.length > 5 ? 'grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2' : 'space-y-2'}`}>
                    {productData.composicion.map((comp, idx) => {
                      const colonIdx = comp.indexOf(':');
                      if (colonIdx !== -1) {
                        const label = comp.substring(0, colonIdx);
                        const val = comp.substring(colonIdx + 1);
                        return (
                          <li key={idx} className="flex items-start gap-2 text-left">
                            <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-aovet-primary)] mt-1.5 flex-shrink-0"></div>
                            <span className="leading-snug text-left text-gray-700">
                              <strong className="font-semibold text-[var(--color-aovet-dark)]">{label}:</strong>
                              {val}
                            </span>
                          </li>
                        );
                      }
                      return (
                        <li key={idx} className="flex items-start gap-2 text-left">
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 flex-shrink-0"></div>
                          <span className="leading-snug text-left text-gray-700">{comp}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}

              {productData.dosificacion && (
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm h-full flex flex-col justify-start">
                  <h3 className="flex items-center gap-2 text-lg font-bold text-[var(--color-aovet-dark)] mb-4 pb-2 border-b border-gray-200/60">
                    <Info size={20} className="text-[var(--color-aovet-primary)]"/> Dosificación
                  </h3>
                  {Array.isArray(productData.dosificacion) ? (
                    <ul className="text-sm text-gray-700 space-y-2.5">
                      {productData.dosificacion.map((dosis, idx) => {
                        const colonIdx = dosis.indexOf(':');
                        if (colonIdx !== -1) {
                          const label = dosis.substring(0, colonIdx);
                          const val = dosis.substring(colonIdx + 1);
                          return (
                            <li key={idx} className="flex items-start gap-2 text-left">
                              <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-aovet-primary)] mt-1.5 flex-shrink-0"></div>
                              <span className="leading-relaxed text-left text-gray-700">
                                <strong className="font-semibold text-[var(--color-aovet-dark)]">{label}:</strong>
                                {val}
                              </span>
                            </li>
                          );
                        }
                        return (
                          <li key={idx} className="flex items-start gap-2 text-left">
                            <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-aovet-primary)] mt-1.5 flex-shrink-0"></div>
                            <span className="leading-relaxed text-left text-gray-700">{dosis}</span>
                          </li>
                        );
                      })}
                    </ul>
                  ) : (
                    <p className="text-sm text-gray-700 leading-relaxed text-left">{productData.dosificacion}</p>
                  )}
                </div>
              )}
            </div>

            {productData.advertencias && productData.advertencias.length > 0 && (
              <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100 shadow-sm">
                <h3 className="flex items-center gap-2 text-orange-800 font-bold mb-3">
                  <ShieldAlert size={20} /> Advertencias
                </h3>
                <ul className="text-sm text-orange-700 space-y-2">
                  {productData.advertencias.map((adv, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-left">
                      <span className="font-bold flex-shrink-0">-</span> 
                      <span className="text-left leading-normal">{adv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetails;
