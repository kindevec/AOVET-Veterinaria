import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../assets/logo-aovet.png';

const navLinks = [
  { name: 'Inicio', href: '/' },
  { name: 'Nosotros', href: '/nosotros' },
  { name: 'Productos', href: '/productos' },
  { name: 'Servicios', href: '/servicios' },
  { name: 'Contacto', href: '/contacto' },
];

const Navbar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      // Progresión suave de opacidad entre 0px y 220px de scroll
      const currentScroll = window.scrollY;
      const progress = Math.min(1, Math.max(0, currentScroll / 220));
      setScrollProgress(progress);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  // En Inicio la opacidad, sombra y desenfoque aumentan suavemente conforme el usuario baja
  const bgOpacity = isHome ? scrollProgress * 0.95 : 0.95;
  const shadowOpacity = isHome ? scrollProgress * 0.1 : 0.08;
  const blurAmount = isHome ? scrollProgress * 12 : 12;

  // Transición progresiva del color del texto
  const isNavDark = isHome && scrollProgress < 0.5;

  return (
    <header 
      style={{
        backgroundColor: `rgba(255, 255, 255, ${bgOpacity})`,
        backdropFilter: `blur(${blurAmount}px)`,
        boxShadow: `0 4px 20px rgba(0, 0, 0, ${shadowOpacity})`,
      }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-out ${
        scrollProgress > 0.3 || !isHome ? 'py-2.5' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="/" 
            onClick={closeMenu}
            className="flex items-center gap-2 z-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-aovet-primary)]"
          >
            <img 
              src={logoImg} 
              alt="AOVET Logo" 
              className="h-[68px] w-auto transition-all duration-500 drop-shadow-[0_0_2px_rgba(255,255,255,0.8)]" 
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`font-medium transition-colors duration-500 hover:text-[var(--color-aovet-accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-aovet-primary)] ${
                  location.pathname === link.href ? 'text-[var(--color-aovet-primary)] font-bold' :
                  isNavDark ? 'text-white drop-shadow-md' : 'text-[var(--color-aovet-text)]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <motion.a
              href="https://wa.me/593999999999"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-5 py-2.5 rounded-full font-bold transition-all duration-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-aovet-primary)] ${
                isNavDark 
                  ? 'bg-white text-[var(--color-aovet-primary)] hover:bg-gray-100 shadow-md'
                  : 'bg-[var(--color-aovet-primary)] text-white hover:bg-[var(--color-aovet-dark)] shadow-sm' 
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              WhatsApp
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden z-50 p-2 transition-colors duration-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-aovet-primary)] ${
              isNavDark && !mobileMenuOpen ? 'text-white' : 'text-[var(--color-aovet-text)]'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menú principal"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-0 pt-24 bg-white/95 backdrop-blur-xl z-40 flex flex-col px-6"
          >
            <nav className="flex flex-col gap-6 items-center text-xl font-bold text-[var(--color-aovet-dark)]">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={closeMenu}
                  className={`w-full text-center py-3 border-b border-gray-100 hover:text-[var(--color-aovet-primary)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-aovet-primary)] ${location.pathname === link.href ? 'text-[var(--color-aovet-primary)]' : ''}`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://wa.me/593999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full text-center px-6 py-4 bg-[var(--color-aovet-primary)] text-white rounded-full hover:bg-[var(--color-aovet-dark)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-aovet-primary)]"
              >
                Cotizar por WhatsApp
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
