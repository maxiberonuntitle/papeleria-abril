import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppFloat = () => {
  return (
    <div className="fixed bottom-24 right-6 z-50">
      {/* WhatsApp Button con efectos mejorados */}
      <a 
        href="https://wa.me/59898130459" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="relative flex items-center justify-center w-12 h-12 bg-gradient-to-r from-[#25d366] to-[#128c7e] hover:from-[#128c7e] hover:to-[#25d366] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group animate-bounce-subtle"
      >
        {/* Efecto de pulsación */}
        <div className="absolute inset-0 bg-[#25d366] rounded-full animate-ping opacity-20"></div>
        
        {/* Efecto de ondas */}
        <div className="absolute inset-0 bg-[#25d366] rounded-full animate-pulse opacity-10"></div>
        
        {/* Icono principal */}
        <MessageCircle size={20} className="relative z-10 text-white group-hover:scale-110 transition-transform duration-300" />
        
        {/* Efecto de brillo en hover */}
        <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Indicador de notificación */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse">
          <div className="absolute inset-0 bg-red-500 rounded-full animate-ping"></div>
        </div>
      </a>
    </div>
  );
};