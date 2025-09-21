import { Link } from 'react-router-dom';
import { HeroSlider } from '../components/HeroSlider';
import { ProductCard } from '../components/ProductCard';
import { ServiceCard } from '../components/ServiceCard';
import { ContactInfo } from '../components/ContactInfo';
import { ScrollAnimate } from '../components/ScrollAnimate';
import { ScrollToTopButton } from '../components/ScrollToTopButton';
import {
  BookOpen,
  Pencil,
  FolderOpen,
  Backpack,
  Printer,
  BookMarked,
  Copy,
  FileText,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

// ✅ Importa todas las imágenes automáticamente desde assets
const imageModules = import.meta.glob('../assets/slider*.jpg', { eager: true });

// ✅ Extrae las rutas de los módulos en orden alfabético
const sliderImages = Object.keys(imageModules)
  .sort()
  .map((key) => (imageModules[key] as { default: string }).default);

// ✅ Importar imágenes específicas para fondos de secciones
import slider2 from '../assets/slider2.jpg';
import slider5 from '../assets/slider5.jpg';
import slider8 from '../assets/slider8.jpg';
import slider12 from '../assets/slider12.jpg';

export const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Slider */}
      <div className="pt-16">
        <HeroSlider images={sliderImages} />
      </div>

      {/* Sección de Bienvenida con Efectos */}
      <section 
        className="relative py-12 sm:py-16 md:py-20 overflow-hidden"
        style={{
          backgroundImage: `url(${slider2})`,
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Fondo fijo para móviles */}
        <div 
          className="fixed inset-0 w-full h-full fixed-bg-mobile"
          style={{
            backgroundImage: `url(${slider2})`,
          }}
        ></div>
        {/* Overlay de color para bienvenida */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/15 to-black/25"></div>
        
        {/* Elementos decorativos flotantes optimizados */}
        <div className="absolute inset-0 overflow-hidden">
          <ScrollAnimate animation="bounce" delay={0.1}>
            <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
          </ScrollAnimate>
          <ScrollAnimate animation="float" delay={0.2}>
            <div className="absolute top-32 right-20 w-16 h-16 bg-white/5 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          </ScrollAnimate>
          <ScrollAnimate animation="zoom" delay={0.3}>
            <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/15 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          </ScrollAnimate>
          <ScrollAnimate animation="slide" delay={0.4}>
            <div className="absolute bottom-10 right-1/3 w-24 h-24 bg-white/8 rounded-full animate-pulse" style={{ animationDelay: '0.25s' }} />
          </ScrollAnimate>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <ScrollAnimate animation="bounce" delay={0.1}>
              <div className="inline-flex items-center space-x-2 bg-white/30 backdrop-blur-md px-6 py-2 rounded-full mb-6 border border-white/40 hover:scale-105 transition-transform duration-300 shadow-lg">
                <Sparkles size={20} className="animate-spin" style={{ animationDuration: '2s' }} />
                <span className="text-sm font-medium">Tu papelería de confianza</span>
              </div>
            </ScrollAnimate>
            
            <ScrollAnimate animation="fade" delay={0.2}>
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 animate-fade-in tracking-tight">
                Bienvenidos a
                <span className="block text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-dancing text-yellow-200 drop-shadow-2xl">
                  Papelería Abril
                </span>
              </h1>
            </ScrollAnimate>
            
            <ScrollAnimate animation="fade" delay={0.3}>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay">
                Tu destino de confianza para todos los útiles escolares, artículos de oficina y servicios de impresión en Tacuarembó
              </p>
            </ScrollAnimate>


            <ScrollAnimate animation="up" delay={1.1}>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                <Link
                  to="/productos"
                  className="group inline-flex items-center space-x-2 bg-white/90 backdrop-blur-md text-[#d15739] font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white border border-white/30"
                >
                  <span>Explorar Productos</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contacto"
                  className="group inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md border-2 border-white/50 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full hover:bg-white/30 hover:text-white transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <span>Contactar</span>
                  <Phone size={20} className="group-hover:scale-110 transition-transform" />
                </Link>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </section>

      {/* Productos Section con Efectos Modernos */}
      <section 
        id="productos" 
        className="relative py-20"
        style={{
          backgroundImage: `url(${slider2})`,
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Fondo fijo para móviles */}
        <div 
          className="fixed inset-0 w-full h-full fixed-bg-mobile"
          style={{
            backgroundImage: `url(${slider2})`,
          }}
        ></div>
        {/* Overlay de color para productos */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-amber-500/15 to-orange-600/20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="bg-white/60 backdrop-blur-md px-8 py-6 rounded-2xl border border-white/30 shadow-xl mb-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#d15739] mb-6">
                Nuestros Productos
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Descubre nuestra amplia selección de productos escolares y de oficina con los mejores precios
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-12">
            <div className="group hover-lift">
              <ProductCard
                icon={<BookOpen className="text-[#d15739] group-hover:scale-110 transition-transform duration-300" size={48} />}
                title="Cuadernos"
                description="Gran variedad de cuadernos y cuadernolas de todas las marcas."
              />
            </div>
            <div className="group hover-lift">
              <ProductCard
                icon={<Pencil className="text-[#d15739] group-hover:scale-110 transition-transform duration-300" size={48} />}
                title="Útiles Escolares"
                description="Todo lo necesario para el año lectivo con calidad premium."
              />
            </div>
            <div className="group hover-lift">
              <ProductCard
                icon={<FolderOpen className="text-[#d15739] group-hover:scale-110 transition-transform duration-300" size={48} />}
                title="Artículos de Oficina"
                description="Carpetas, hojas, sobres y más para tu oficina."
              />
            </div>
            <div className="group hover-lift">
              <ProductCard
                icon={<Backpack className="text-[#d15739] group-hover:scale-110 transition-transform duration-300" size={48} />}
                title="Mochilas y Regalos"
                description="Mochilas, juguetes y regalos para todas las edades."
              />
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/productos"
              className="group inline-flex items-center space-x-3 bg-gradient-to-r from-[#eb833e] to-[#d15739] hover:from-[#d15739] hover:to-[#eb833e] text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <span>Ver todos los productos</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Servicios Section con Diseño Moderno */}
      <section
        id="servicios"
        className="relative py-20 overflow-hidden"
        style={{
          backgroundImage: `url(${slider2})`,
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Fondo fijo para móviles */}
        <div 
          className="fixed inset-0 w-full h-full fixed-bg-mobile"
          style={{
            backgroundImage: `url(${slider2})`,
          }}
        ></div>
        {/* Overlay de color para servicios */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/25 via-rose-400/20 to-pink-600/25"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <ScrollAnimate animation="fade" delay={0.3}>
            <div className="text-center mb-16">
              <div className="bg-white/60 backdrop-blur-md px-8 py-6 rounded-2xl border border-white/30 shadow-xl">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#d15739] mb-6 animate-fade-in">
                  Nuestros Servicios
                </h2>
              </div>
            </div>
          </ScrollAnimate>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-12">
            <ScrollAnimate animation="left" delay={0.5}>
              <div className="group hover-lift">
                <ServiceCard
                  icon={<Printer className="text-[#d15739] group-hover:scale-110 transition-transform duration-300" size={48} />}
                  title="Impresiones"
                  description="Blanco y negro y color, fotografía de alta calidad."
                />
              </div>
            </ScrollAnimate>
            <ScrollAnimate animation="fade" delay={0.7}>
              <div className="group hover-lift">
                <ServiceCard
                  icon={<BookMarked className="text-[#d15739] group-hover:scale-110 transition-transform duration-300" size={48} />}
                  title="Encuadernaciones"
                  description="Encuadernación profesional para todo tipo de documentos."
                />
              </div>
            </ScrollAnimate>
            <ScrollAnimate animation="fade" delay={0.9}>
              <div className="group hover-lift">
                <ServiceCard
                  icon={<Copy className="text-[#d15739] group-hover:scale-110 transition-transform duration-300" size={48} />}
                  title="Fotocopias"
                  description="Fotocopias rápidas y de excelente calidad."
                />
              </div>
            </ScrollAnimate>
            <ScrollAnimate animation="right" delay={1.1}>
              <div className="group hover-lift">
                <ServiceCard
                  icon={<FileText className="text-[#d15739] group-hover:scale-110 transition-transform duration-300" size={48} />}
                  title="Diseño de Documentos"
                  description="Asistencia en el diseño y formato de documentos personales o empresariales."
                />
              </div>
            </ScrollAnimate>
          </div>

          <ScrollAnimate animation="up" delay={1.3}>
            <div className="text-center">
              <Link
                to="/servicios"
                className="group inline-flex items-center space-x-3 bg-gradient-to-r from-[#d15739] to-[#eb833e] hover:from-[#eb833e] hover:to-[#d15739] text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <span>Ver todos los servicios</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollAnimate>
        </div>
      </section>

      {/* Map Section */}
      <section 
        className="py-20"
        style={{
          backgroundImage: `url(${slider2})`,
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Fondo fijo para móviles */}
        <div 
          className="fixed inset-0 w-full h-full fixed-bg-mobile"
          style={{
            backgroundImage: `url(${slider2})`,
          }}
        ></div>
        {/* Overlay de color para mapa */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 via-indigo-500/10 to-blue-600/15"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="bg-white/60 backdrop-blur-md px-8 py-6 rounded-2xl border border-white/30 shadow-xl mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-[#d15739] mb-6">
                Nuestra Ubicación
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Encontrá nuestra papelería en el corazón de Tacuarembó. 
                Te esperamos para brindarte el mejor servicio.
              </p>
            </div>
          </div>
          
          <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-500 border border-white/30">
            <div className="aspect-video w-full md:w-1/2 mx-auto rounded-xl overflow-hidden shadow-lg">
              <iframe 
                className="w-full h-full" 
                src="https://www.google.com/maps?q=Franco+Segarra+340,+Tacuarembó,+Uruguay&output=embed" 
                title="Ubicación de Papelería Abril" 
                loading="lazy"
                allowFullScreen
              />
            </div>
            <div className="mt-6 text-center">
              <p className="text-lg text-gray-700 font-medium">
                Franco Segarra 340, Tacuarembó, Uruguay
              </p>
              <p className="text-gray-600 mt-2">
                Lun-Vie: 8-20hs | Sáb: 8-17hs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactInfo />
      <ScrollToTopButton />
    </div>
  );
};
