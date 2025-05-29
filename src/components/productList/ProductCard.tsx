import React from "react";

type ProductCardProps = {
  title: string;
  price: string;
  imageUrl: string;
};

const ProductCard: React.FC<ProductCardProps> = ({ title, price, imageUrl }) => {
  return (
    <a href="" className="group block overflow-hidden">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="relative bg-white pt-3">
        <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
          {title}
        </h3>
        <p className="mt-2">
          <span className="sr-only">Regular Price</span>
          <span className="tracking-wider text-gray-900">{price}</span>
        </p>
      </div>
    </a>
  );
};

export default ProductCard;
