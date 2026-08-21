import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  MapPin, Phone, Mail, Clock, Navigation, ExternalLink, 
  MessageCircle, Building2, User, Layers, Send, MessageSquare 
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
            
            {/* Columna Izquierda: Formulario Estilo Píldora Moderno (Sin Contenedor Cuadrado) */}
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

              {/* Canales Directos Rápidos (Estilo Redondo de la Referencia) */}
              <div className="mt-8 pt-6 border-t border-gray-200/70 text-center">
                <p className="text-xs text-gray-500 font-medium mb-3">O comunícate por nuestros canales directos</p>
                <div className="flex items-center justify-center gap-3.5">
                  <a 
                    href="https://wa.me/593985401224" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-11 h-11 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-[var(--color-aovet-primary)] hover:bg-[var(--color-aovet-primary)] hover:text-white hover:border-[var(--color-aovet-primary)] transition-all hover:scale-105"
                    title="WhatsApp"
                  >
                    <MessageCircle size={18} />
                  </a>
                  <a 
                    href="tel:+593985401224" 
                    className="w-11 h-11 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-[var(--color-aovet-primary)] hover:bg-[var(--color-aovet-primary)] hover:text-white hover:border-[var(--color-aovet-primary)] transition-all hover:scale-105"
                    title="Llamar"
                  >
                    <Phone size={18} />
                  </a>
                  <a 
                    href="mailto:jonatanarichabala_89@hotmail.com" 
                    className="w-11 h-11 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-[var(--color-aovet-primary)] hover:bg-[var(--color-aovet-primary)] hover:text-white hover:border-[var(--color-aovet-primary)] transition-all hover:scale-105"
                    title="Email"
                  >
                    <Mail size={18} />
                  </a>
                  <a 
                    href="https://www.google.com/maps/dir/?api=1&destination=San+Juanpamba,+Jad%C3%A1n,+Azuay,+Ecuador" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-[var(--color-aovet-primary)] hover:bg-[var(--color-aovet-primary)] hover:text-white hover:border-[var(--color-aovet-primary)] transition-all hover:scale-105"
                    title="GPS / Ubicación"
                  >
                    <Navigation size={18} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Columna Derecha: Mapa + Información de Contacto (Sin Contenedor Cuadrado en la Info) */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true, amount: 0.2 }} 
              transition={{ duration: 0.6, delay: 0.4 }} 
              className="flex flex-col space-y-6"
            >
              {/* Contenedor del Mapa Interactivo */}
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

                  {/* Badge Flotante con Botón 'Cómo Llegar' */}
                  <div className="absolute top-3 left-3 right-3 sm:right-auto sm:max-w-xs z-10">
                    <div className="bg-white/95 backdrop-blur-md p-3 rounded-2xl border border-gray-200 shadow-xl flex items-start gap-3">
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
                          className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[var(--color-aovet-primary)] hover:underline mt-1"
                        >
                          <Navigation size={12} /> Cómo llegar en GPS <ExternalLink size={10} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Grilla de Datos de Contacto Limpia (Sin contenedor cuadrado pesado) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                <div className="flex items-start gap-3 bg-white/70 backdrop-blur-sm p-4 rounded-2xl border border-gray-200/70 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[var(--color-aovet-primary)] flex items-center justify-center flex-shrink-0 mt-0.5 border border-emerald-100">
                    <Building2 size={19} />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[var(--color-aovet-dark)] mb-0.5">Sede Principal</h4>
                    <p className="text-[11px] text-[var(--color-aovet-primary)] font-semibold mb-0.5">Mgs. Mvz. Jonatan Arichabala</p>
                    <p className="text-[11px] text-gray-600 leading-relaxed">San Juanpamba - Vía a Jadán<br/>Cuenca, Ecuador.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/70 backdrop-blur-sm p-4 rounded-2xl border border-gray-200/70 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0 mt-0.5 border border-amber-100">
                    <Clock size={19} />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[var(--color-aovet-dark)] mb-0.5">Horario de Atención</h4>
                    <p className="text-[11px] text-gray-600 leading-relaxed">Lunes a Viernes: 8:00 - 18:00</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">Sábados: 8:00 - 13:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/70 backdrop-blur-sm p-4 rounded-2xl border border-gray-200/70 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[var(--color-aovet-primary)] flex items-center justify-center flex-shrink-0 mt-0.5 border border-emerald-100">
                    <Phone size={19} />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[var(--color-aovet-dark)] mb-0.5">Teléfono Directo</h4>
                    <a href="tel:+593985401224" className="text-[var(--color-aovet-primary)] font-bold text-xs sm:text-sm hover:underline block">
                      0985401224
                    </a>
                    <p className="text-[10px] text-gray-500">+593 98 540 1224</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/70 backdrop-blur-sm p-4 rounded-2xl border border-gray-200/70 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0 mt-0.5 border border-sky-100">
                    <Mail size={19} />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[var(--color-aovet-dark)] mb-0.5">Correo Electrónico</h4>
                    <a href="mailto:jonatanarichabala_89@hotmail.com" className="text-[11px] text-gray-600 hover:text-[var(--color-aovet-primary)] transition-colors break-all font-medium">
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
