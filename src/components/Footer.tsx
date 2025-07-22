import { Link, useNavigate } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
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
        className="flex items-center group hover:text-orange-200 transition-colors"
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
      className="w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-40 transition-all transform hover:-translate-y-1"
    >
      {icon}
    </a>
  );
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#9c3c24] to-[#d15739] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 relative inline-block">
              Papelería Abril
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-white"></span>
            </h3>
            <p className="mb-4 text-orange-100">
              Tu papelería de confianza en Tacuarembó. Ofrecemos una amplia
              variedad de productos escolares, de oficina y servicios de
              impresión y fotocopias.
            </p>

            {/* Redes sociales si lo deseas activar */}
            {/* <div className="flex space-x-3 mt-6">
              <SocialIcon icon={<Facebook size={18} />} />
              <SocialIcon icon={<Instagram size={18} />} />
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Linkedin size={18} />} />
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 relative inline-block">
              Enlaces Rápidos
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-white"></span>
            </h3>
            <ul className="space-y-2">
              <FooterLink to="/">Inicio</FooterLink>
              <FooterLink to="/productos">Productos</FooterLink>
              <FooterLink to="/servicios">Servicios</FooterLink>
              <FooterLink to="/contacto">Contacto</FooterLink>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 relative inline-block">
              Contacto
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-white"></span>
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>Franco Segarra 340, Tacuarembó, Uruguay</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span>098 130 459 / 463 27828</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <a
                  href="mailto:patylaspiur@outlook.com"
                  className="hover:text-orange-200 transition-colors"
                >
                  patylaspiur@outlook.com
                </a>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="mr-2 mt-1 flex-shrink-0" />
                <div>
                  <div>Lunes a Viernes: 8 a 20 hs</div>
                  <div>Sábados: 8 a 17 hs</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-orange-800 py-6">
        <div className="container mx-auto px-4 flex flex-col items-start">
          <p className="text-left">
            © {currentYear} Papelería Abril. Todos los derechos reservados.
          </p>
          <p className="text-left mt-2">
            Desarrollado por{' '}
            <a
              href="https://www.linkedin.com/in/maxi-beron-laspiur/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#41e95d] italic hover:underline font-medium"
            >
              Maxi
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
