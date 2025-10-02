import { BookOpen, Pencil, FolderOpen, Backpack, Palette, Gift, Scissors, Paperclip, BookText, SquarePen, Briefcase, Star, ArrowRight } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { ScrollAnimate } from '../components/ScrollAnimate';
import { BackButton } from '../components/BackButton';
import { ScrollToTopButton } from '../components/ScrollToTopButton';
import slider3 from '../assets/slider3.jpg';

export const Products = () => {
  const products = [{
    icon: <BookOpen className="text-[#d15739]" size={48} />,
    title: 'Cuadernos',
    description: 'Gran variedad de cuadernos y cuadernolas para todos los niveles educativos, personalizados, tapa dura, cuadriculado, doble raya.'
  }, {
    icon: <Pencil className="text-[#d15739]" size={48} />,
    title: 'Útiles Escolares',
    description: 'Lápices, bolígrafos, marcadores, blocks dibujo 1/4 1/8 A3, gomas, cascolas, cartucheras.'
  }, {
    icon: <FolderOpen className="text-[#d15739]" size={48} />,
    title: 'Artículos de Oficina',
    description: 'Carpetas, hojas, sobres, clips, cintas, carpetas, grapadoras, perforadoras y todo tipo de accesorios.'
  }, {
    icon: <Backpack className="text-[#d15739]" size={48} />,
    title: 'Mochilas',
    description: 'Mochilas de calidad para niños, adolescentes y adultos, carteras, billeteras y más.'
  }, {
    icon: <Palette className="text-[#d15739]" size={48} />,
    title: 'Artículos de Arte',
    description: 'Pinturas, pinceles, lienzos, goma eva, TNT, lápices de dibujo y tablas, pintura acrílica y acuarelas.'
  }, {
    icon: <Gift className="text-[#d15739]" size={48} />,
    title: 'Regalos y juguetes',
    description: 'Joyas en AQ, relojes, peluches Labubu, naipes, jenga, pelotas, juegos encastre, mesa para todas las edades, dinosaurios, autos, pelotas.'
  }, {
    icon: <Scissors className="text-[#d15739]" size={48} />,
    title: 'Manualidades',
    description: 'Materiales para manualidades y proyectos escolares, papel TNT, cartulinas.'
  }, {
    icon: <Paperclip className="text-[#d15739]" size={48} />,
    title: 'Accesorios',
    description: 'Accesorios variados para personalizar tus útiles y pertenencias, llaveros, perfumes, monederos, riñoneras, ruanas.'
  }, {
    icon: <BookText className="text-[#d15739]" size={48} />,
    title: 'Libros',
    description: 'Libros de texto, cuentos, para colorear y más.'
  },  {
    icon: <SquarePen className="text-[#d15739]" size={48} />,
    title: 'Calculadoras',
    description: 'Calculadoras científicas y básicas para estudiantes y profesionales.'
  }, {
    icon: <Briefcase className="text-[#d15739]" size={48} />,
    title: 'Juguetes Educativos',
    description: 'Juguetes que combinan diversión y aprendizaje para todas las edades.'
  }];

  return (
    <div 
      className="pt-20 pb-16 overflow-hidden min-h-screen"
      style={{
        backgroundImage: `url(${slider3})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* JSON-LD: ItemList de categorías del catálogo */}
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Catálogo de categorías',
          itemListElement: products.map((p, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            name: p.title,
            url: 'https://abrilpapeleria.com/productos'
          }))
        })}
      </script>
      {/* Overlay con gradiente para mejor legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/40"></div>
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-6 left-6 z-30">
          <BackButton />
        </div>
        {/* Elementos decorativos */}
        <div className="absolute inset-0 overflow-hidden">
          <ScrollAnimate animation="scale" delay={0.1}>
            <div className="absolute top-10 left-10 w-16 h-16 bg-white/25 rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
          </ScrollAnimate>
          <ScrollAnimate animation="scale" delay={0.2}>
            <div className="absolute top-32 right-20 w-12 h-12 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          </ScrollAnimate>
          <ScrollAnimate animation="scale" delay={0.3}>
            <div className="absolute bottom-20 left-1/4 w-8 h-8 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
          </ScrollAnimate>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <ScrollAnimate animation="up" delay={0.1}>
              <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-md px-6 py-2 rounded-full mb-6 border border-white/50 shadow-lg">
                <Star size={20} className="text-[#d15739]" />
                <span className="text-sm font-medium text-gray-800">Catálogo Completo</span>
              </div>
            </ScrollAnimate>
            
            <ScrollAnimate animation="fade" delay={0.2}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in tracking-tight">
                Nuestros Productos
              </h1>
            </ScrollAnimate>
            
            <ScrollAnimate animation="fade" delay={0.3}>
              <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay">
                Encontrá todo lo que necesitás para la escuela, oficina y más. 
                Productos de calidad a precios accesibles para toda la familia.
              </p>
            </ScrollAnimate>

            <ScrollAnimate animation="fade" delay={0.4}>
              <div className="flex flex-wrap justify-center items-center gap-6 mb-10 animate-fade-in-delay">
                <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/50">
                  <span className="text-sm text-gray-800 font-medium">+100 productos</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/50">
                  <span className="text-sm text-gray-800 font-medium">Precios accesibles</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/50">
                  <span className="text-sm text-gray-800 font-medium">Atención personalizada</span>
                </div>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </section>

      {/* Productos Grid */}
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: `url(${slider3})`,
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay para mejor legibilidad */}
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 relative z-10">
          <ScrollAnimate animation="fade" delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#d15739] mb-6 animate-fade-in">
                Todo lo que necesitás
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-delay">
                Desde útiles escolares hasta artículos de oficina, tenemos todo para vos
              </p>
            </div>
          </ScrollAnimate>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {products.map((product, index) => (
              <ScrollAnimate 
                key={index} 
                animation={index % 4 === 0 ? 'left' : index % 4 === 3 ? 'right' : 'fade'} 
                delay={0.1 + (index * 0.1)}
              >
                <div className="group hover-lift">
                  <ProductCard 
                    icon={product.icon} 
                    title={product.title} 
                    description={product.description}
                    showActionButton={false}
                  />
                </div>
              </ScrollAnimate>
            ))}
          </div>

          {/* Call to Action */}
          <ScrollAnimate animation="up" delay={0.5}>
            <div className="text-center mt-16">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg p-8 max-w-2xl mx-auto border border-orange-100">
                <h3 className="text-2xl font-bold text-[#d15739] mb-4">
                  ¿No encontrás lo que buscás?
                </h3>
                <p className="text-gray-600 mb-6">
                  Vení a visitarnos y te ayudamos a encontrar exactamente lo que necesitás
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="https://wa.me/59898130459"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center space-x-2 bg-gradient-to-r from-[#eb833e] to-[#d15739] hover:from-[#d15739] hover:to-[#eb833e] text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <span>Consultar por WhatsApp</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="tel:098130459"
                    className="group inline-flex items-center space-x-2 bg-transparent border-2 border-[#d15739] text-[#d15739] font-bold py-3 px-6 rounded-full hover:bg-[#d15739] hover:text-white transition-all duration-300 hover:scale-105"
                  >
                    <span>Llamar ahora</span>
                  </a>
                </div>
              </div>
            </div>
          </ScrollAnimate>
        </div>
      </section>
      <ScrollToTopButton />
    </div>
  );
};