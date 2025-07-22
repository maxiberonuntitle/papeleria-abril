import React from 'react';
import { Printer, BookMarked, Copy, Smartphone, Image, Scan, FileText, FileBadge, CreditCard, Package } from 'lucide-react';
import { ServiceCard } from '../components/ServiceCard';
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
  return <div className="pt-20 pb-16 mt-4">
      <div className="container mx-auto px-4 mt-12">
        <div className="bg-gradient-to-r from-[#eb833e] to-[#d15739] text-white py-12 px-6 rounded-2xl mb-12 shadow-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Nuestros Servicios
          </h1>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto">
            En Papelería Abril ofrecemos una amplia gama de servicios para
            satisfacer todas tus necesidades.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />)}
        </div>
      </div>
    </div>;
};