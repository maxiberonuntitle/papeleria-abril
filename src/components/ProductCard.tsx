import React from 'react';
import { Link } from 'react-router-dom';
interface ProductCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}
export const ProductCard = ({
  icon,
  title,
  description
}: ProductCardProps) => {
  return <Link to="/productos" className="block">
      <div className="bg-white rounded-xl shadow-md hover:shadow-lg hover:shadow-orange-200 transform transition-all hover:-translate-y-2 hover:scale-105 p-6 h-full">
        <div className="flex flex-col items-center text-center">
          <div className="text-4xl mb-4">{icon}</div>
          <h3 className="text-[#9c3c24] text-xl font-bold mb-2">{title}</h3>
          <p className="text-[#9c3c24]">{description}</p>
        </div>
      </div>
    </Link>;
};