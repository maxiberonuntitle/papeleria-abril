import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  showActionButton?: boolean;
}

export const ProductCard = ({
  icon,
  title,
  description,
  showActionButton = true
}: ProductCardProps) => {
  return (
    <Link to="/productos" className="block group">
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-[#d15739]/20 transform transition-all duration-500 hover:-translate-y-3 hover:scale-105 p-8 h-full border border-gray-100 hover:border-[#d15739]/20 relative overflow-hidden">
        {/* Efecto de fondo sutil */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#d15739]/5 via-transparent to-[#eb833e]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Elementos decorativos */}
        <div className="absolute top-4 right-4 w-2 h-2 bg-[#d15739]/20 rounded-full group-hover:scale-150 transition-transform duration-500" />
        <div className="absolute bottom-4 left-4 w-1 h-1 bg-[#eb833e]/30 rounded-full group-hover:scale-200 transition-transform duration-500 delay-100" />
        
        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Icono con efectos */}
          <div className="bg-gradient-to-br from-[#d15739]/10 to-[#eb833e]/10 p-4 rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
            <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
              {icon}
            </div>
          </div>
          
          {/* Título */}
          <h3 className="text-[#d15739] text-xl font-bold mb-3 group-hover:text-[#9c3c24] transition-colors duration-300">
            {title}
          </h3>
          
          {/* Descripción */}
          <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
            {description}
          </p>
          
          {/* Indicador de acción - solo si showActionButton es true */}
          {showActionButton && (
            <div className="mt-6 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              <div className="inline-flex items-center space-x-1 text-[#d15739] font-medium">
                <span className="text-sm">Ver más</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          )}
        </div>
        
        {/* Borde brillante en hover */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#d15739]/20 rounded-2xl transition-all duration-500 pointer-events-none" />
      </div>
    </Link>
  );
};