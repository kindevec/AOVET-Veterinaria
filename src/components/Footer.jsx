import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import logoImg from '../assets/logo-aovet-white.png';

const Footer = () => {
  return (
    <footer className="bg-[var(--color-aovet-dark)] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="flex flex-col gap-4">
            <img src={logoImg} alt="AOVET Logo" className="h-14 md:h-16 w-auto object-contain self-start drop-shadow-md" />
            <p className="text-gray-300 mt-2">
              Importamos confianza. Distribuimos salud animal. Tu socio estratégico en el sector agropecuario y veterinario.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-[var(--color-aovet-accent)]">Secciones</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Inicio</Link></li>
              <li><Link to="/nosotros" className="text-gray-300 hover:text-white transition-colors">Nosotros</Link></li>
              <li><Link to="/productos" className="text-gray-300 hover:text-white transition-colors">Catálogo</Link></li>
              <li><Link to="/servicios" className="text-gray-300 hover:text-white transition-colors">Servicios</Link></li>
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

        <div className="pt-8 border-t border-white/10 text-center text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} AOVET. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
