import { motion } from 'motion/react';

const BotonCTA = ({ text, href, onClick, variant = 'primary', className = '' }) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-full font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2";
  
  const variants = {
    primary: "bg-[var(--color-aovet-primary)] text-white hover:bg-[var(--color-aovet-dark)] focus-visible:outline-[var(--color-aovet-primary)]",
    secondary: "bg-[var(--color-aovet-accent)] text-[var(--color-aovet-text)] hover:brightness-110 focus-visible:outline-[var(--color-aovet-accent)]",
    outline: "border-2 border-[var(--color-aovet-primary)] text-[var(--color-aovet-primary)] hover:bg-[var(--color-aovet-primary)] hover:text-white focus-visible:outline-[var(--color-aovet-primary)]"
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {text}
    </Component>
  );
};

export default BotonCTA;
