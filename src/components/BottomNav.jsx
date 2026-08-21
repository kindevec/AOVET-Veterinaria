import { useEffect, useState, useRef, useLayoutEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Users, Package, Briefcase, Phone } from 'lucide-react';

const navItems = [
  { name: 'Inicio', href: '/', icon: Home },
  { name: 'Productos', href: '/productos', icon: Package },
  { name: 'Servicios', href: '/servicios', icon: Briefcase },
  { name: 'Nosotros', href: '/nosotros', icon: Users },
  { name: 'Contacto', href: '/contacto', icon: Phone },
];

const BottomNav = () => {
  const location = useLocation();
  
  // Find active index based on route
  const activeIndex = navItems.findIndex(item => {
    if (item.href === '/') {
      return location.pathname === '/';
    }
    if (item.href === '/productos') {
      return location.pathname.startsWith('/productos') || location.pathname.startsWith('/producto');
    }
    return location.pathname.startsWith(item.href);
  });

  // Default to index 0 if not found
  const safeActiveIndex = activeIndex === -1 ? 0 : activeIndex;

  const menuRef = useRef(null);
  const menuBorderRef = useRef(null);
  const itemRefs = useRef([]);

  const offsetMenuBorder = useCallback(() => {
    const activeItem = itemRefs.current[safeActiveIndex];
    const menu = menuRef.current;
    const menuBorder = menuBorderRef.current;

    if (activeItem && menu && menuBorder) {
      const offsetActiveItem = activeItem.getBoundingClientRect();
      const left = Math.floor(
        offsetActiveItem.left -
          menu.offsetLeft -
          (menuBorder.offsetWidth - offsetActiveItem.width) / 2
      );
      menuBorder.style.transform = `translate3d(${left}px, 0, 0)`;
    }
  }, [safeActiveIndex]);

  // Recalculate layout on change and resize
  useLayoutEffect(() => {
    offsetMenuBorder();
    const handleResize = () => {
      if (menuRef.current) {
        menuRef.current.style.setProperty("--timeOut", "none");
      }
      offsetMenuBorder();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [offsetMenuBorder]);

  // Restore animation transition after manual timeout removal
  useEffect(() => {
    if (menuRef.current) {
      const timer = setTimeout(() => {
        if (menuRef.current) {
          menuRef.current.style.removeProperty("--timeOut");
        }
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [safeActiveIndex]);

  return (
    <>
      <div className="svg-container">
        <svg viewBox="0 0 202.9 45.5">
          <clipPath
            id="menu-clip-path"
            clipPathUnits="objectBoundingBox"
            transform="scale(0.0049285362247413 0.021978021978022)"
          >
            <path d="M6.7,45.5c5.7,0.1,14.1-0.4,23.3-4c5.7-2.3,9.9-5,18.1-10.5c10.7-7.1,11.8-9.2,20.6-14.3c5-2.9,9.2-5.2,15.2-7 c7.1-2.1,13.3-2.3,17.6-2.1c4.2-0.2,10.5,0.1,17.6,2.1c6.1,1.8,10.2,4.1,15.2,7c8.8,5,9.9,7.1,20.6,14.3c8.3,5.5,12.4,8.2,18.1,10.5 c9.2,3.6,17.6,4.2,23.3,4H6.7z" />
          </clipPath>
        </svg>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-[#E2EFE7] shadow-[0_-8px_30px_rgba(0,0,0,0.04)] pb-safe">
        <menu className="menu" ref={menuRef}>
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = safeActiveIndex === index;

            return (
              <Link
                key={item.name}
                to={item.href}
                ref={(el) => (itemRefs.current[index] = el)}
                className={`menu__item ${isActive ? "active" : ""}`}
                style={{ "--bgColorItem": "#1A6B38" }}
                aria-label={item.name}
              >
                <Icon className="icon" />
                <span className={`text-[9px] mt-1 font-semibold transition-all duration-300 ${
                  isActive ? "opacity-0 h-0 overflow-hidden" : "text-gray-500 opacity-100"
                }`}>
                  {item.name}
                </span>
              </Link>
            );
          })}
          <div className="menu__border" ref={menuBorderRef}></div>
        </menu>
      </div>
    </>
  );
};

export default BottomNav;
