import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import logoImg from '../assets/logo-aovet-white.webp';
import kindevIcon from '../assets/kindev_icon.webp';

const Footer = () => {
  return (
    <footer className="bg-[var(--color-aovet-dark)] text-white pt-16 pb-24 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="flex flex-col gap-4">
            <img 
              src={logoImg} 
              alt="AOVET Logo" 
              width="160"
              height="64"
              loading="lazy"
              decoding="async"
              className="h-14 md:h-16 w-auto object-contain self-start drop-shadow-md" 
            />
            <p className="text-gray-300 mt-2">
              Importamos confianza. Distribuimos salud animal. Tu socio estratégico en el sector agropecuario y veterinario.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-[var(--color-aovet-accent)]">Secciones</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Inicio</Link></li>
              <li><Link to="/productos" className="text-gray-300 hover:text-white transition-colors">Productos</Link></li>
              <li><Link to="/servicios" className="text-gray-300 hover:text-white transition-colors">Servicios</Link></li>
              <li><Link to="/nosotros" className="text-gray-300 hover:text-white transition-colors">Nosotros</Link></li>
              <li><Link to="/contacto" className="text-gray-300 hover:text-white transition-colors">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-[var(--color-aovet-accent)]">Líneas de Producto</h4>
            <ul className="flex flex-col gap-3 text-gray-300">
              <li>Avicultura</li>
              <li>Ganadería</li>
              <li>Porcicultura</li>
              <li>Línea Pet</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-[var(--color-aovet-accent)]">Contacto</h4>
            <address className="not-italic text-gray-300 flex flex-col gap-4">
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-[var(--color-aovet-accent)] group-hover:text-[var(--color-aovet-dark)] transition-colors">
                  <MapPin size={20} />
                </div>
                <span>San Juanpamba - Vía a Jadan<br/>Cuenca, Ecuador</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-[var(--color-aovet-accent)] group-hover:text-[var(--color-aovet-dark)] transition-colors">
                  <Phone size={20} />
                </div>
                <span>0985401224</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-[var(--color-aovet-accent)] group-hover:text-[var(--color-aovet-dark)] transition-colors flex-shrink-0">
                  <Mail size={20} />
                </div>
                <span className="break-all text-sm">jonatanarichabala_89@hotmail.com</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-[var(--color-aovet-accent)] group-hover:text-[var(--color-aovet-dark)] transition-colors">
                  <Clock size={20} />
                </div>
                <span>Lun - Vie: 8:00 AM - 6:00 PM</span>
              </div>
            </address>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-gray-400 text-sm grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12 items-center">
          <div className="md:col-span-1 lg:col-span-3 flex flex-col sm:flex-row items-center md:items-start lg:items-center gap-2 sm:gap-6 text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} AOVET. Todos los derechos reservados.</p>
            <div className="flex gap-4 text-xs sm:text-sm">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
              <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
            </div>
          </div>
          
          <div className="md:col-span-1 lg:col-span-1 flex justify-center md:justify-start">
            <a 
              href="https://kindevx.web.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-all text-sm flex items-center gap-2.5 group"
              title="Desarrollado por KINDEV"
              aria-label="Desarrollado por KINDEV"
            >
              {/* Logo de Colibrí KINDEV estático con efectos visuales de resplandor y hover */}
              <div className="relative inline-flex items-center justify-center flex-shrink-0 group/icon">
                {/* Halo de luz de fondo con efecto de respiración sutil */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00E5FF]/20 to-[#00B0FF]/20 blur-md opacity-70 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 pointer-events-none"></div>
                
                <img 
                  src={kindevIcon} 
                  alt="KINDEV Logo" 
                  width="44" 
                  height="44" 
                  loading="lazy" 
                  decoding="async" 
                  className="relative z-10 w-10 h-10 sm:w-11 sm:h-11 object-contain drop-shadow-[0_2px_10px_rgba(0,229,255,0.45)] group-hover:drop-shadow-[0_4px_18px_rgba(0,229,255,0.85)] group-hover:scale-115 group-hover:-rotate-6 group-hover:brightness-110 transition-all duration-300 ease-out inline-block"
                />
              </div>
              <span className="text-sm sm:text-base text-gray-400 group-hover:text-white transition-colors">
                Desarrollado por{" "}
                <span className="font-extrabold text-[var(--color-aovet-accent)] drop-shadow-[0_0_8px_rgba(255,193,7,0.35)] group-hover:drop-shadow-[0_0_16px_rgba(255,193,7,0.95)] group-hover:brightness-110 group-hover:tracking-wider inline-block transition-all duration-300">
                  KINDEV
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
