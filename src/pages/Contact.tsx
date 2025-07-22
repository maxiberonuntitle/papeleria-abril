import React, { useState} from 'react';
import { MapPin, Phone, MessageCircle, Mail, Clock, Send, User, FileText, CheckCircle } from 'lucide-react';
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
  return <div className="pt-28 pb-16">
      <div className="container mx-auto px-4 mt-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#eb833e] to-[#d15739] text-white py-12 px-6 rounded-2xl mb-12 shadow-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Contáctanos
          </h1>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto">
            Estamos aquí para ayudarte. Contáctanos por cualquiera de nuestros
            canales o completa el formulario a continuación.
          </p>
        </div>
        {/* Contact Information and Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all hover:shadow-xl">
            <h2 className="text-2xl font-bold text-[#d15739] mb-6">
              Información de Contacto
            </h2>
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <MapPin size={24} className="text-[#d15739]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-700">Dirección</h3>
                  <p className="text-gray-600">
                    Franco Segarra 340, Tacuarembó, Uruguay
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <Phone size={24} className="text-[#d15739]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-700">Teléfono</h3>
                  <p className="text-gray-600">098 130 459 / 463 27828</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <MessageCircle size={24} className="text-[#d15739]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-700">WhatsApp</h3>
                  <a href="https://wa.me/59898130459" target="_blank" rel="noopener noreferrer" className="text-[#d15739] hover:underline">
                    098 130 459
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <Mail size={24} className="text-[#d15739]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-700">Email</h3>
                  <a href="mailto:patylaspiur@outlook.com" className="text-[#d15739] hover:underline">
                    patylaspiur@outlook.com
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <Clock size={24} className="text-[#d15739]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-700">
                    Horario de Atención
                  </h3>
                  <p className="text-gray-600">Lunes a Viernes: 8 a 20 hs</p>
                  <p className="text-gray-600">Sábados: 8 a 17 hs</p>
                </div>
              </li>
            </ul>
          </div>
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all hover:shadow-xl">
            <h2 className="text-2xl font-bold text-[#d15739] mb-6">
              Envíanos un Mensaje
            </h2>
            {submitted ? <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-green-700 mb-2">
                  ¡Mensaje Enviado!
                </h3>
                <p className="text-green-600">
                  Gracias por contactarnos. Te responderemos a la brevedad.
                </p>
              </div> : <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-1">
                      Nombre Completo
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <User size={18} className="text-gray-400" />
                      </div>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-[#d15739] focus:border-[#d15739] outline-none transition" placeholder="Tu nombre" required />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-1">
                      Correo Electrónico
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Mail size={18} className="text-gray-400" />
                      </div>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-[#d15739] focus:border-[#d15739] outline-none transition" placeholder="tu@email.com" required />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-1">
                      Teléfono (opcional)
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Phone size={18} className="text-gray-400" />
                      </div>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-[#d15739] focus:border-[#d15739] outline-none transition" placeholder="Tu número de teléfono" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 mb-1">
                      Asunto
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <FileText size={18} className="text-gray-400" />
                      </div>
                      <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-[#d15739] focus:border-[#d15739] outline-none transition" placeholder="Asunto del mensaje" required />
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-1">
                    Mensaje
                  </label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#d15739] focus:border-[#d15739] outline-none transition" placeholder="Escribe tu mensaje aquí..." required></textarea>
                </div>
                <button type="submit" disabled={loading} className={`w-full py-3 px-6 rounded-lg text-white font-medium flex items-center justify-center transition-all ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#d15739] hover:bg-[#eb833e]'}`}>
                  {loading ? <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </> : <>
                      <Send size={18} className="mr-2" />
                      Enviar Mensaje
                    </>}
                </button>
              </form>}
          </div>
        </div>
        {/* Map Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
          <h2 className="text-2xl font-bold text-[#d15739] mb-6">
            Nuestra Ubicación
          </h2>
          <div className="aspect-video w-full rounded-xl overflow-hidden shadow-md">
            <iframe className="w-full h-full" src="https://www.google.com/maps?q=Franco+Segarra+340,+Tacuarembó,+Uruguay&output=embed" title="Ubicación de Papelería Abril" loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </div>;
};