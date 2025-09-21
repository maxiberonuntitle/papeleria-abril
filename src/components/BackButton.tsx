import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface BackButtonProps {
  className?: string;
}

export const BackButton: React.FC<BackButtonProps> = ({ className = '' }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <button
      onClick={handleGoBack}
      className={`group inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white/30 border border-white/40 hover:border-white/60 ${className}`}
      aria-label="Volver a la página anterior"
    >
      <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
      <span>Volver</span>
    </button>
  );
};
