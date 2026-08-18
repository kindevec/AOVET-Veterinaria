import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Navigation, ExternalLink, MessageCircle, Building2, CheckCircle2 } from 'lucide-react';
import BotonCTA from '../components/ui/BotonCTA';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    categoria: 'aves',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const textoMsg = `Hola AOVET, mi nombre es ${formData.nombre}. Mi número es ${formData.telefono}. Me interesa la línea: ${formData.categoria}. Consulta: ${formData.mensaje}`;
    const urlWa = `https://wa.me/593985401224?text=${encodeURIComponent(textoMsg)}`;
    window.open(urlWa, '_blank');
  };

  return (
    <div className="pt-24 min-h-screen bg-[var(--color-aovet-bg)] font-sans">
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div className="text-center mb-12 sm:mb-16" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
            <span className="text-[var(--color-aovet-primary)] font-bold text-xs uppercase tracking-widest mb-1 block">Atención Personalizada</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--color-aovet-dark)] font-serif mb-4">Ponte en Contacto</h1>
            <p className="text-gray-700 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Estamos listos para atender tus requerimientos técnicos y comerciales en cualquier parte del país.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            
            {/* Formulario */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true, amount: 0.2 }} 
              transition={{ duration: 0.6, delay: 0.2 }} 
              className="bg-white p-6 sm:p-10 rounded-3xl shadow-lg border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-[var(--color-aovet-dark)] font-serif mb-2">Envíanos un mensaje</h2>
              <p className="text-xs sm:text-sm text-gray-500 mb-6">Completa el formulario y te contactaremos de inmediato.</p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label htmlFor="nombre" className="block text-xs sm:text-sm font-bold text-[var(--color-aovet-dark)] mb-1.5">Nombre completo *</label>
                  <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-aovet-primary)] focus:border-transparent transition-all bg-gray-50/50" placeholder="Ej. Ing. Juan Pérez" />
                </div>
                <div>
                  <label htmlFor="telefono" className="block text-xs sm:text-sm font-bold text-[var(--color-aovet-dark)] mb-1.5">Teléfono / WhatsApp *</label>
                  <input type="tel" id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} required className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-aovet-primary)] focus:border-transparent transition-all bg-gray-50/50" placeholder="Ej. 0985401224" />
                </div>
                <div>
                  <label htmlFor="categoria" className="block text-xs sm:text-sm font-bold text-[var(--color-aovet-dark)] mb-1.5">Línea productiva de interés</label>
                  <select id="categoria" name="categoria" value={formData.categoria} onChange={handleChange} className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-aovet-primary)] focus:border-transparent transition-all bg-white appearance-none cursor-pointer">
                    <option value="aves">Avicultura 🐔</option>
                    <option value="bovinos">Ganadería y Mastitis 🐄</option>
                    <option value="porcinos">Porcicultura 🐖</option>
                    <option value="mascotas">Línea Pet & Clínicas 🐕</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="mensaje" className="block text-xs sm:text-sm font-bold text-[var(--color-aovet-dark)] mb-1.5">Mensaje o consulta técnica *</label>
                  <textarea id="mensaje" name="mensaje" value={formData.mensaje} onChange={handleChange} required rows="4" className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-aovet-primary)] focus:border-transparent transition-all resize-none bg-gray-50/50" placeholder="¿En qué podemos asesorarte?"></textarea>
                </div>
                <button type="submit" className="w-full bg-[var(--color-aovet-primary)] text-white font-bold py-4 rounded-xl hover:bg-[var(--color-aovet-dark)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-aovet-primary)] active:scale-[0.98] shadow-md flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer">
                  Enviar Mensaje
                </button>
              </form>
            </motion.div>

            {/* Info y Mapa Interactivo */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true, amount: 0.2 }} 
              transition={{ duration: 0.6, delay: 0.4 }} 
              className="flex flex-col space-y-8"
            >
              {/* Contenedor del Mapa Interactivo */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 p-2 sm:p-3 relative group">
                <div className="relative w-full h-72 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-inner">
                  {/* Google Maps Embed con Marcador Exacto en San Juanpamba - Vía a Jadán */}
                  <iframe 
                    src="https://maps.google.com/maps?q=San+Juanpamba%2C+Jad%C3%A1n%2C+Azuay%2C+Ecuador&t=m&z=15&output=embed&iwloc=near"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade" 
                    title="Ubicación Exacta AOVET San Juanpamba" 
                    className="w-full h-full"
                  ></iframe>

                  {/* Badge Flotante con Botón 'Cómo Llegar' */}
                  <div className="absolute top-3 left-3 right-3 sm:right-auto sm:max-w-xs z-10">
                    <div className="bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-gray-200 shadow-xl flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[var(--color-aovet-primary)] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                        <MapPin size={16} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-[var(--color-aovet-dark)] text-xs sm:text-sm leading-tight">AOVET Veterinaria</p>
                        <p className="text-[11px] text-gray-600 leading-snug mt-0.5">San Juanpamba - Vía a Jadán, Cuenca</p>
                        <a 
                          href="https://www.google.com/maps/dir/?api=1&destination=San+Juanpamba,+Jad%C3%A1n,+Azuay,+Ecuador" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[var(--color-aovet-primary)] hover:underline mt-1.5"
                        >
                          <Navigation size={12} /> Cómo llegar en GPS <ExternalLink size={10} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Grilla de Datos de Contacto */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-gray-100">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-[var(--color-aovet-primary)] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Building2 size={20} />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[var(--color-aovet-dark)] mb-0.5">Sede Principal</h4>
                    <p className="text-xs text-[var(--color-aovet-primary)] font-bold mb-0.5">Mgs. Mvz. Franklin Jonatan Arichabala Yanza</p>
                    <p className="text-xs text-gray-600 leading-relaxed">San Juanpamba - Vía a Jadán<br/>Cuenca, Ecuador.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[var(--color-aovet-dark)] mb-0.5">Horario de Atención</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                    <p className="text-[11px] text-gray-500 mt-0.5">Sábados: 8:00 AM - 1:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-[var(--color-aovet-primary)] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[var(--color-aovet-dark)] mb-0.5">Teléfono de Contacto</h4>
                    <a href="tel:+593985401224" className="text-[var(--color-aovet-primary)] font-bold text-base hover:underline block">
                      0985401224
                    </a>
                    <p className="text-[11px] text-gray-500">+593 98 540 1224</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[var(--color-aovet-dark)] mb-0.5">Correo Electrónico</h4>
                    <a href="mailto:jonatanarichabala_89@hotmail.com" className="text-xs text-gray-600 hover:text-[var(--color-aovet-primary)] transition-colors break-all font-medium">
                      jonatanarichabala_89@hotmail.com
                    </a>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacto;
