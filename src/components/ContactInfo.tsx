import React, { lazy } from 'react';
import { MapPin, Phone, MessageCircle, Mail, Clock } from 'lucide-react';
export const ContactInfo = () => {
  return <section id="contacto" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#d15739] text-center mb-12">
          Contacto
        </h2>
        <div className="flex flex-col md:flex-row justify-center">
          <div className="w-full md:w-2/3 lg:w-1/2">
            <ul className="space-y-4">
              <li className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <MapPin size={28} className="text-[#d15739] mr-4" />
                <strong className="text-[#d15739]">
                  Dirección: Franco Segarra 340
                </strong>
              </li>
              <li className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <Phone size={28} className="text-[#d15739] mr-4" />
                <strong className="text-[#d15739]">
                  Teléfono: 098 130 459/ 463 27828
                </strong>
              </li>
              <li className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <MessageCircle size={28} className="text-[#d15739] mr-4" />
                <div className="text-[#d15739]">
                  <strong>WhatsApp: </strong>
                  <a href="https://wa.me/59898130459" target="_blank" rel="noopener noreferrer" className="font-bold hover:underline">
                    098 130 459
                  </a>
                </div>
              </li>
              <li className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <Mail size={28} className="text-[#d15739] mr-4" />
                <div className="text-[#d15739]">
                  <strong>Email: </strong>
                  <a href="mailto:patylaspiur@outlook.com" className="font-bold hover:underline">
                    patylaspiur@outlook.com
                  </a>
                </div>
              </li>
              <li className="flex items-start p-4 bg-white rounded-lg shadow-sm">
                <Clock size={28} className="text-[#d15739] mr-4 mt-1" />
                <div className="text-[#d15739]">
                  <strong className="block">
                    Horario: Lunes a Viernes 8 a 20 hs
                  </strong>
                  <strong>Sábados 8 a 17 hs</strong>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12">
          <iframe className="w-full h-[320px] rounded-2xl shadow-lg" src="https://www.google.com/maps?q=Franco+Segarra+340,+Tacuarembó,+Uruguay&output=embed" title="Ubicación de Papelería Abril" loading="lazy"></iframe>
        </div>
      </div>
    </section>;
};