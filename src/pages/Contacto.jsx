import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  MapPin, Phone, Mail, Clock, Navigation, ExternalLink, 
  Building2, User, Layers, Send, MessageSquare 
} from 'lucide-react';

const sanitizeInput = (text) => {
  if (typeof text !== 'string') return '';
  return text
    .replace(/[<>]/g, '') // Eliminar tags HTML
    .replace(/javascript:/gi, '')
    .trim();
};

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    categoria: 'aves',
    mensaje: '',
    honeypot: '' // Campo trampa anti-spam
  });
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Verificación de trampa Honeypot (si un bot lo rellena, abortamos silenciosamente)
    if (formData.honeypot) {
      console.warn('Bot detectado vía honeypot.');
      return;
    }

    const cleanNombre = sanitizeInput(formData.nombre);
    const cleanTelefono = sanitizeInput(formData.telefono);
    const cleanMensaje = sanitizeInput(formData.mensaje);

    // Validación básica de seguridad
    if (cleanNombre.length < 3) {
      setErrorMsg('Por favor, ingresa un nombre válido (mínimo 3 caracteres).');
      return;
    }

    const phoneRegex = /^[0-9+-\s()]{7,15}$/;
    if (!phoneRegex.test(cleanTelefono)) {
      setErrorMsg('Por favor, ingresa un número de teléfono válido.');
      return;
    }

    const textoMsg = `Hola AOVET, mi nombre es ${cleanNombre}. Mi número es ${cleanTelefono}. Me interesa la línea: ${formData.categoria}. Consulta: ${cleanMensaje}`;
    const urlWa = `https://wa.me/593985401224?text=${encodeURIComponent(textoMsg)}`;
    window.open(urlWa, '_blank');
  };

  return (
    <div className="pt-24 min-h-screen bg-[var(--color-aovet-bg)] font-sans pb-16">
      <section className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Encabezado */}
          <motion.div 
            className="text-center mb-10 sm:mb-14" 
            initial={{ opacity: 0, y: 24 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, amount: 0.2 }} 
            transition={{ duration: 0.6 }}
          >
            <span className="text-[var(--color-aovet-primary)] font-bold text-xs uppercase tracking-widest mb-1.5 block">
              Atención Personalizada
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-aovet-dark)] font-serif mb-3">
              Ponte en Contacto
            </h1>
            <p className="text-gray-700 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Estamos listos para atender tus requerimientos técnicos y comerciales en cualquier parte del país.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            
            {/* Columna Izquierda: Formulario Estilo Píldora Moderno */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true, amount: 0.2 }} 
              transition={{ duration: 0.6, delay: 0.2 }} 
              className="flex flex-col"
            >
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-aovet-dark)] font-serif mb-1.5">
                  Envíanos un mensaje
                </h2>
                <p className="text-xs sm:text-sm text-gray-600">
                  Completa los campos a continuación y te responderemos a la brevedad.
                </p>
              </div>

              {errorMsg && (
                <div className="mb-5 p-3.5 bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm rounded-2xl font-medium">
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Campo Trampa Honeypot */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="honeypot">Website</label>
                  <input
                    type="text"
                    id="honeypot"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleChange}
                    tabIndex="-1"
                    autoComplete="off"
                  />
                </div>

                {/* Input Nombre (Pill) */}
                <div className="relative flex items-center bg-white rounded-full border border-gray-200 shadow-sm px-4 sm:px-5 py-3 sm:py-3.5 focus-within:ring-2 focus-within:ring-[var(--color-aovet-primary)] focus-within:border-transparent transition-all">
                  <div className="text-[var(--color-aovet-primary)] mr-3 flex-shrink-0">
                    <User size={18} />
                  </div>
                  <input 
                    type="text" 
                    id="nombre" 
                    name="nombre" 
                    value={formData.nombre} 
                    onChange={handleChange} 
                    required 
                    maxLength={100} 
                    className="w-full bg-transparent text-xs sm:text-sm text-[var(--color-aovet-dark)] placeholder:text-gray-400 focus:outline-none" 
                    placeholder="Nombre completo *" 
                  />
                </div>

                {/* Input Teléfono / WhatsApp (Pill) */}
                <div className="relative flex items-center bg-white rounded-full border border-gray-200 shadow-sm px-4 sm:px-5 py-3 sm:py-3.5 focus-within:ring-2 focus-within:ring-[var(--color-aovet-primary)] focus-within:border-transparent transition-all">
                  <div className="text-[var(--color-aovet-primary)] mr-3 flex-shrink-0">
                    <Phone size={18} />
                  </div>
                  <input 
                    type="tel" 
                    id="telefono" 
                    name="telefono" 
                    value={formData.telefono} 
                    onChange={handleChange} 
                    required 
                    maxLength={20} 
                    className="w-full bg-transparent text-xs sm:text-sm text-[var(--color-aovet-dark)] placeholder:text-gray-400 focus:outline-none" 
                    placeholder="Teléfono / WhatsApp *" 
                  />
                </div>

                {/* Select Línea Productiva (Pill) */}
                <div className="relative flex items-center bg-white rounded-full border border-gray-200 shadow-sm px-4 sm:px-5 py-3 sm:py-3.5 focus-within:ring-2 focus-within:ring-[var(--color-aovet-primary)] focus-within:border-transparent transition-all">
                  <div className="text-[var(--color-aovet-primary)] mr-3 flex-shrink-0">
                    <Layers size={18} />
                  </div>
                  <select 
                    id="categoria" 
                    name="categoria" 
                    value={formData.categoria} 
                    onChange={handleChange} 
                    className="w-full bg-transparent text-xs sm:text-sm text-[var(--color-aovet-dark)] focus:outline-none appearance-none cursor-pointer pr-4"
                  >
                    <option value="aves">Avicultura 🐔</option>
                    <option value="bovinos">Ganadería y Mastitis 🐄</option>
                    <option value="porcinos">Porcicultura 🐖</option>
                    <option value="mascotas">Línea Pet & Clínicas 🐕</option>
                  </select>
                </div>

                {/* Textarea Mensaje (Rounded 3xl Pill) */}
                <div className="relative flex items-start bg-white rounded-3xl border border-gray-200 shadow-sm px-4 sm:px-5 py-3.5 focus-within:ring-2 focus-within:ring-[var(--color-aovet-primary)] focus-within:border-transparent transition-all">
                  <div className="text-[var(--color-aovet-primary)] mr-3 mt-1 flex-shrink-0">
                    <MessageSquare size={18} />
                  </div>
                  <textarea 
                    id="mensaje" 
                    name="mensaje" 
                    value={formData.mensaje} 
                    onChange={handleChange} 
                    required 
                    maxLength={1000} 
                    rows="3" 
                    className="w-full bg-transparent text-xs sm:text-sm text-[var(--color-aovet-dark)] placeholder:text-gray-400 focus:outline-none resize-none" 
                    placeholder="¿En qué podemos asesorarte? *"
                  ></textarea>
                </div>

                {/* Botón de Envío Pill */}
                <button 
                  type="submit" 
                  className="w-full bg-[var(--color-aovet-primary)] hover:bg-[var(--color-aovet-dark)] text-white font-bold py-3.5 sm:py-4 rounded-full shadow-md hover:shadow-lg transition-all active:scale-[0.98] flex items-center justify-center gap-2 text-xs sm:text-sm uppercase tracking-wider cursor-pointer mt-1"
                >
                  <span>Enviar Mensaje</span>
                  <Send size={15} />
                </button>
              </form>
            </motion.div>

            {/* Columna Derecha: Barra de Dirección + Mapa + Información con Animaciones e Iconos Iluminados */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true, amount: 0.2 }} 
              transition={{ duration: 0.6, delay: 0.4 }} 
              className="flex flex-col space-y-5"
            >
              {/* Información de Ubicación Encima del Mapa (Sin contenedor y con icono Lucide iluminado) */}
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-1 py-1 group"
              >
                <div className="flex items-start gap-4">
                  <div className="relative flex-shrink-0 mt-0.5">
                    {/* Efecto de Iluminación Ambiental / Glow */}
                    <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150 pointer-events-none"></div>
                    <MapPin 
                      size={28} 
                      strokeWidth={2.2} 
                      className="text-[var(--color-aovet-primary)] relative z-10 filter drop-shadow-[0_0_6px_rgba(13,61,32,0.3)] group-hover:drop-shadow-[0_0_14px_rgba(72,213,151,0.9)] transition-all duration-300 group-hover:scale-110" 
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--color-aovet-dark)] text-sm sm:text-base leading-tight">
                      AOVET Veterinaria
                    </h3>
                    <p className="text-xs text-gray-600 leading-snug mt-0.5">
                      San Juanpamba - Vía a Jadán, Cuenca
                    </p>
                  </div>
                </div>

                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=San+Juanpamba,+Jad%C3%A1n,+Azuay,+Ecuador" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[var(--color-aovet-primary)] hover:text-[var(--color-aovet-dark)] hover:underline transition-colors mt-1 sm:mt-0"
                >
                  <Navigation size={14} className="text-[var(--color-aovet-primary)]" />
                  <span>Cómo llegar en GPS</span>
                  <ExternalLink size={12} />
                </a>
              </motion.div>

              {/* Contenedor del Mapa Interactivo (Limpio) */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 p-2 sm:p-3 relative group">
                <div className="relative w-full h-64 sm:h-72 md:h-80 rounded-2xl overflow-hidden shadow-inner">
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
                </div>
              </div>

              {/* Información de Contacto - Animaciones de Acercamiento e Iconos con Iluminación */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
                }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-2"
              >
                {/* Sede Principal */}
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, scale: 0.88, y: 20 },
                    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                  }}
                  whileHover={{ scale: 1.04, y: -2 }}
                  transition={{ type: "spring", stiffness: 350, damping: 20 }}
                  className="flex items-start gap-4 p-3 rounded-2xl hover:bg-white/60 transition-colors group cursor-default"
                >
                  <div className="relative flex-shrink-0 mt-0.5">
                    {/* Efecto de Iluminación Ambiental / Glow */}
                    <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150 pointer-events-none"></div>
                    <Building2 
                      size={28} 
                      strokeWidth={2.2} 
                      className="text-[var(--color-aovet-primary)] relative z-10 filter drop-shadow-[0_0_6px_rgba(13,61,32,0.3)] group-hover:drop-shadow-[0_0_14px_rgba(72,213,151,0.9)] transition-all duration-300 group-hover:scale-110" 
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[var(--color-aovet-dark)] mb-0.5">Sede Principal</h4>
                    <p className="text-xs text-[var(--color-aovet-primary)] font-semibold mb-0.5">Mgs. Mvz. Jonatan Arichabala</p>
                    <p className="text-xs text-gray-600 leading-relaxed">San Juanpamba - Vía a Jadán<br />Cuenca, Ecuador.</p>
                  </div>
                </motion.div>

                {/* Horario de Atención */}
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, scale: 0.88, y: 20 },
                    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                  }}
                  whileHover={{ scale: 1.04, y: -2 }}
                  transition={{ type: "spring", stiffness: 350, damping: 20 }}
                  className="flex items-start gap-4 p-3 rounded-2xl hover:bg-white/60 transition-colors group cursor-default"
                >
                  <div className="relative flex-shrink-0 mt-0.5">
                    {/* Efecto de Iluminación Ambiental / Glow */}
                    <div className="absolute inset-0 rounded-full bg-amber-500/25 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150 pointer-events-none"></div>
                    <Clock 
                      size={28} 
                      strokeWidth={2.2} 
                      className="text-amber-500 relative z-10 filter drop-shadow-[0_0_6px_rgba(245,158,11,0.35)] group-hover:drop-shadow-[0_0_14px_rgba(245,158,11,0.9)] transition-all duration-300 group-hover:scale-110" 
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[var(--color-aovet-dark)] mb-0.5">Horario de Atención</h4>
                    <p className="text-xs text-gray-700 font-medium leading-relaxed">Lunes a Viernes: 8:00 - 18:00</p>
                    <p className="text-[11px] text-gray-500 mt-0.5">Sábados: 8:00 - 13:00</p>
                  </div>
                </motion.div>

                {/* Teléfono Directo */}
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, scale: 0.88, y: 20 },
                    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                  }}
                  whileHover={{ scale: 1.04, y: -2 }}
                  transition={{ type: "spring", stiffness: 350, damping: 20 }}
                  className="flex items-start gap-4 p-3 rounded-2xl hover:bg-white/60 transition-colors group cursor-default"
                >
                  <div className="relative flex-shrink-0 mt-0.5">
                    {/* Efecto de Iluminación Ambiental / Glow */}
                    <div className="absolute inset-0 rounded-full bg-emerald-500/25 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150 pointer-events-none"></div>
                    <Phone 
                      size={28} 
                      strokeWidth={2.2} 
                      className="text-[var(--color-aovet-primary)] relative z-10 filter drop-shadow-[0_0_6px_rgba(16,185,129,0.35)] group-hover:drop-shadow-[0_0_14px_rgba(72,213,151,0.9)] transition-all duration-300 group-hover:scale-110" 
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[var(--color-aovet-dark)] mb-0.5">Teléfono Directo</h4>
                    <a href="tel:+593985401224" className="text-sm font-bold text-[var(--color-aovet-dark)] hover:text-[var(--color-aovet-primary)] transition-colors block">
                      0985401224
                    </a>
                    <p className="text-[11px] text-gray-500">+593 98 540 1224</p>
                  </div>
                </motion.div>

                {/* Correo Electrónico */}
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, scale: 0.88, y: 20 },
                    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                  }}
                  whileHover={{ scale: 1.04, y: -2 }}
                  transition={{ type: "spring", stiffness: 350, damping: 20 }}
                  className="flex items-start gap-4 p-3 rounded-2xl hover:bg-white/60 transition-colors group cursor-default"
                >
                  <div className="relative flex-shrink-0 mt-0.5">
                    {/* Efecto de Iluminación Ambiental / Glow */}
                    <div className="absolute inset-0 rounded-full bg-sky-500/25 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150 pointer-events-none"></div>
                    <Mail 
                      size={28} 
                      strokeWidth={2.2} 
                      className="text-sky-500 relative z-10 filter drop-shadow-[0_0_6px_rgba(14,165,233,0.35)] group-hover:drop-shadow-[0_0_14px_rgba(56,189,248,0.9)] transition-all duration-300 group-hover:scale-110" 
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[var(--color-aovet-dark)] mb-0.5">Correo Electrónico</h4>
                    <a href="mailto:jonatanarichabala_89@hotmail.com" className="text-xs text-gray-600 hover:text-[var(--color-aovet-primary)] transition-colors break-all font-medium">
                      jonatanarichabala_89@hotmail.com
                    </a>
                  </div>
                </motion.div>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacto;
