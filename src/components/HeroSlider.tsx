import React, { useEffect, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

interface HeroSliderProps {
  images: string[];
  interval?: number;
}

export const HeroSlider = ({ images, interval = 5000 }: HeroSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Efecto de parallax sutil
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX - innerWidth / 2) / innerWidth;
    const y = (clientY - innerHeight / 2) / innerHeight;
    setMousePosition({ x, y });
  }, []);

  // Auto-avance de imágenes
  useEffect(() => {
    if (isPaused) return;
    
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setIsTransitioning(false);
      }, 300);
    }, interval);
    
    return () => clearInterval(timer);
  }, [images.length, interval, isPaused]);

  // Ir a la anterior
  const goToPrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      setIsTransitioning(false);
    }, 300);
  };

  // Ir a la siguiente
  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setIsTransitioning(false);
    }, 300);
  };

  // Ir a imagen específica
  const goToImage = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <div 
      className="relative h-[70vh] md:h-[80vh] lg:h-[85vh] xl:h-[90vh] overflow-hidden rounded-b-[40px] shadow-2xl group transition-all duration-700 hover:shadow-3xl"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
    >
      {/* Imágenes con efectos mejorados y parallax muy sutil */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out ${
            index === currentIndex 
              ? 'opacity-100 scale-100 z-10' 
              : 'opacity-0 scale-105 z-0'
          }`}
          style={{
            transform: index === currentIndex 
              ? `scale(0.95) translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)` 
              : 'scale(0.95)'
          }}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover object-center"
            loading={index <= 2 ? "eager" : "lazy"}
          />
          {/* Overlay con gradiente mejorado */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
        </div>
      ))}

      {/* Contenido superpuesto con animación mejorada */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-2xl animate-fade-in tracking-wide">
            Papelería Abril
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl font-light drop-shadow-lg animate-fade-in-delay mb-6">
            Tu papelería de confianza en Tacuarembó
          </p>
          <div className="animate-fade-in-delay">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
              <span className="text-sm font-medium">Franco Segarra 340</span>
              <span className="text-white/60">•</span>
              <span className="text-sm">098 130 459</span>
            </div>
          </div>
        </div>
      </div>

      {/* Botones de navegación mejorados */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-30 hover:scale-110 border border-white/30 hover:shadow-lg cursor-pointer"
        aria-label="Imagen anterior"
        disabled={isTransitioning}
      >
        <ChevronLeft size={28} />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-30 hover:scale-110 border border-white/30 hover:shadow-lg cursor-pointer"
        aria-label="Imagen siguiente"
        disabled={isTransitioning}
      >
        <ChevronRight size={28} />
      </button>

      {/* Botón de pausa/reproducción */}
      <button
        onClick={() => setIsPaused(!isPaused)}
        className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-30 hover:scale-110 border border-white/30 hover:shadow-lg cursor-pointer"
        aria-label={isPaused ? "Reproducir" : "Pausar"}
      >
        {isPaused ? <Play size={20} /> : <Pause size={20} />}
      </button>

      {/* Indicadores mejorados */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`transition-all duration-300 hover:scale-125 cursor-pointer ${
              index === currentIndex 
                ? 'bg-white w-8 h-2 rounded-full shadow-lg' 
                : 'bg-white/50 w-2 h-2 rounded-full hover:bg-white/80'
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
            disabled={isTransitioning}
          />
        ))}
      </div>

      {/* Contador de imágenes */}
      <div className="absolute bottom-4 right-4 bg-black/30 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium z-30 border border-white/20">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Efecto de borde brillante en hover */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-b-[40px] transition-all duration-500 pointer-events-none" />
      
      {/* Efecto de partículas flotantes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
    </div>
  );
};
