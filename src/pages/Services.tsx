import React from 'react';
import { Printer, BookMarked, Copy, Smartphone, Image, Scan, FileText, FileBadge, CreditCard, Package, Award, ArrowRight, Clock } from 'lucide-react';
import { ServiceCard } from '../components/ServiceCard';
import { ScrollAnimate } from '../components/ScrollAnimate';

export const Services = () => {
  const services = [{
    icon: <Printer className="text-[#d15739]" size={48} />,
    title: 'Impresiones',
    description: 'Impresiones en blanco y negro o color, fotos, stickers, tarjetas.'
  }, {
    icon: <BookMarked className="text-[#d15739]" size={48} />,
    title: 'Encuadernaciones',
    description: 'Encuadernaciones para todo tipo de documentos, libros, A4 y portfolios para nivel inicial.'
  }, {
    icon: <Copy className="text-[#d15739]" size={48} />,
    title: 'Fotocopias',
    description: 'Servicio de fotocopias rápido y de alta calidad en diferentes tamaños.'
  }, {
    icon: <Smartphone className="text-[#d15739]" size={48} />,
    title: 'Recarga de Celulares',
    description: 'Recarga de saldo para todas las compañías telefónicas del país.'
  }, {
    icon: <Image className="text-[#d15739]" size={48} />,
    title: 'Impresión de Fotos y archivos digitales',
    description: 'Impresión de fotografías y archivos.'
  }, {
    icon: <Scan className="text-[#d15739]" size={48} />,
    title: 'Escaneo de Documentos',
    description: 'Digitalización de documentos físicos con envío por correo electrónico.'
  }, {
    icon: <FileText className="text-[#d15739]" size={48} />,
    title: 'Diseño de Documentos',
    description: 'Asistencia en el diseño y formato de documentos personales o empresariales.'
  }, {
    icon: <FileBadge className="text-[#d15739]" size={48} />,
    title: 'Plastificado',
    description: 'Servicio de plastificado para proteger documentos importantes.'
  },{
    icon: <CreditCard className="text-[#d15739]" size={48} />,
    title: 'Pago con Tarjeta',
    description: 'Aceptamos todas las tarjetas de crédito y débito para tu comodidad.'
  }, {
    icon: <Package className="text-[#d15739]" size={48} />,
    title: 'Empaquetado de regalos',
    description: 'Llevate ese regalo que andas buscando.'
  }];

  return (
    <div className="pt-20 pb-16 overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#d15739] via-[#eb833e] to-[#d15739] overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute inset-0 overflow-hidden">
          <ScrollAnimate animation="scale" delay={0.1}>
            <div className="absolute top-10 left-10 w-16 h-16 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
          </ScrollAnimate>
          <ScrollAnimate animation="scale" delay={0.2}>
            <div className="absolute top-32 right-20 w-12 h-12 bg-white/5 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          </ScrollAnimate>
          <ScrollAnimate animation="scale" delay={0.3}>
            <div className="absolute bottom-20 left-1/4 w-8 h-8 bg-white/15 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
          </ScrollAnimate>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <ScrollAnimate animation="up" delay={0.1}>
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6 border border-white/30">
                <Award size={20} />
                <span className="text-sm font-medium">Servicios para la Comunidad</span>
              </div>
            </ScrollAnimate>
            
            <ScrollAnimate animation="fade" delay={0.2}>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in tracking-tight">
                Nuestros Servicios
              </h1>
            </ScrollAnimate>
            
            <ScrollAnimate animation="fade" delay={0.3}>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay">
                Servicios básicos de impresión y encuadernación para ayudarte con tus proyectos
              </p>
            </ScrollAnimate>

            <ScrollAnimate animation="fade" delay={0.4}>
              <div className="flex flex-wrap justify-center items-center gap-6 mb-10 animate-fade-in-delay">
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Clock size={20} />
                  <span className="text-sm">Atención rápida</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-sm">Precios accesibles</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-sm">Atención personalizada</span>
                </div>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </section>

      {/* Servicios Grid */}
      <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50">
        <div className="container mx-auto px-4">
          <ScrollAnimate animation="fade" delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#d15739] mb-6 animate-fade-in">
                Te ayudamos con todo
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-delay">
                Desde impresiones hasta encuadernaciones, tenemos los servicios que necesitás
              </p>
            </div>
          </ScrollAnimate>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ScrollAnimate 
                key={index} 
                animation={index % 4 === 0 ? 'left' : index % 4 === 3 ? 'right' : 'fade'} 
                delay={0.1 + (index * 0.1)}
              >
                <div className="group hover-lift">
                  <ServiceCard 
                    icon={service.icon} 
                    title={service.title} 
                    description={service.description}
                    showActionButton={false}
                  />
                </div>
              </ScrollAnimate>
            ))}
          </div>

          {/* Información Adicional */}
          <ScrollAnimate animation="fade" delay={0.5}>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollAnimate animation="left" delay={0.6}>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 text-center hover-lift border border-orange-100">
                  <div className="bg-[#d15739]/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Clock size={24} className="text-[#d15739]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#d15739] mb-2">Horarios Flexibles</h3>
                  <p className="text-gray-600">Lun-Vie: 8-20hs | Sáb: 8-17hs</p>
                </div>
              </ScrollAnimate>
              
              <ScrollAnimate animation="fade" delay={0.7}>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 text-center hover-lift border border-orange-100">
                  <div className="bg-[#d15739]/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <CreditCard size={24} className="text-[#d15739]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#d15739] mb-2">Múltiples Formas de Pago</h3>
                  <p className="text-gray-600">Efectivo, tarjetas y transferencias</p>
                </div>
              </ScrollAnimate>
              
              <ScrollAnimate animation="right" delay={0.8}>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 text-center hover-lift border border-orange-100">
                  <div className="bg-[#d15739]/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Smartphone size={24} className="text-[#d15739]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#d15739] mb-2">Consultas por WhatsApp</h3>
                  <p className="text-gray-600">Te respondemos rápido</p>
                </div>
              </ScrollAnimate>
            </div>
          </ScrollAnimate>

          {/* Call to Action */}
          <ScrollAnimate animation="up" delay={0.9}>
            <div className="text-center mt-16">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 max-w-2xl mx-auto border border-orange-100">
                <h3 className="text-2xl font-bold text-[#d15739] mb-4">
                  ¿Necesitás algo específico?
                </h3>
                <p className="text-gray-600 mb-6">
                  Consultanos y te decimos si lo podemos hacer o te recomendamos la mejor opción
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="https://wa.me/59898130459"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center space-x-2 bg-gradient-to-r from-[#d15739] to-[#eb833e] hover:from-[#eb833e] hover:to-[#d15739] text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
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
    </div>
  );
};