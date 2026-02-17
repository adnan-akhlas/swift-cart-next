import { IProduct } from "@/app/types/product";
import {
  IconShoppingCartPlus as CartIcon,
  IconStar as StarIcon,
  IconEye as ViewIcon,
} from "@tabler/icons-react";

export default function ProductCard({ product }: { product: IProduct }) {
  const { image, category, rating, title, price } = product;

  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full group">
      {/* Product Image */}
      <div className="bg-gray-50 rounded-xl p-8 flex items-center justify-center relative overflow-hidden h-64">
        <img
          src={image}
          alt={title}
          className="h-full object-contain group-hover:scale-110 transition-transform duration-500 ease-in-out"
        />
      </div>

      {/* Info Body */}
      <div className="flex flex-col grow mt-5">
        <div className="flex items-center justify-between mb-3">
          <span className="bg-indigo-50 text-indigo-600 text-[11px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-lg">
            {category}
          </span>

          <div className="flex items-center text-sm font-medium text-gray-700 bg-gray-50 px-2 py-1 rounded-md">
            {/* Using Aliased Tabler Star Icon */}
            <StarIcon
              size={16}
              className="text-amber-400 fill-amber-400 mr-1"
            />
            <span>{rating?.rate}</span>
          </div>
        </div>

        <h3 className="font-bold text-gray-800 line-clamp-2 text-left h-12 leading-tight group-hover:text-indigo-600 transition-colors">
          {title}
        </h3>

        <div className="mt-auto pt-4">
          <div className="flex items-baseline gap-1 mb-4">
            <span className="text-sm font-semibold text-gray-400">$</span>
            <span className="text-2xl font-black text-gray-900 leading-none">
              {price?.toFixed(2)}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <button
              type="button"
              className="flex-1 border-2 border-gray-100 rounded-xl py-2 text-gray-600 hover:bg-gray-50 hover:border-gray-200 transition-all flex items-center justify-center gap-2 text-sm font-bold active:scale-95"
            >
              <ViewIcon size={18} stroke={2} />
              Details
            </button>

            <button
              type="button"
              className="flex-[1.5] bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl py-2 transition-all flex items-center justify-center gap-2 text-sm font-bold shadow-indigo-100 shadow-lg active:scale-95"
            >
              <CartIcon size={18} stroke={2} />
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
