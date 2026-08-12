import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Inicio from './pages/Inicio';
import Nosotros from './pages/Nosotros';
import Productos from './pages/Productos';
import Servicios from './pages/Servicios';
import Contacto from './pages/Contacto';
import ProductDetails from './components/ui/ProductDetails';

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-aovet-bg)] flex flex-col font-sans overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      
      <main className="flex-grow flex flex-col">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/producto/:id" element={<ProductDetails />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
