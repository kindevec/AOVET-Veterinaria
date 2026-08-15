import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'motion/react';

// SVG del logo oficial de WhatsApp
const WhatsappIcon = ({ size = 26, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.0001 2.01666C6.4777 2.01666 1.99965 6.49501 1.99965 12.0175C1.99965 13.9113 2.53123 15.6888 3.44754 17.202L2.01074 21.9993L6.96349 20.6122C8.42398 21.464 10.1558 21.9566 12.0001 21.9566C17.5218 21.9566 22.0005 17.4782 22.0005 11.9559C22.0005 6.43343 17.5218 1.95511 12.0001 1.95511V2.01666ZM12.0001 20.2526C10.3701 20.2526 8.85244 19.7891 7.55184 18.9959L7.26127 18.8239L4.41727 19.6206L5.2323 16.8927L5.04273 16.5936C4.16109 15.2016 3.65582 13.6669 3.65582 12.0175C3.65582 7.41165 7.40455 3.6627 12.0105 3.6627C16.6163 3.6627 20.3653 7.41178 20.3653 12.0175C20.3653 16.6234 16.6165 20.3725 12.0105 20.3725L12.0001 20.2526ZM16.6346 13.882C16.3814 13.7554 15.1387 13.1432 14.9068 13.0588C14.6749 12.9744 14.506 12.9323 14.3371 13.1855C14.1683 13.4387 13.6833 14.0296 13.5358 14.2192C13.388 14.4091 13.2405 14.4302 12.9873 14.3038C12.7341 14.1772 11.919 13.9103 10.9575 13.056C10.1996 12.383 9.69176 11.5542 9.54415 11.3009C9.39655 11.0478 9.52843 10.9106 9.65507 10.7844C9.76906 10.6706 9.90422 10.4891 10.0308 10.3414C10.1575 10.1938 10.2001 10.0883 10.2842 9.91953C10.3688 9.7508 10.3263 9.60333 10.2632 9.47668C10.1998 9.35017 9.69342 8.1054 9.48247 7.59918C9.27648 7.10425 9.06649 7.17188 8.91054 7.16111C8.7628 7.15065 8.59407 7.15065 8.42533 7.15065C8.25647 7.15065 7.98233 7.21389 7.75031 7.46709C7.5183 7.72033 6.86438 8.33235 6.86438 9.57726C6.86438 10.822 7.77123 12.0247 7.89787 12.1935C8.02452 12.3622 9.67073 15.0116 12.2859 16.0378C14.4533 16.8887 14.9082 16.7176 15.3722 16.6756C15.8365 16.6334 16.8913 16.0637 17.1023 15.452C17.3134 14.8402 17.3134 14.3129 17.2501 14.2073C17.1868 14.1018 17.0179 14.0597 16.7648 13.9333L16.6346 13.882Z" />
  </svg>
);

const WhatsAppFloat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isOtherVisible, setIsOtherVisible] = useState(false);
  const location = useLocation();
  const numeroWhatsApp = "593985401224";
  const whatsappUrl = `https://wa.me/${numeroWhatsApp}`;

  // Hook to detect screen width (mobile vs PC)
  useEffect(() => {
    const media = window.matchMedia('(max-width: 767px)');
    const listener = () => setIsMobile(media.matches);
    listener(); // Initial check
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, []);

  const handleClick = (e) => {
    // Only intercept clicks and require two-step slide-out on mobile view
    if (isMobile && !isOpen) {
      e.preventDefault();
      setIsOpen(true);
    }
  };

  useEffect(() => {
    if (isOpen && isMobile) {
      const timer = setTimeout(() => {
        setIsOpen(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, isMobile]);

  // Hook to observe visibility of other WhatsApp buttons on the page
  useEffect(() => {
    // Small timeout to allow the route elements to mount and render fully
    const timer = setTimeout(() => {
      const otherButtons = Array.from(
        document.querySelectorAll(
          'a[href*="wa.me"]:not(#whatsapp-float), a[href*="whatsapp.com"]:not(#whatsapp-float), button[id*="whatsapp"]:not(#whatsapp-float)'
        )
      ).filter(btn => {
        // Exclude buttons inside cards/recommendations to avoid hiding the bubble for minor links
        let parent = btn.parentElement;
        while (parent) {
          if (
            parent.tagName !== 'HEADER' && 
            parent.tagName !== 'FOOTER' && 
            parent.tagName !== 'NAV'
          ) {
            const classes = Array.from(parent.classList);
            const isCard = classes.some(c => 
              c.includes('card') || 
              c === 'shadow-lg' || 
              c === 'shadow-md' || 
              c === 'rounded-2xl' || 
              c === 'rounded-3xl' ||
              c.includes('rounded-[')
            );
            if (isCard) {
              return false; // Exclude card buttons
            }
          }
          parent = parent.parentElement;
        }
        return true; // Keep main page CTAs
      });

      if (otherButtons.length === 0) {
        setIsOtherVisible(false);
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          const isAnyVisible = entries.some((entry) => entry.isIntersecting);
          setIsOtherVisible(isAnyVisible);
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 0.1
        }
      );

      otherButtons.forEach((btn) => observer.observe(btn));

      return () => {
        otherButtons.forEach((btn) => observer.unobserve(btn));
        observer.disconnect();
      };
    }, 150);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <motion.a
      id="whatsapp-float"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={
        isMobile
          ? "fixed bottom-24 right-0 z-50 bg-[#25D366] text-white p-3 rounded-full shadow-2xl hover:bg-[#20bd5a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] flex items-center justify-center cursor-pointer border border-[#1fbd58]"
          : "fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:bg-[#20bd5a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] flex items-center justify-center cursor-pointer"
      }
      animate={
        isOtherVisible
          ? { scale: 0, opacity: 0 }
          : isMobile
            ? { x: isOpen ? -16 : 24, scale: 1, opacity: 1 }
            : { x: 0, scale: 1, opacity: 1 }
      }
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
      style={{
        pointerEvents: isOtherVisible ? 'none' : 'auto'
      }}
      whileHover={isOtherVisible ? {} : { scale: 1.08 }}
      whileTap={isOtherVisible ? {} : { scale: 0.95 }}
      aria-label="Contactar por WhatsApp"
    >
      <WhatsappIcon size={isMobile ? 26 : 32} />
    </motion.a>
  );
};

export default WhatsAppFloat;
