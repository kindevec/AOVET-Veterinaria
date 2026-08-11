import { useState } from 'react';
import { motion } from 'motion/react';
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
    alert(`Gracias ${formData.nombre}. Hemos recibido tu mensaje (SIMULACIÓN).`);
    setFormData({ nombre: '', telefono: '', categoria: 'aves', mensaje: '' });
  };

  return (
    <div className="pt-24 min-h-screen bg-white">
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-aovet-dark)] mb-4">Ponte en Contacto</h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Estamos listos para atender tus requerimientos. Cotiza ahora o solicita asesoría técnica.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            
            {/* Formulario */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-[var(--color-aovet-bg)] p-8 md:p-10 rounded-3xl">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-bold text-[var(--color-aovet-dark)] mb-2">Nombre completo</label>
                  <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-aovet-primary)] focus:border-transparent transition-all" placeholder="Ej. Juan Pérez" />
                </div>
                <div>
                  <label htmlFor="telefono" className="block text-sm font-bold text-[var(--color-aovet-dark)] mb-2">Teléfono / WhatsApp</label>
                  <input type="tel" id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-aovet-primary)] focus:border-transparent transition-all" placeholder="Ej. 099 999 9999" />
                </div>
                <div>
                  <label htmlFor="categoria" className="block text-sm font-bold text-[var(--color-aovet-dark)] mb-2">Línea de interés</label>
                  <select id="categoria" name="categoria" value={formData.categoria} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-aovet-primary)] focus:border-transparent transition-all bg-white appearance-none cursor-pointer">
                    <option value="aves">Avicultura 🐔</option>
                    <option value="bovinos">Ganadería 🐄</option>
                    <option value="porcinos">Porcicultura 🐖</option>
                    <option value="mascotas">Línea Pet 🐕</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-bold text-[var(--color-aovet-dark)] mb-2">Mensaje o solicitud</label>
                  <textarea id="mensaje" name="mensaje" value={formData.mensaje} onChange={handleChange} required rows="4" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-aovet-primary)] focus:border-transparent transition-all resize-none" placeholder="¿En qué podemos ayudarte?"></textarea>
                </div>
                <button type="submit" className="w-full bg-[var(--color-aovet-primary)] text-white font-bold py-4 rounded-xl hover:bg-[var(--color-aovet-dark)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-aovet-primary)] active:scale-[0.98]">
                  Enviar Mensaje
                </button>
              </form>
            </motion.div>

            {/* Info y Mapa */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: 0.4 }} className="flex flex-col">
              <div className="bg-gray-100 rounded-3xl overflow-hidden h-64 mb-8 shadow-inner relative">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127641.17181079374!2d-78.58334460064506!3d-0.1865937989914488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a4002422c9f%3A0x44b991e158ef5572!2sQuito%2C%20Ecuador!5e0!3m2!1ses!2s!4v1700000000000!5m2!1ses!2s" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Ubicación AOVET" className="absolute inset-0"></iframe>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-[var(--color-aovet-dark)] mb-3">Sede Principal</h4>
                  <p className="text-gray-600">Av. de los Productores N12-34 y Campo Verde.<br/>Quito, Ecuador.</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[var(--color-aovet-dark)] mb-3">Horario de Atención</h4>
                  <p className="text-gray-600">Lunes a Viernes:<br/>8:00 AM - 6:00 PM</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[var(--color-aovet-dark)] mb-3">Llámanos</h4>
                  <p className="text-[var(--color-aovet-primary)] font-bold text-lg">+593 99 999 9999</p>
                  <p className="text-[var(--color-aovet-primary)] font-bold text-lg">+593 2 222 3333</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[var(--color-aovet-dark)] mb-3">Correo</h4>
                  <a href="mailto:info@aovet.com.ec" className="text-gray-600 hover:text-[var(--color-aovet-primary)] transition-colors">info@aovet.com.ec</a><br/>
                  <a href="mailto:ventas@aovet.com.ec" className="text-gray-600 hover:text-[var(--color-aovet-primary)] transition-colors">ventas@aovet.com.ec</a>
                </div>
              </div>
              <div className="mt-8">
                 <BotonCTA text="Chatear con un asesor" href="https://wa.me/593999999999" variant="outline" className="w-full sm:w-auto" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacto;
