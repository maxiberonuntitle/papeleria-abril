import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MapPin, Phone, Clock, ChevronDown } from 'lucide-react';
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
  const isActive = path => {
    return location.pathname === path;
  };
  return <header className="fixed top-0 w-full z-50 transition-all duration-300">
      {/* Top Bar with Contact Info */}
      <div className={`bg-[#9c3c24] text-white transition-all duration-300 overflow-hidden ${topBarVisible ? 'max-h-12 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-12 text-sm">
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center">
                <MapPin size={14} className="mr-1" />
                <span>Franco Segarra 340, Tacuarembó</span>
              </div>
              <div className="flex items-center">
                <Phone size={14} className="mr-1" />
                <span>098 130 459 / 463 27828</span>
              </div>
            </div>
            <div className="flex items-center">
              <Clock size={14} className="mr-1" />
              <span>Lun-Vie: 8-20hs | Sáb: 8-17hs</span>
            </div>
          </div>
        </div>
      </div>
      {/* Main Navigation */}
      <nav className={`transition-all duration-300 ${scrolled ? 'bg-white text-[#d15739] shadow-lg py-2' : 'bg-gradient-to-r from-[#eb833e] to-[#d15739] text-white py-3'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link to="/" className={`text-2xl md:text-3xl font-bold tracking-wider transition-all duration-300 ${scrolled ? 'text-[#d15739]' : 'text-white'}`}>
              Papelería Abril
              <span className={`ml-2 text-sm md:text-base italic font-dancing transition-all duration-300 ${scrolled ? 'text-[#eb833e]' : 'text-white'}`}>
                tacuarembó
              </span>
            </Link>
            {/* Mobile menu button */}
            <button className={`md:hidden transition-colors ${scrolled ? 'text-[#d15739]' : 'text-white'}`} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            {/* Desktop menu */}
            <div className="hidden md:flex space-x-1">
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
          <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 opacity-100 mt-3 pb-3' : 'max-h-0 opacity-0 mt-0 pb-0'}`}>
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
      </nav>
    </header>;
};
// Desktop Navigation Link
const NavLink = ({
  children,
  to,
  isActive,
  scrolled
}) => {
  return <Link to={to} className={`relative px-4 py-2 rounded-full font-medium transition-all duration-300 group overflow-hidden ${isActive ? scrolled ? 'text-white bg-[#d15739]' : 'text-[#d15739] bg-white' : scrolled ? 'text-[#d15739] hover:text-[#9c3c24]' : 'text-white hover:text-orange-100'}`}>
      <span className="relative z-10">{children}</span>
      {!isActive && <span className={`absolute bottom-0 left-0 w-full h-0 ${scrolled ? 'bg-orange-100' : 'bg-white bg-opacity-20'} transition-all duration-300 group-hover:h-full -z-0`}></span>}
    </Link>;
};
// Mobile Navigation Link
const MobileNavLink = ({
  children,
  to,
  isActive,
  scrolled,
  onClick
}) => {
  return <Link to={to} className={`block py-2 px-3 rounded my-1 transition-all duration-200 ${isActive ? scrolled ? 'bg-[#d15739] text-white' : 'bg-white text-[#d15739]' : scrolled ? 'text-[#d15739] hover:bg-orange-100' : 'text-white hover:bg-white hover:bg-opacity-20'}`} onClick={onClick}>
      {children}
    </Link>;
};