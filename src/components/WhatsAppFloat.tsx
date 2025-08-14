import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppFloat = () => {
  return (
    <div className="fixed bottom-8 right-6 z-50">
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/59898130459" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#25d366] to-[#128c7e] hover:from-[#128c7e] hover:to-[#25d366] text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 group"
      >
        <MessageCircle size={28} className="text-white group-hover:scale-110 transition-transform duration-300" />
      </a>
    </div>
  );
};