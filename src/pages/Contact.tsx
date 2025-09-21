import React, { useState} from 'react';
import { MapPin, Phone, MessageCircle, Mail, Clock, Send, User, FileText, CheckCircle, MessageSquare, ArrowRight } from 'lucide-react';
import { ScrollAnimate } from '../components/ScrollAnimate';
import { BackButton } from '../components/BackButton';
import { ScrollToTopButton } from '../components/ScrollToTopButton';
import slider9 from '../assets/slider9.jpg';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div 
      className="pt-20 pb-16 overflow-hidden min-h-screen"
      style={{
        backgroundImage: `url(${slider9})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay con gradiente para mejor legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/40"></div>
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-6 left-6 z-30">
          <BackButton />
        </div>
        {/* Elementos decorativos */}
        <div className="absolute inset-0 overflow-hidden">
          <ScrollAnimate animation="scale" delay={0.1}>
            <div className="absolute top-10 left-10 w-16 h-16 bg-white/25 rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
          </ScrollAnimate>
          <ScrollAnimate animation="scale" delay={0.2}>
            <div className="absolute top-32 right-20 w-12 h-12 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          </ScrollAnimate>
          <ScrollAnimate animation="scale" delay={0.3}>
            <div className="absolute bottom-20 left-1/4 w-8 h-8 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
          </ScrollAnimate>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <ScrollAnimate animation="up" delay={0.1}>
              <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-md px-6 py-2 rounded-full mb-6 border border-white/50 shadow-lg">
                <MessageSquare size={20} className="text-[#d15739]" />
                <span className="text-sm font-medium text-gray-800">Estamos para ayudarte</span>
              </div>
            </ScrollAnimate>
            
            <ScrollAnimate animation="fade" delay={0.2}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in tracking-tight">
                Contáctanos
              </h1>
            </ScrollAnimate>
            
            <ScrollAnimate animation="fade" delay={0.3}>
              <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay">
                Estamos acá para ayudarte. Contactanos por cualquiera de nuestros canales 
                o completá el formulario de abajo.
              </p>
            </ScrollAnimate>

            <ScrollAnimate animation="fade" delay={0.4}>
              <div className="flex flex-wrap justify-center items-center gap-6 mb-10 animate-fade-in-delay">
                <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/50">
                  <Phone size={20} className="text-[#d15739]" />
                  <span className="text-sm text-gray-800 font-medium">Atención personalizada</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/50">
                  <Clock size={20} className="text-[#d15739]" />
                  <span className="text-sm text-gray-800 font-medium">Respuesta rápida</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/50">
                  <span className="text-sm text-gray-800 font-medium">Horarios flexibles</span>
                </div>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: `url(${slider9})`,
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay para mejor legibilidad */}
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Information */}
            <ScrollAnimate animation="left" delay={0.1}>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg p-8 transform transition-all hover:shadow-xl hover-lift border border-orange-100">
                <h2 className="text-3xl font-bold text-[#d15739] mb-8">
                  Información de Contacto
                </h2>
                <ul className="space-y-6">
                  <li className="flex items-start group">
                    <div className="bg-[#d15739]/10 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform">
                      <MapPin size={24} className="text-[#d15739]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-700 mb-1">Dirección</h3>
                      <p className="text-gray-600">
                        Franco Segarra 340, Tacuarembó, Uruguay
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start group">
                    <div className="bg-[#d15739]/10 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform">
                      <Phone size={24} className="text-[#d15739]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-700 mb-1">Teléfono</h3>
                      <a href="tel:098130459" className="text-[#d15739] hover:underline">
                        098 130 459 / 463 27828
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start group">
                    <div className="bg-[#d15739]/10 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform">
                      <MessageCircle size={24} className="text-[#d15739]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-700 mb-1">WhatsApp</h3>
                      <a 
                        href="https://wa.me/59898130459" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-[#d15739] hover:underline group inline-flex items-center"
                      >
                        098 130 459
                        <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start group">
                    <div className="bg-[#d15739]/10 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform">
                      <Mail size={24} className="text-[#d15739]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-700 mb-1">Email</h3>
                      <a href="mailto:patylaspiur@outlook.com" className="text-[#d15739] hover:underline">
                        patylaspiur@outlook.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start group">
                    <div className="bg-[#d15739]/10 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform">
                      <Clock size={24} className="text-[#d15739]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-700 mb-1">Horario de Atención</h3>
                      <p className="text-gray-600">Lunes a Viernes: 8 a 20 hs</p>
                      <p className="text-gray-600">Sábados: 8 a 17 hs</p>
                    </div>
                  </li>
                </ul>
              </div>
            </ScrollAnimate>

            {/* Contact Form */}
            <ScrollAnimate animation="right" delay={0.2}>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg p-8 transform transition-all hover:shadow-xl hover-lift border border-orange-100">
                <h2 className="text-3xl font-bold text-[#d15739] mb-8">
                  Envianos un Mensaje
                </h2>
                {submitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                    <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-green-700 mb-2">
                      ¡Mensaje Enviado!
                    </h3>
                    <p className="text-green-600">
                      Gracias por contactarnos. Te respondemos a la brevedad.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">
                          Nombre Completo
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <User size={18} className="text-gray-400" />
                          </div>
                          <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleChange} 
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d15739] focus:border-[#d15739] outline-none transition-all" 
                            placeholder="Tu nombre" 
                            required 
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">
                          Correo Electrónico
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <Mail size={18} className="text-gray-400" />
                          </div>
                          <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d15739] focus:border-[#d15739] outline-none transition-all" 
                            placeholder="tu@email.com" 
                            required 
                          />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-gray-700 mb-2 font-medium">
                          Teléfono (opcional)
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <Phone size={18} className="text-gray-400" />
                          </div>
                          <input 
                            type="tel" 
                            id="phone" 
                            name="phone" 
                            value={formData.phone} 
                            onChange={handleChange} 
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d15739] focus:border-[#d15739] outline-none transition-all" 
                            placeholder="Tu número de teléfono" 
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-gray-700 mb-2 font-medium">
                          Asunto
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <FileText size={18} className="text-gray-400" />
                          </div>
                          <input 
                            type="text" 
                            id="subject" 
                            name="subject" 
                            value={formData.subject} 
                            onChange={handleChange} 
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d15739] focus:border-[#d15739] outline-none transition-all" 
                            placeholder="Asunto del mensaje" 
                            required 
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">
                        Mensaje
                      </label>
                      <textarea 
                        id="message" 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        rows={5} 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d15739] focus:border-[#d15739] outline-none transition-all resize-none" 
                        placeholder="Escribí tu mensaje acá..." 
                        required
                      ></textarea>
                    </div>
                    <button 
                      type="submit" 
                      disabled={loading} 
                      className={`w-full py-4 px-6 rounded-lg text-white font-bold flex items-center justify-center transition-all duration-300 ${
                        loading 
                          ? 'bg-gray-400 cursor-not-allowed' 
                          : 'bg-gradient-to-r from-[#d15739] to-[#eb833e] hover:from-[#eb833e] hover:to-[#d15739] hover:scale-105 shadow-lg hover:shadow-xl'
                      }`}
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send size={18} className="mr-2" />
                          Enviar Mensaje
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </ScrollAnimate>
          </div>

          {/* Map Section */}
          <ScrollAnimate animation="up" delay={0.3}>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover-lift border border-orange-100">
              <h2 className="text-3xl font-bold text-[#d15739] mb-8">
                Nuestra Ubicación
              </h2>
              <div className="aspect-video w-full md:w-1/2 mx-auto rounded-xl overflow-hidden shadow-lg">
                <iframe 
                  className="w-full h-full" 
                  src="https://www.google.com/maps?q=Franco+Segarra+340,+Tacuarembó,+Uruguay&output=embed" 
                  title="Ubicación de Papelería Abril" 
                  loading="lazy"
                />
              </div>
            </div>
          </ScrollAnimate>
        </div>
      </section>
      <ScrollToTopButton />
    </div>
  );
};