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
      <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-[#d15739]/20 transform transition-all duration-300 hover:-translate-y-3 hover:scale-105 p-2 sm:p-4 md:p-8 h-full border border-white/50 hover:border-[#d15739]/30 relative overflow-hidden">
        {/* Efecto de fondo sutil */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#d15739]/5 via-transparent to-[#eb833e]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Elementos decorativos */}
        <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#d15739]/20 rounded-full group-hover:scale-150 transition-transform duration-300" />
        <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 w-1 h-1 bg-[#eb833e]/30 rounded-full group-hover:scale-200 transition-transform duration-300 delay-50" />
        
        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Icono con efectos */}
          <div className="bg-gradient-to-br from-[#d15739]/10 to-[#eb833e]/10 p-1.5 sm:p-2 md:p-4 rounded-xl sm:rounded-2xl mb-2 sm:mb-3 md:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
            <div className="text-2xl sm:text-3xl md:text-5xl group-hover:scale-110 transition-transform duration-300">
              {icon}
            </div>
          </div>
          
          {/* Título */}
          <h3 className="text-[#d15739] text-xs sm:text-sm md:text-xl font-bold mb-1 sm:mb-2 md:mb-3 group-hover:text-[#9c3c24] transition-colors duration-300">
            {title}
          </h3>
          
          {/* Descripción */}
          <p className="text-gray-600 text-xs sm:text-xs md:text-base leading-tight sm:leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
            {description}
          </p>
          
          {/* Indicador de acción - solo si showActionButton es true */}
          {showActionButton && (
            <div className="mt-3 sm:mt-6 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              <div className="inline-flex items-center space-x-1 text-[#d15739] font-medium">
                <span className="text-xs sm:text-sm">Ver más</span>
                <ArrowRight size={14} className="sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          )}
        </div>
        
        {/* Borde brillante en hover */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#d15739]/20 rounded-xl sm:rounded-2xl transition-all duration-300 pointer-events-none" />
      </div>
    </Link>
  );
};