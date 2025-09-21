import { Link, useNavigate } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Heart,
  Sparkles,
} from 'lucide-react';
import type { ReactNode } from 'react';

type FooterLinkProps = {
  to: string;
  children: ReactNode;
};

type SocialIconProps = {
  icon: ReactNode;
};

// ✅ Enlace que también hace scroll al top
const FooterLink = ({ to, children }: FooterLinkProps) => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(to);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <li>
      <a
        href={to}
        onClick={handleClick}
        className="flex items-center group hover:text-yellow-200 transition-all duration-300 hover:translate-x-1"
      >
        <ArrowRight
          size={16}
          className="mr-2 opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0"
        />
        {children}
      </a>
    </li>
  );
};

// Redes sociales (a futuro)
const SocialIcon = ({ icon }: SocialIconProps) => {
  return (
    <a
      href="#"
      className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/40 transition-all transform hover:-translate-y-1 hover:scale-110 backdrop-blur-sm"
    >
      {icon}
    </a>
  );
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#9c3c24] via-[#d15739] to-[#9c3c24] text-white relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/5 rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
        <div className="absolute top-32 right-20 w-16 h-16 bg-white/3 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/7 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="group">
            <h3 className="text-2xl font-bold mb-6 relative inline-block">
              <div className="flex items-center">
                <Sparkles size={24} className="mr-2 group-hover:rotate-180 transition-transform duration-500" />
                Papelería Abril
              </div>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-200 to-transparent rounded-full"></span>
            </h3>
            <p className="mb-6 text-orange-100 leading-relaxed group-hover:text-white transition-colors duration-300">
              Tu papelería de confianza en Tacuarembó. Ofrecemos una amplia
              variedad de productos escolares, de oficina y servicios de
              impresión y fotocopias para toda la familia.
            </p>

            {/* Redes sociales si lo deseas activar */}
            {/* <div className="flex space-x-4 mt-6">
              <SocialIcon icon={<Facebook size={18} />} />
              <SocialIcon icon={<Instagram size={18} />} />
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Linkedin size={18} />} />
            </div> */}
          </div>

          {/* Quick Links */}
          <div className="group">
            <h3 className="text-2xl font-bold mb-6 relative inline-block">
              Enlaces Rápidos
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-200 to-transparent rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              <FooterLink to="/">Inicio</FooterLink>
              <FooterLink to="/productos">Productos</FooterLink>
              <FooterLink to="/servicios">Servicios</FooterLink>
              <FooterLink to="/contacto">Contacto</FooterLink>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="group">
            <h3 className="text-2xl font-bold mb-6 relative inline-block">
              Contacto
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-200 to-transparent rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start group/item hover:scale-105 transition-transform duration-300">
                <MapPin size={20} className="mr-3 mt-1 flex-shrink-0 group-hover/item:text-yellow-200 transition-colors" />
                <span className="group-hover/item:text-yellow-200 transition-colors">Franco Segarra 340, Tacuarembó, Uruguay</span>
              </li>
              <li className="flex items-center group/item hover:scale-105 transition-transform duration-300">
                <Phone size={20} className="mr-3 flex-shrink-0 group-hover/item:text-yellow-200 transition-colors" />
                <span className="group-hover/item:text-yellow-200 transition-colors">098 130 459 / 463 27828</span>
              </li>
              <li className="flex items-center group/item hover:scale-105 transition-transform duration-300">
                <Mail size={20} className="mr-3 flex-shrink-0 group-hover/item:text-yellow-200 transition-colors" />
                <a
                  href="mailto:patylaspiur@outlook.com"
                  className="hover:text-yellow-200 transition-colors"
                >
                  patylaspiur@outlook.com
                </a>
              </li>
              <li className="flex items-start group/item hover:scale-105 transition-transform duration-300">
                <Clock size={20} className="mr-3 mt-1 flex-shrink-0 group-hover/item:text-yellow-200 transition-colors" />
                <div className="group-hover/item:text-yellow-200 transition-colors">
                  <div>Lunes a Viernes: 8 a 20 hs</div>
                  <div>Sábados: 8 a 17 hs</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Horarios y Servicios */}
          <div className="group">
            <h3 className="text-2xl font-bold mb-6 relative inline-block">
              Horarios
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-200 to-transparent rounded-full"></span>
            </h3>
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <h4 className="font-bold mb-2 text-yellow-200">Días de Semana</h4>
                <p className="text-sm">8:00 - 20:00 hs</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <h4 className="font-bold mb-2 text-yellow-200">Sábados</h4>
                <p className="text-sm">8:00 - 17:00 hs</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/20 py-8 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-center md:text-left">
              © {currentYear} Papelería Abril. Todos los derechos reservados.
            </p>
            <p className="text-center md:text-right flex items-center">
              Developed by{' '}
              <a
                href="https://maxisoluciones.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-200 italic hover:underline font-medium hover:text-white transition-colors duration-300 ml-1"
              >
                Maxi Soluciones Digitales
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
