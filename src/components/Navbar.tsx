import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MapPin, Phone, Clock, ChevronDown, Sparkles } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [topBarVisible, setTopBarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      // Hide top bar only when scrolling down and past 100px
      if (currentScrollY > 100 && currentScrollY > lastScrollY) {
        setTopBarVisible(false);
      } else {
        setTopBarVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-500">
      {/* Top Bar with Contact Info */}
      <div className={`bg-gradient-to-r from-[#9c3c24] to-[#d15739] text-white transition-all duration-500 overflow-hidden backdrop-blur-sm ${
        topBarVisible ? 'max-h-12 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-12 text-sm">
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center group hover:scale-105 transition-transform duration-300">
                <MapPin size={14} className="mr-2 group-hover:text-yellow-200 transition-colors" />
                <span className="group-hover:text-yellow-200 transition-colors">Franco Segarra 340, Tacuarembó</span>
              </div>
              <div className="flex items-center group hover:scale-105 transition-transform duration-300">
                <Phone size={14} className="mr-2 group-hover:text-yellow-200 transition-colors" />
                <span className="group-hover:text-yellow-200 transition-colors">098 130 459 / 463 27828</span>
              </div>
            </div>
            <div className="flex items-center group hover:scale-105 transition-transform duration-300">
              <Clock size={14} className="mr-2 group-hover:text-yellow-200 transition-colors" />
              <span className="group-hover:text-yellow-200 transition-colors">Lun-Vie: 8-20hs | Sáb: 8-17hs</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`transition-all duration-500 backdrop-blur-md ${
        scrolled 
          ? 'bg-white/95 text-[#d15739] shadow-xl py-3 border-b border-gray-100' 
          : 'bg-gradient-to-r from-[#eb833e] to-[#d15739] text-white py-4'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link 
              to="/" 
              className={`text-2xl md:text-3xl font-bold tracking-wider transition-all duration-500 group hover:scale-105 ${
                scrolled ? 'text-[#d15739]' : 'text-white'
              }`}
            >
              <div className="flex items-center">
                <Sparkles size={24} className={`mr-2 group-hover:rotate-180 transition-transform duration-500 ${
                  scrolled ? 'text-[#eb833e]' : 'text-yellow-200'
                }`} />
                <span>Papelería Abril</span>
                <span className={`ml-2 text-sm md:text-base italic font-dancing transition-all duration-500 ${
                  scrolled ? 'text-[#eb833e]' : 'text-yellow-200'
                }`}>
                  tacuarembó
                </span>
              </div>
            </Link>

            {/* Mobile menu button */}
            <button 
              className={`md:hidden transition-all duration-300 hover:scale-110 p-2 rounded-lg ${
                scrolled 
                  ? 'text-[#d15739] hover:bg-[#d15739]/10' 
                  : 'text-white hover:bg-white/20'
              }`} 
              onClick={() => setIsOpen(!isOpen)} 
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
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
      className={`relative px-6 py-3 rounded-full font-medium transition-all duration-500 group overflow-hidden hover:scale-105 ${
        isActive 
          ? scrolled 
            ? 'text-white bg-gradient-to-r from-[#d15739] to-[#eb833e] shadow-lg' 
            : 'text-[#d15739] bg-white shadow-lg' 
          : scrolled 
            ? 'text-[#d15739] hover:text-[#9c3c24] hover:bg-[#d15739]/10' 
            : 'text-white hover:text-yellow-200 hover:bg-white/20'
      }`}
    >
      <span className="relative z-10 flex items-center">
        {children}
      </span>
      {!isActive && (
        <div className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
          scrolled ? 'bg-[#d15739]' : 'bg-yellow-200'
        }`} />
      )}
      {!isActive && (
        <span className={`absolute bottom-0 left-0 w-full h-0 ${
          scrolled ? 'bg-[#d15739]/10' : 'bg-white/20'
        } transition-all duration-300 group-hover:h-full -z-0`} />
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
      className={`block py-3 px-4 rounded-xl my-1 transition-all duration-300 hover:scale-105 ${
        isActive 
          ? scrolled 
            ? 'bg-gradient-to-r from-[#d15739] to-[#eb833e] text-white shadow-lg' 
            : 'bg-white text-[#d15739] shadow-lg' 
          : scrolled 
            ? 'text-[#d15739] hover:bg-[#d15739]/10' 
            : 'text-white hover:bg-white/20'
      }`} 
      onClick={onClick}
    >
      {children}
    </Link>
  );
};