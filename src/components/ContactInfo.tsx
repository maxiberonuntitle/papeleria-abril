import React, { lazy } from 'react';
import { MapPin, Phone, MessageCircle, Mail, Clock, ArrowRight, Sparkles } from 'lucide-react';

export const ContactInfo = () => {
  return (
    <section id="contacto" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-16 h-16 bg-[#d15739]/5 rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
        <div className="absolute top-32 right-20 w-12 h-12 bg-[#eb833e]/5 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/4 w-8 h-8 bg-[#d15739]/7 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#d15739]/10 backdrop-blur-sm px-6 py-2 rounded-full mb-6 border border-[#d15739]/20">
            <Sparkles size={20} className="text-[#d15739]" />
            <span className="text-sm font-medium text-[#d15739]">Estamos para ayudarte</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#d15739] mb-4 md:mb-6 animate-fade-in tracking-tight">
            Contacto
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-delay px-4">
            Vení a visitarnos o contactanos por cualquiera de nuestros canales
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-12 mb-12 lg:mb-16">
          <div className="w-full lg:w-2/3 xl:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="group hover-lift">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-4 sm:p-6 border border-orange-100 hover:border-[#d15739]/20 transition-all duration-300 h-full">
                  <div className="flex items-center group-hover:scale-105 transition-transform duration-300">
                    <div className="bg-[#d15739]/10 p-2 sm:p-3 rounded-xl mr-3 sm:mr-4 group-hover:bg-[#d15739]/20 transition-colors duration-300">
                      <MapPin size={24} className="text-[#d15739] sm:w-7 sm:h-7" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#d15739] text-base sm:text-lg mb-1">Dirección</h3>
                      <p className="text-gray-600 text-sm sm:text-base">Franco Segarra 340, Tacuarembó</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group hover-lift">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-4 sm:p-6 border border-orange-100 hover:border-[#d15739]/20 transition-all duration-300 h-full">
                  <div className="flex items-center group-hover:scale-105 transition-transform duration-300">
                    <div className="bg-[#d15739]/10 p-2 sm:p-3 rounded-xl mr-3 sm:mr-4 group-hover:bg-[#d15739]/20 transition-colors duration-300">
                      <Phone size={24} className="text-[#d15739] sm:w-7 sm:h-7" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#d15739] text-base sm:text-lg mb-1">Teléfono</h3>
                      <a href="tel:098130459" className="text-gray-600 hover:text-[#d15739] transition-colors text-sm sm:text-base">
                        098 130 459 / 463 27828
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group hover-lift">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-4 sm:p-6 border border-orange-100 hover:border-[#d15739]/20 transition-all duration-300 h-full">
                  <div className="flex items-center group-hover:scale-105 transition-transform duration-300">
                    <div className="bg-[#d15739]/10 p-2 sm:p-3 rounded-xl mr-3 sm:mr-4 group-hover:bg-[#d15739]/20 transition-colors duration-300">
                      <MessageCircle size={24} className="text-[#d15739] sm:w-7 sm:h-7" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#d15739] text-base sm:text-lg mb-1">WhatsApp</h3>
                      <a 
                        href="https://wa.me/59898130459" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-600 hover:text-[#d15739] transition-colors group inline-flex items-center text-sm sm:text-base"
                      >
                        098 130 459
                        <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform sm:w-4 sm:h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group hover-lift">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-4 sm:p-6 border border-orange-100 hover:border-[#d15739]/20 transition-all duration-300 h-full">
                  <div className="flex items-center group-hover:scale-105 transition-transform duration-300">
                    <div className="bg-[#d15739]/10 p-2 sm:p-3 rounded-xl mr-3 sm:mr-4 group-hover:bg-[#d15739]/20 transition-colors duration-300">
                      <Mail size={24} className="text-[#d15739] sm:w-7 sm:h-7" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#d15739] text-base sm:text-lg mb-1">Email</h3>
                      <a href="mailto:patylaspiur@outlook.com" className="text-gray-600 hover:text-[#d15739] transition-colors text-sm sm:text-base">
                        patylaspiur@outlook.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/3 xl:w-1/2">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 sm:p-8 border border-orange-100">
              <h3 className="text-xl sm:text-2xl font-bold text-[#d15739] mb-4 sm:mb-6">
                Horarios de Atención
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-[#d15739]/5 rounded-xl">
                  <div>
                    <h4 className="font-bold text-[#d15739]">Lunes a Viernes</h4>
                    <p className="text-gray-600 text-sm">Días de semana</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-[#d15739]">8:00 - 20:00</p>
                    <p className="text-gray-500 text-sm">hs</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-[#d15739]/5 rounded-xl">
                  <div>
                    <h4 className="font-bold text-[#d15739]">Sábados</h4>
                    <p className="text-gray-600 text-sm">Fin de semana</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-[#d15739]">8:00 - 17:00</p>
                    <p className="text-gray-500 text-sm">hs</p>
                  </div>
                </div>
                <div className="text-center p-4 bg-[#d15739]/10 rounded-xl">
                  <p className="text-sm text-[#d15739] font-medium">
                    ¡Te esperamos!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};