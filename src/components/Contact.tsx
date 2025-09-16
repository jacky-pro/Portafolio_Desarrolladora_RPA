import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, User, MessageCircle } from 'lucide-react';
import { IoLogoTiktok, IoLogoWhatsapp } from "react-icons/io5";

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const sendMail = () => {
    const to = 'jklnuag08@gmail.com';
    const subject = `Contacto de ${formData.nombre || 'Sin nombre'}`;
    const body = `Nombre: ${formData.nombre}\nEmail: ${formData.email}\n\nMensaje:\n${formData.mensaje}`;
    const href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 dark:text-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Contacto
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-violet-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            ¿Buscas automatizar sin complicaciones? Te ayudo a pasar de idea a resultado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Enlaces sociales */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              Conectemos
            </h3>
            
            <a 
              href="https://www.linkedin.com/in/jackelindev/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className="bg-blue-100 dark:bg-blue-900/40 p-4 rounded-full mr-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/60 transition-colors">
                <Linkedin className="w-8 h-8 text-blue-600 dark:text-blue-300" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-100 text-lg">LinkedIn</h4>
                <p className="text-gray-600 dark:text-gray-300">Conecta conmigo profesionalmente</p>
              </div>
            </a>
            
            <a 
              href="https://github.com/jacky-pro/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duración-300 transform hover:-translate-y-1 group"
            >
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-full mr-4 group-hover:bg-gray-200 dark:group-hover:bg-gray-600 transition-colors">
                <Github className="w-8 h-8 text-gray-800 dark:text-gray-200" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-100 text-lg">GitHub</h4>
                <p className="text-gray-600 dark:text-gray-300">Revisa mis proyectos y código</p>
              </div>
            </a>

            <a 
              href="https://web.whatsapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className="bg-green-100 dark:bg-green-900/40 p-4 rounded-full mr-4 group-hover:bg-green-200 dark:group-hover:bg-green-900/60 transition-colors">
                <IoLogoWhatsapp className="w-8 h-8 text-green-600 dark:text-green-300" />  
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-100 text-lg">WhatsApp</h4>
                <p className="text-gray-600 dark:text-gray-300">Chatea conmigo por WhatsApp Web</p>
              </div>
            </a>

            <a 
              href="https://www.tiktok.com/@jackydream22?lang=es"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-full mr-4 group-hover:bg-gray-200 dark:group-hover:bg-gray-600 transition-colors">
                <IoLogoTiktok className="w-8 h-8 text-gray-800 dark:text-gray-200" />  
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-100 text-lg">Tiktok</h4>
                <p className="text-gray-600 dark:text-gray-300">Revisa mis proyectos y código</p>
              </div>
            </a>
          </div>

          {/* Formulario de contacto */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
              <Mail className="w-6 h-6 mr-2 text-blue-600" />
              Envíame un mensaje
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2 flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2 flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2 flex items-center">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Cuéntame sobre tu proyecto de automatización..."
                ></textarea>
              </div>

              <button
                type="button"
                onClick={sendMail}
                className="w-full bg-gradient-to-r from-blue-600 to-violet-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-violet-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                <Send className="w-5 h-5 mr-2" />
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}