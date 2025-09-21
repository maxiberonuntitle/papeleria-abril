import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-500">

      {/* Main Navigation */}
      <nav className={`transition-all duration-500 backdrop-blur-md ${
        scrolled 
          ? 'bg-white/70 text-[#d15739] shadow-xl py-2 border-b border-gray-100/50' 
          : 'bg-gradient-to-r from-[#eb833e]/90 to-[#d15739]/90 text-white py-4'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link 
              to="/" 
              className={`font-bold tracking-wider transition-all duration-500 group hover:scale-105 ${
                scrolled 
                  ? 'text-[#d15739] text-lg md:text-xl' 
                  : 'text-white text-2xl md:text-3xl'
              }`}
            >
              <div className="flex items-center">
                <Sparkles 
                  size={scrolled ? 20 : 24} 
                  className={`mr-2 group-hover:rotate-180 transition-all duration-500 ${
                    scrolled ? 'text-[#eb833e]' : 'text-yellow-200'
                  }`} 
                />
                <span>Papelería Abril</span>
                <span className={`ml-2 italic font-dancing transition-all duration-500 ${
                  scrolled 
                    ? 'text-[#eb833e] text-xs md:text-sm' 
                    : 'text-yellow-200 text-sm md:text-base'
                }`}>
                  tacuarembó
                </span>
              </div>
            </Link>

            {/* Mobile menu button */}
            <button 
              className={`md:hidden transition-all duration-300 hover:scale-110 rounded-lg ${
                scrolled 
                  ? 'text-[#d15739] hover:bg-[#d15739]/10 p-1.5' 
                  : 'text-white hover:bg-white/20 p-2'
              }`} 
              onClick={() => setIsOpen(!isOpen)} 
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={scrolled ? 20 : 24} /> : <Menu size={scrolled ? 20 : 24} />}
            </button>

            {/* Desktop menu */}
            <div className="hidden md:flex space-x-2">
              <NavLink to="/" isActive={isActive('/')} scrolled={scrolled}>
                Inicio
              </NavLink>
              <NavLink to="/productos" isActive={isActive('/productos')} scrolled={scrolled}>
                Productos
              </NavLink>
              <NavLink to="/servicios" isActive={isActive('/servicios')} scrolled={scrolled}>
                Servicios
              </NavLink>
              <NavLink to="/contacto" isActive={isActive('/contacto')} scrolled={scrolled}>
                Contacto
              </NavLink>
            </div>
          </div>

          {/* Mobile menu */}
          <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-64 opacity-100 mt-4 pb-4' : 'max-h-0 opacity-0 mt-0 pb-0'
          }`}>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
              <MobileNavLink to="/" scrolled={scrolled} isActive={isActive('/')} onClick={() => setIsOpen(false)}>
                Inicio
              </MobileNavLink>
              <MobileNavLink to="/productos" scrolled={scrolled} isActive={isActive('/productos')} onClick={() => setIsOpen(false)}>
                Productos
              </MobileNavLink>
              <MobileNavLink to="/servicios" scrolled={scrolled} isActive={isActive('/servicios')} onClick={() => setIsOpen(false)}>
                Servicios
              </MobileNavLink>
              <MobileNavLink to="/contacto" scrolled={scrolled} isActive={isActive('/contacto')} onClick={() => setIsOpen(false)}>
                Contacto
              </MobileNavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

// Desktop Navigation Link
const NavLink = ({
  children,
  to,
  isActive,
  scrolled
}: {
  children: React.ReactNode;
  to: string;
  isActive: boolean;
  scrolled: boolean;
}) => {
  return (
    <Link 
      to={to} 
      className={`relative font-medium transition-all duration-500 group hover:scale-105 ${
        scrolled 
          ? 'px-4 py-2 text-sm' 
          : 'px-6 py-3'
      } ${
        isActive 
          ? scrolled 
            ? 'text-[#d15739]' 
            : 'text-white' 
          : scrolled 
            ? 'text-[#d15739] hover:text-[#9c3c24]' 
            : 'text-white hover:text-yellow-200'
      }`}
    >
      <span className="relative z-10 flex items-center">
        {children}
      </span>
      {/* Línea naranja debajo para elemento activo */}
      {isActive && (
        <div className={`absolute bottom-0 left-0 w-full h-1 transition-all duration-300 ${
          scrolled ? 'bg-[#d15739]' : 'bg-orange-400'
        }`} />
      )}
      {/* Línea naranja debajo para hover en elementos no activos */}
      {!isActive && (
        <div className={`absolute bottom-0 left-0 w-0 h-1 transition-all duration-300 group-hover:w-full ${
          scrolled ? 'bg-[#d15739]' : 'bg-orange-400'
        }`} />
      )}
    </Link>
  );
};

// Mobile Navigation Link
const MobileNavLink = ({
  children,
  to,
  isActive,
  scrolled,
  onClick
}: {
  children: React.ReactNode;
  to: string;
  isActive: boolean;
  scrolled: boolean;
  onClick: () => void;
}) => {
  return (
    <Link 
      to={to} 
      className={`relative block py-3 px-4 rounded-xl my-1 transition-all duration-300 hover:scale-105 group ${
        isActive 
          ? scrolled 
            ? 'text-[#d15739]' 
            : 'text-white' 
          : scrolled 
            ? 'text-[#d15739] hover:text-[#9c3c24]' 
            : 'text-white hover:text-yellow-200'
      }`} 
      onClick={onClick}
    >
      <span className="relative z-10">
        {children}
      </span>
      {/* Línea naranja debajo para elemento activo */}
      {isActive && (
        <div className={`absolute bottom-1 left-4 right-4 h-1 transition-all duration-300 ${
          scrolled ? 'bg-[#d15739]' : 'bg-orange-400'
        }`} />
      )}
      {/* Línea naranja debajo para hover en elementos no activos */}
      {!isActive && (
        <div className={`absolute bottom-1 left-4 right-4 w-0 h-1 transition-all duration-300 group-hover:w-full ${
          scrolled ? 'bg-[#d15739]' : 'bg-orange-400'
        }`} />
      )}
    </Link>
  );
};