import { motion } from 'motion/react';
import { FileText, ArrowRight, Download } from 'lucide-react';

const catalogosPlaceholder = [
  {
    id: 1,
    titulo: "Catálogo de Avicultura",
    descripcion: "Soluciones integrales, vacunas y nutrición para aves.",
    estado: "pronto"
  },
  {
    id: 2,
    titulo: "Catálogo de Ganadería",
    descripcion: "Tratamientos, biológicos y suplementos bovinos.",
    estado: "pronto"
  },
  {
    id: 3,
    titulo: "Catálogo Industrial",
    descripcion: "Productos especializados para granjas y alto rendimiento.",
    estado: "pronto"
  }
];

const CatalogosSection = () => {
  return (
    <section className="py-20 bg-gray-50 border-y border-gray-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[var(--color-aovet-primary)] font-bold text-xs uppercase tracking-widest mb-2 block">
            Descargas
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-aovet-dark)] font-serif mb-4">
            Catálogos de Distribución
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explora nuestro portafolio completo por sector productivo. Muy pronto habilitaremos la descarga de nuestros catálogos actualizados.
          </p>
        </div>

        {/* Estructura grid-cols-1 md:grid-cols-3 preparada para los catálogos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {catalogosPlaceholder.map((catalogo) => (
            <motion.div 
              key={catalogo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center group relative overflow-hidden"
            >
              <div className="w-16 h-16 rounded-2xl bg-gray-100 text-gray-400 flex items-center justify-center mb-6 group-hover:bg-[var(--color-aovet-primary)]/10 group-hover:text-[var(--color-aovet-primary)] transition-colors">
                <FileText size={32} />
              </div>
              
              <h3 className="text-xl font-bold text-[var(--color-aovet-dark)] mb-3">{catalogo.titulo}</h3>
              <p className="text-sm text-gray-500 mb-8">{catalogo.descripcion}</p>
              
              <div className="mt-auto w-full">
                {/* SKELETON BUTTON */}
                <div className="w-full bg-gray-100 text-gray-400 font-bold py-3 px-6 rounded-full flex items-center justify-center gap-2 cursor-not-allowed">
                  <Download size={18} />
                  Próximamente
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CatalogosSection;
