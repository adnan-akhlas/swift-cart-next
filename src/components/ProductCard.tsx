import { IProduct } from "@/app/types/product";
import {
  IconBookmark as BrandIcon,
  IconShoppingCartPlus as CartIcon,
  IconEye as ViewIcon,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }: { product: IProduct }) {
  const {
    id,
    title,
    description,
    price,
    discountPercentage,
    tags,
    thumbnail,
    brand,
  } = product;

  const discountPrice = price * (1 - discountPercentage / 100);

  return (
    <div className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      {/* Image Header */}
      <div className="relative aspect-square overflow-hidden bg-gray-50 p-6">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
        />
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
            {tags?.slice(0, 2).map((tag) => (
              <span key={tag} className="text-[10px] text-gray-500 font-medium">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        <h3 className="text-gray-800 font-bold text-lg line-clamp-1 group-hover:text-indigo-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-500 text-sm line-clamp-2 mt-1 leading-relaxed">
          {description}
        </p>

        {/* Price & Actions Section */}
        <div className="mt-auto pt-5">
          <div className="flex items-end justify-between mb-4">
            <div className="flex flex-col">
              <span className="text-gray-400 text-sm line-through leading-none mb-1">
                ${price?.toFixed(2)}
              </span>
              <span className="text-2xl font-black text-gray-900 leading-none">
                ${discountPrice?.toFixed(2)}
              </span>
            </div>
          </div>

          {/* Equal Action Buttons */}
          <div className="flex gap-2 w-full">
            <Link
              className="flex-1 flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-700 font-bold py-3 px-2 rounded-xl transition-all duration-300 active:scale-95 border border-gray-200 shadow-sm"
              href={`/products/${id}`}
            >
              <ViewIcon size={18} stroke={2} />
              <span className="text-xs sm:text-sm">Details</span>
            </Link>

            <button
              type="button"
              className="flex-1 flex items-center justify-center gap-2 bg-gray-900 hover:bg-indigo-600 text-white font-bold py-3 px-2 rounded-xl transition-all duration-300 active:scale-95 shadow-md"
            >
              <CartIcon size={18} stroke={2} />
              <span className="text-xs sm:text-sm">Add</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
