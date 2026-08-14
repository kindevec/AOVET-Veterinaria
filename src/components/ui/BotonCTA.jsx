import { motion } from 'motion/react';

const BotonCTA = ({ text, href, onClick, variant = 'primary', icon: Icon, className = '' }) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-4 py-3 sm:px-8 sm:py-3.5 rounded-full font-bold transition-all text-xs sm:text-base w-full sm:w-auto shadow-md cursor-pointer text-center focus-visible:outline-2 focus-visible:outline-offset-2";
  
  const variants = {
    primary: "bg-[var(--color-aovet-primary)] text-white hover:bg-[var(--color-aovet-dark)] active:bg-[var(--color-aovet-dark)] shadow-[0_4px_14px_rgba(26,107,56,0.4)] border border-white/20 focus-visible:outline-[var(--color-aovet-primary)]",
    secondary: "bg-[#25D366] text-white hover:bg-[#20bd5a] active:bg-[#1da850] shadow-[0_4px_14px_rgba(37,211,102,0.4)] border border-white/20 focus-visible:outline-[#25D366]",
    accent: "bg-[var(--color-aovet-accent)] text-[#1F2937] hover:brightness-105 active:brightness-95 shadow-amber-500/20 focus-visible:outline-[var(--color-aovet-accent)]",
    outline: "border-2 border-[var(--color-aovet-primary)] text-[var(--color-aovet-primary)] bg-transparent hover:bg-[var(--color-aovet-primary)] hover:text-white active:bg-[var(--color-aovet-dark)] active:text-white shadow-sm focus-visible:outline-[var(--color-aovet-primary)]",
    outlineWhite: "border-2 border-white text-white bg-transparent hover:bg-white hover:text-[var(--color-aovet-dark)] active:bg-gray-100 active:text-[var(--color-aovet-dark)] backdrop-blur-sm focus-visible:outline-white"
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      target={href && href.startsWith('http') ? '_blank' : undefined}
      rel={href && href.startsWith('http') ? 'noopener noreferrer' : undefined}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.96 }}
    >
      {Icon && <Icon size={18} className="flex-shrink-0" />}
      <span>{text}</span>
    </Component>
  );
};

export default BotonCTA;
