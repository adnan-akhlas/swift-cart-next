import { IProduct } from "@/app/types/product";
import {
  IconBookmark as BrandIcon,
  IconShoppingCartPlus as CartIcon,
} from "@tabler/icons-react";

// Using a partial/specific interface based on your previous data
interface ProductCardProps {
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  tags: string[];
  thumbnail: string;
  brand: string;
}

export default function ProductCard({ product }: { product: IProduct }) {
  const {
    title,
    description,
    price,
    discountPercentage,
    tags,
    thumbnail,
    brand,
  } = product;
  // Logic for discount calculation
  const discountPrice = price * (1 - discountPercentage / 100);

  return (
    <div className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      {/* Image Header */}
      <div className="relative aspect-square overflow-hidden bg-gray-50 p-6">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
        />
        {/* Discount Badge */}
        <div className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-sm">
          -{discountPercentage}%
        </div>
      </div>

      {/* Content Body */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Brand & Tags */}
        <div className="flex items-center gap-2 mb-2">
          <span className="flex items-center gap-1 text-[10px] font-bold text-indigo-600 uppercase tracking-tight bg-indigo-50 px-2 py-0.5 rounded">
            <BrandIcon size={12} stroke={3} />
            {brand}
          </span>
          <span className="text-gray-300">|</span>
          <div className="flex gap-1 overflow-hidden">
            {tags?.map((tag) => (
              <span key={tag} className="text-[10px] text-gray-500 font-medium">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Title & Description */}
        <h3 className="text-gray-800 font-bold text-lg line-clamp-1 group-hover:text-indigo-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-500 text-sm line-clamp-2 mt-1 leading-relaxed">
          {description}
        </p>

        {/* Price Section */}
        <div className="mt-auto pt-5 flex items-end justify-between">
          <div className="flex flex-col">
            <span className="text-gray-400 text-sm line-through leading-none mb-1">
              ${price?.toFixed(2)}
            </span>
            <span className="text-2xl font-black text-gray-900 leading-none">
              ${discountPrice?.toFixed(2)}
            </span>
          </div>

          <button
            type="button"
            className="bg-gray-900 hover:bg-indigo-600 text-white p-3 rounded-xl transition-all duration-300 active:scale-90 shadow-md"
            aria-label="Add to cart"
          >
            <CartIcon size={20} stroke={2} />
          </button>
        </div>
      </div>
    </div>
  );
}
