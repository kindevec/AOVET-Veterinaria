import { useEffect, useRef, useState } from 'react';

const ContadorAnimado = ({ value, label, suffix = '' }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    let interval = null;
    let observer = null;
    let started = false;

    // Reseteo inmediato por si StrictMode o Fast Refresh mantuvo un estado previo
    setDisplayValue(0);

    const startCounting = () => {
      if (started) return;
      started = true;
      
      const duration = 1500; // 1.5s
      const steps = 40; // 40 pasos
      const stepTime = Math.floor(duration / steps);
      let currentStep = 0;
      
      interval = setInterval(() => {
        currentStep += 1;
        const progress = currentStep / steps;
        // Easing outQuad para que empiece rápido y termine suave
        const easedProgress = 1 - (1 - progress) * (1 - progress);
        
        setDisplayValue(Math.floor(easedProgress * value));
        
        if (currentStep >= steps) {
          setDisplayValue(value);
          clearInterval(interval);
        }
      }, stepTime);
    };

    observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startCounting();
        }
      },
      { threshold: 0 }
    );

    if (ref.current) {
      observer.observe(ref.current);
      
      // Fallback: si a los 300ms la página ya cargó y está en pantalla, iniciar
      setTimeout(() => {
        const rect = ref.current?.getBoundingClientRect();
        if (rect && rect.top < window.innerHeight) {
          startCounting();
        }
      }, 300);
    }

    return () => {
      if (interval) clearInterval(interval);
      if (observer) observer.disconnect();
    };
  }, [value]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <div className="text-4xl md:text-5xl font-mono font-bold text-[var(--color-aovet-primary)] mb-2">
        {displayValue}{suffix}
      </div>
      <div className="text-[var(--color-aovet-text)] font-medium text-lg opacity-80">
        {label}
      </div>
    </div>
  );
};

export default ContadorAnimado;
