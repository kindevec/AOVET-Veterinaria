import { Link, useLocation } from 'react-router-dom';
import { Home, Users, Package, Briefcase, Phone } from 'lucide-react';
import { motion } from 'motion/react';

const navItems = [
  { name: 'Inicio', href: '/', icon: Home },
  { name: 'Nosotros', href: '/nosotros', icon: Users },
  { name: 'Productos', href: '/productos', icon: Package },
  { name: 'Servicios', href: '/servicios', icon: Briefcase },
  { name: 'Contacto', href: '/contacto', icon: Phone },
];

const BottomNav = () => {
  const location = useLocation();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-[0_-4px_15px_rgba(0,0,0,0.05)] pb-safe">
      <nav className="flex justify-around items-center h-16 px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.href;
          
          return (
            <Link
              key={item.name}
              to={item.href}
              className="flex flex-col items-center justify-center w-full h-full space-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-aovet-primary)]"
              aria-label={item.name}
            >
              <div className="relative">
                <Icon 
                  size={24} 
                  className={`transition-colors duration-300 ${
                    isActive ? 'text-[var(--color-aovet-primary)]' : 'text-gray-500'
                  }`} 
                  strokeWidth={isActive ? 2.5 : 2}
                />
                {isActive && (
                  <motion.div
                    layoutId="bottomNavIndicator"
                    className="absolute -bottom-1.5 left-1/2 w-1 h-1 bg-[var(--color-aovet-primary)] rounded-full"
                    style={{ x: '-50%' }}
                  />
                )}
              </div>
              <span 
                className={`text-[10px] font-medium transition-colors duration-300 ${
                  isActive ? 'text-[var(--color-aovet-primary)]' : 'text-gray-500'
                }`}
              >
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default BottomNav;
