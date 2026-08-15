import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BottomNav from './components/BottomNav';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import ScrollToTop from './components/ScrollToTop';

// Lazy loaded Pages
const Inicio = lazy(() => import('./pages/Inicio'));
const Nosotros = lazy(() => import('./pages/Nosotros'));
const Productos = lazy(() => import('./pages/Productos'));
const Servicios = lazy(() => import('./pages/Servicios'));
const Contacto = lazy(() => import('./pages/Contacto'));
const ProductDetails = lazy(() => import('./components/ui/ProductDetails'));

const LoadingFallback = () => (
  <div className="flex-grow flex items-center justify-center min-h-[60vh]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--color-aovet-primary)]"></div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-aovet-bg)] flex flex-col font-sans overflow-x-hidden pb-16 md:pb-0">
      <ScrollToTop />
      <Navbar />
      
      <main className="flex-grow flex flex-col">
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/producto/:id" element={<ProductDetails />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
      <BottomNav />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
