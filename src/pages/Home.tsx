import { Link } from 'react-router-dom';
import { HeroSlider } from '../components/HeroSlider';
import { ProductCard } from '../components/ProductCard';
import { ServiceCard } from '../components/ServiceCard';
import { ContactInfo } from '../components/ContactInfo';
import { ScrollAnimate } from '../components/ScrollAnimate';
import {
  BookOpen,
  Pencil,
  FolderOpen,
  Backpack,
  Printer,
  BookMarked,
  Copy,
  Smartphone,
  Star,
  Award,
  Users,
  Clock,
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

export const Home = () => {
  return (
    <div className="pt-16 overflow-hidden">
      {/* Hero Slider */}
      <HeroSlider images={sliderImages} />

      {/* Sección de Bienvenida con Efectos */}
      <section className="relative py-20 bg-gradient-to-br from-[#d15739] via-[#eb833e] to-[#d15739] overflow-hidden">
        {/* Elementos decorativos flotantes */}
        <div className="absolute inset-0 overflow-hidden">
          <ScrollAnimate animation="scale" delay={0.2}>
            <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
          </ScrollAnimate>
          <ScrollAnimate animation="scale" delay={0.4}>
            <div className="absolute top-32 right-20 w-16 h-16 bg-white/5 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          </ScrollAnimate>
          <ScrollAnimate animation="scale" delay={0.6}>
            <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/15 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
          </ScrollAnimate>
          <ScrollAnimate animation="scale" delay={0.8}>
            <div className="absolute bottom-10 right-1/3 w-24 h-24 bg-white/8 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          </ScrollAnimate>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <ScrollAnimate animation="up" delay={0.3}>
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6 border border-white/30">
                <Sparkles size={20} />
                <span className="text-sm font-medium">Tu papelería de confianza</span>
              </div>
            </ScrollAnimate>
            
            <ScrollAnimate animation="fade" delay={0.5}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in tracking-tight">
                Bienvenidos a
                <span className="block text-6xl md:text-8xl font-dancing text-yellow-200 drop-shadow-2xl">
                  Papelería Abril
                </span>
              </h1>
            </ScrollAnimate>
            
            <ScrollAnimate animation="fade" delay={0.7}>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay">
                Tu destino de confianza para todos los útiles escolares, artículos de oficina y servicios de impresión en Tacuarembó
              </p>
            </ScrollAnimate>

            <ScrollAnimate animation="fade" delay={0.9}>
              <div className="flex flex-wrap justify-center items-center gap-6 mb-10 animate-fade-in-delay">
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Users size={20} />
                  <span className="text-sm">Clientes satisfechos</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Award size={20} />
                  <span className="text-sm">Calidad garantizada</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Clock size={20} />
                  <span className="text-sm">Atención rápida</span>
                </div>
              </div>
            </ScrollAnimate>

            <ScrollAnimate animation="up" delay={1.1}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/productos"
                  className="group inline-flex items-center space-x-2 bg-white text-[#d15739] font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-yellow-50"
                >
                  <span>Explorar Productos</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contacto"
                  className="group inline-flex items-center space-x-2 bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-[#d15739] transition-all duration-300 hover:scale-105"
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
      <section id="productos" className="relative py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50">
        
        <div className="container mx-auto px-4 relative z-10">
          <ScrollAnimate animation="fade" delay={0.3}>
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold text-[#d15739] mb-6 animate-fade-in">
                Nuestros Productos
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-delay">
                Descubre nuestra amplia selección de productos escolares y de oficina con los mejores precios
              </p>
            </div>
          </ScrollAnimate>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <ScrollAnimate animation="left" delay={0.5}>
              <div className="group hover-lift">
                <ProductCard
                  icon={<BookOpen className="text-[#d15739] group-hover:scale-110 transition-transform duration-300" size={48} />}
                  title="Cuadernos"
                  description="Gran variedad de cuadernos y cuadernolas de todas las marcas."
                />
              </div>
            </ScrollAnimate>
            <ScrollAnimate animation="fade" delay={0.7}>
              <div className="group hover-lift">
                <ProductCard
                  icon={<Pencil className="text-[#d15739] group-hover:scale-110 transition-transform duration-300" size={48} />}
                  title="Útiles Escolares"
                  description="Todo lo necesario para el año lectivo con calidad premium."
                />
              </div>
            </ScrollAnimate>
            <ScrollAnimate animation="fade" delay={0.9}>
              <div className="group hover-lift">
                <ProductCard
                  icon={<FolderOpen className="text-[#d15739] group-hover:scale-110 transition-transform duration-300" size={48} />}
                  title="Artículos de Oficina"
                  description="Carpetas, hojas, sobres y más para tu oficina."
                />
              </div>
            </ScrollAnimate>
            <ScrollAnimate animation="right" delay={1.1}>
              <div className="group hover-lift">
                <ProductCard
                  icon={<Backpack className="text-[#d15739] group-hover:scale-110 transition-transform duration-300" size={48} />}
                  title="Mochilas y Regalos"
                  description="Mochilas, juguetes y regalos para todas las edades."
                />
              </div>
            </ScrollAnimate>
          </div>

          <ScrollAnimate animation="up" delay={1.3}>
            <div className="text-center">
              <Link
                to="/productos"
                className="group inline-flex items-center space-x-3 bg-gradient-to-r from-[#eb833e] to-[#d15739] hover:from-[#d15739] hover:to-[#eb833e] text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <span>Ver todos los productos</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollAnimate>
        </div>
      </section>

      {/* Servicios Section con Diseño Moderno */}
      <section
        id="servicios"
        className="relative py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50 overflow-hidden"
      >
        
        <div className="container mx-auto px-4 relative z-10">
          <ScrollAnimate animation="fade" delay={0.3}>
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold text-[#d15739] mb-6 animate-fade-in">
                Nuestros Servicios
              </h2>
            </div>
          </ScrollAnimate>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
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
                  icon={<Smartphone className="text-[#d15739] group-hover:scale-110 transition-transform duration-300" size={48} />}
                  title="Recarga de Celulares"
                  description="Recarga de saldo para todas las compañías telefónicas."
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

      {/* Contact Section */}
      <ContactInfo />
    </div>
  );
};
