import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { productos } from '../../data/productos';
import ProductoCard from '../ui/ProductoCard';
import SeparadorGrieta from '../ui/SeparadorGrieta';

const categorias = [
  { id: 'todos', label: 'Todos' },
  { id: 'aves', label: 'Aves 🐔' },
  { id: 'bovinos', label: 'Bovinos 🐄' },
  { id: 'porcinos', label: 'Porcinos 🐖' },
  { id: 'mascotas', label: 'Mascotas 🐕' }
];

const Productos = () => {
  const [filtroActivo, setFiltroActivo] = useState('todos');

  const productosFiltrados = filtroActivo === 'todos' 
    ? productos 
    : productos.filter(p => p.categoria === filtroActivo);

  return (
    <section id="productos" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-aovet-dark)] mb-4">Catálogo de Productos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Soluciones comprobadas para garantizar la salud y el rendimiento óptimo de tus animales.
          </p>
        </motion.div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categorias.map(cat => (
            <button
              key={cat.id}
              onClick={() => setFiltroActivo(cat.id)}
              className={`px-5 py-2.5 rounded-full font-bold transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-aovet-primary)] ${
                filtroActivo === cat.id 
                  ? 'bg-[var(--color-aovet-primary)] text-white shadow-md scale-105'
                  : 'bg-[var(--color-aovet-bg)] text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid de Productos */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {productosFiltrados.map((producto) => (
              <ProductoCard key={producto.id} producto={producto} />
            ))}
          </AnimatePresence>
        </motion.div>

        {productosFiltrados.length === 0 && (
          <div className="text-center py-20 text-gray-500 font-medium">
            No se encontraron productos en esta categoría.
          </div>
        )}
      </div>

      <div className="mt-16">
        <SeparadorGrieta />
      </div>
    </section>
  );
};

export default Productos;
