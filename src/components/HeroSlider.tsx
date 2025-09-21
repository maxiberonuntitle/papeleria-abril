import React, { useEffect, useState, useCallback, useRef } from 'react';

interface HeroSliderProps {
  images: string[];
  interval?: number;
}

const HeroSlider = ({ images, interval = 5000 }: HeroSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

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
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setIsTransitioning(false);
      }, 300);
    }, interval);
    
    return () => clearInterval(timer);
  }, [images.length, interval]);

  // Funciones de navegación
  const goToPrevious = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      setIsTransitioning(false);
    }, 300);
  }, [isTransitioning, images.length]);

  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setIsTransitioning(false);
    }, 300);
  }, [isTransitioning, images.length]);

  // Funciones de touch para swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
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
      ref={sliderRef}
      className="relative h-[50vh] sm:h-[60vh] md:h-[80vh] lg:h-[85vh] overflow-hidden group transition-all duration-700"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
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
              ? `scale(1.05) translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)` 
              : 'scale(1.05)'
          }}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover object-center"
            loading={index <= 2 ? "eager" : "lazy"}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
      ))}

      {/* Contenido superpuesto con animación mejorada */}
      <div className="absolute inset-0 z-20 flex items-end justify-center pb-8 sm:pb-12 md:pb-16">
        <div className="text-center text-white max-w-4xl px-2 sm:px-4">
          <div className="bg-black/30 backdrop-blur-sm px-2 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 md:py-4 lg:py-6 rounded-xl sm:rounded-2xl border border-white/20 shadow-xl">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-light drop-shadow-lg animate-fade-in-delay mb-2 sm:mb-3 md:mb-4 lg:mb-6 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
              Tu destino de confianza para todos los útiles escolares, artículos de oficina y servicios de impresión en Tacuarembó
            </p>
            
            <div className="animate-fade-in-delay">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-3 bg-white/15 backdrop-blur-md px-2 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 md:py-4 rounded-xl sm:rounded-2xl border border-white/25 shadow-xl">
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <span className="text-xs sm:text-sm font-medium">📍 Franco Segarra 340</span>
                </div>
                <span className="text-white/60 hidden sm:inline">•</span>
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <span className="text-xs sm:text-sm font-medium">📞 098 130 459</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Indicadores mejorados */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`transition-all duration-300 hover:scale-125 cursor-pointer ${
              index === currentIndex 
                ? 'bg-gradient-to-r from-[#d15739] to-[#eb833e] w-10 h-3 rounded-full shadow-lg border border-white/30' 
                : 'bg-white/40 w-3 h-3 rounded-full hover:bg-white/70 border border-white/20'
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
            disabled={isTransitioning}
          />
        ))}
      </div>

      {/* Contador de imágenes */}
      <div className="absolute bottom-6 right-6 bg-gradient-to-r from-[#d15739]/90 to-[#eb833e]/90 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium z-30 border border-white/20 shadow-lg">
        {currentIndex + 1} / {images.length}
      </div>

      
      {/* Efecto de partículas flotantes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
    </div>
  );
};

export { HeroSlider };
export default HeroSlider;
