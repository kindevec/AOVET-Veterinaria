import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../assets/logo-aovet.webp';

const navLinks = [
  { name: 'Inicio', href: '/' },
  { name: 'Productos', href: '/productos' },
  { name: 'Servicios', href: '/servicios' },
  { name: 'Nosotros', href: '/nosotros' },
  { name: 'Contacto', href: '/contacto' },
];

const Navbar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();
  const hasHero = !location.pathname.startsWith('/producto/');

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const progress = Math.min(1, Math.max(0, currentScroll / 220));
      setScrollProgress(progress);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const bgOpacity = hasHero ? scrollProgress * 0.95 : 0.95;
  const shadowOpacity = hasHero ? scrollProgress * 0.1 : 0.08;
  const blurAmount = hasHero ? scrollProgress * 12 : 12;

  return (
    <header 
      style={{
        backgroundColor: `rgba(255, 255, 255, ${bgOpacity})`,
        backdropFilter: `blur(${blurAmount}px)`,
        boxShadow: `0 4px 20px rgba(0, 0, 0, ${shadowOpacity})`,
      }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-out ${
        scrollProgress > 0.3 || !hasHero ? 'py-2.5' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Original */}
          <Link 
            to="/" 
            className="flex items-center gap-2 z-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-aovet-primary)]"
          >
            <img 
              src={logoImg} 
              alt="AOVET Logo" 
              width="180"
              height="68"
              decoding="async"
              className="h-[64px] sm:h-[72px] w-auto transition-all duration-500"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = link.href === '/' 
                ? location.pathname === '/' 
                : location.pathname.startsWith(link.href);

              return (
                <motion.div
                  key={link.name}
                  whileHover={{ scale: 1.04, y: -1 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <Link
                    to={link.href}
                    className={`px-4 py-2 rounded-full text-sm lg:text-base font-semibold transition-all duration-300 flex items-center justify-center ${
                      isActive
                        ? 'bg-[var(--color-aovet-accent)] text-[var(--color-aovet-dark)] shadow-md shadow-[var(--color-aovet-accent)]/30 font-bold'
                        : 'text-[var(--color-aovet-dark)] hover:bg-[var(--color-aovet-accent)] hover:text-[var(--color-aovet-dark)] hover:shadow-md hover:shadow-[var(--color-aovet-accent)]/30'
                    } focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-aovet-primary)]`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              );
            })}
            <motion.a
              href="https://wa.me/593985401224"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full text-sm lg:text-base font-semibold text-[var(--color-aovet-dark)] hover:bg-[var(--color-aovet-accent)] hover:text-[var(--color-aovet-dark)] hover:shadow-md hover:shadow-[var(--color-aovet-accent)]/30 transition-all duration-300 flex items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-aovet-primary)]"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.96 }}
            >
              WhatsApp
            </motion.a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
