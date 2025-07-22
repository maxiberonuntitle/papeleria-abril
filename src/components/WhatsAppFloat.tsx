import React from 'react';
import { MessageCircle } from 'lucide-react';
export const WhatsAppFloat = () => {
  return <div className="fixed bottom-8 right-6 z-50">
      <a href="https://wa.me/59898130459" target="_blank" rel="noopener noreferrer" className="flex items-center bg-[#f0752e] hover:bg-[#fc4c17] text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all">
        <div className="bg-[#25d366] rounded-full p-1 mr-2">
          <MessageCircle size={20} className="text-white" />
        </div>
        <span className="font-medium">WhatsApp</span>
      </a>
    </div>;
};