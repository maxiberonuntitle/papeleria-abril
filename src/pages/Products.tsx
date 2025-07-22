import React from 'react';
import { BookOpen, Pencil, FolderOpen, Backpack, Palette, Gift, Scissors, Paperclip, BookText, Newspaper, SquarePen, Briefcase } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
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
  return <div className="pt-20 pb-16 mt-12">
    <div className="container mx-auto px-4 mt-4">
      <div className="bg-gradient-to-r from-[#eb833e] to-[#d15739] text-white py-12 px-6 rounded-2xl mb-12 shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Nuestros Productos
        </h1>
        <p className="text-lg md:text-xl text-center max-w-3xl mx-auto">
          En Papelería Abril encontrarás todo lo que necesitas para la
          escuela, oficina y más. Contamos con una amplia variedad de
          productos de calidad a precios accesibles.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product, index) => <ProductCard key={index} icon={product.icon} title={product.title} description={product.description} />)}
      </div>
    </div>
  </div>;
};