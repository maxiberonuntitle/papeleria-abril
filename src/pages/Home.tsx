import { Link } from 'react-router-dom';
import { HeroSlider } from '../components/HeroSlider';
import { ProductCard } from '../components/ProductCard';
import { ServiceCard } from '../components/ServiceCard';
import { ContactInfo } from '../components/ContactInfo';
import {
  BookOpen,
  Pencil,
  FolderOpen,
  Backpack,
  Printer,
  BookMarked,
  Copy,
  Smartphone,
} from 'lucide-react';

// ✅ Importa todas las imágenes automáticamente desde assets
const imageModules = import.meta.glob('../assets/slider*.jpg', { eager: true });

// ✅ Extrae las rutas de los módulos en orden alfabético
const sliderImages = Object.keys(imageModules)
  .sort()
  .map((key) => (imageModules[key] as { default: string }).default);

export const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Slider */}
      <HeroSlider images={sliderImages} />

      {/* Productos Section */}
      <section id="productos" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#d15739] text-center mb-12">
            Productos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProductCard
              icon={<BookOpen className="text-[#d15739]" size={48} />}
              title="Cuadernos"
              description="Gran variedad de cuadernos y cuadernolas."
            />
            <ProductCard
              icon={<Pencil className="text-[#d15739]" size={48} />}
              title="Útiles Escolares y Oficina"
              description="Todo lo necesario para el año lectivo."
            />
            <ProductCard
              icon={<FolderOpen className="text-[#d15739]" size={48} />}
              title="Artículos de Oficina"
              description="Carpetas, hojas, sobres y más."
            />
            <ProductCard
              icon={<Backpack className="text-[#d15739]" size={48} />}
              title="Mochilas, Juguetes y Regalos"
              description="Para todas las edades."
            />
          </div>
          <div className="text-center mt-10">
            <Link
              to="/productos"
              className="inline-block bg-[#eb833e] hover:bg-[#d15739] text-white font-bold py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all"
            >
              Ver todos los productos
            </Link>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section
        id="servicios"
        className="py-16 bg-white bg-opacity-90 bg-[url('https://img.freepik.com/free-vector/abstract-white-shapes-background_79603-1362.jpg?w=1380&t=st=1687452346~exp=1687452946~hmac=3de03c7f4bb4cf4cd2c0c77c2a546f1fc98af7ed6d1e9e81c98b8e3a1d0cca29')] bg-cover"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#d15739] text-center mb-12">
            Servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={<Printer className="text-[#d15739]" size={48} />}
              title="Impresiones"
              description="Blanco y negro y color, fotografía."
            />
            <ServiceCard
              icon={<BookMarked className="text-[#d15739]" size={48} />}
              title="Encuadernaciones"
              description="Para todo tipo de documentos."
            />
            <ServiceCard
              icon={<Copy className="text-[#d15739]" size={48} />}
              title="Fotocopias"
              description="Fotocopias rápidas y de calidad."
            />
            <ServiceCard
              icon={<Smartphone className="text-[#d15739]" size={48} />}
              title="Recarga de Celulares"
              description="Recarga de saldo para todas las compañías."
            />
          </div>
          <div className="text-center mt-10">
            <Link
              to="/servicios"
              className="inline-block bg-[#eb833e] hover:bg-[#d15739] text-white font-bold py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all"
            >
              Ver todos los servicios
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactInfo />
    </div>
  );
};
