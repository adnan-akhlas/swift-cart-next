import { getProduct } from "@/actions/products";
import { IProduct } from "@/app/types/product";
import Image from "next/image";

interface ProductProps {
  params: Promise<{ id: string }>;
}

export default async function Product({ params }: ProductProps) {
  const { id } = await params;
  const product = (await getProduct(id)) as IProduct;
  const discountedPrice = (
    product.price *
    (1 - product.discountPercentage / 100)
  ).toFixed(2);

  return (
    <div className="max-w-7xl mx-auto p-6 lg:p-12 font-sans text-slate-900">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left: Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-square relative overflow-hidden rounded-2xl bg-slate-100 border border-slate-200">
            <Image
              src={product.thumbnail}
              alt={product.title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-pink-100 text-pink-700 text-xs font-bold uppercase rounded-full">
              {product.category}
            </span>
            <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-mono rounded-full">
              {product.sku}
            </span>
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="flex flex-col justify-center">
          <p className="text-sm text-slate-500 font-medium mb-1">
            {product.brand}
          </p>
          <h1 className="text-4xl font-bold mb-4 tracking-tight">
            {product.title}
          </h1>

          <div className="flex items-center gap-4 mb-6">
            <span className="text-3xl font-semibold text-emerald-600">
              ${discountedPrice}
            </span>
            <span className="text-xl text-slate-400 line-through">
              ${product.price}
            </span>
            <span className="text-sm font-bold text-orange-500">
              -{product.discountPercentage}%
            </span>
          </div>

          <p className="text-slate-600 leading-relaxed mb-8">
            {product.description}
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
            <p className="text-amber-800 text-sm font-medium">
              💡 <strong>Bulk Order Only:</strong> This item requires a minimum
              order of {product.minimumOrderQuantity} units.
            </p>
          </div>

          <div className="space-y-4 mb-8">
            <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-colors">
              Add to Cart (Min. {product.minimumOrderQuantity})
            </button>
            <p className="text-center text-xs text-slate-400 italic">
              {product.shippingInformation} • {product.availabilityStatus}
            </p>
          </div>

          <hr className="border-slate-200 mb-8" />

          {/* Specs Table */}
          <div className="grid grid-cols-2 gap-y-4 text-sm">
            <div>
              <p className="text-slate-400">Weight</p>
              <p className="font-semibold">{product.weight}g</p>
            </div>
            <div>
              <p className="text-slate-400">Warranty</p>
              <p className="font-semibold">{product.warrantyInformation}</p>
            </div>
            <div>
              <p className="text-slate-400">Dimensions</p>
              <p className="font-semibold">
                {product.dimensions.width} x {product.dimensions.height} x{" "}
                {product.dimensions.depth} mm
              </p>
            </div>
            <div>
              <p className="text-slate-400">Returns</p>
              <p className="font-semibold text-red-500">
                {product.returnPolicy}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <section className="mt-20 border-t border-slate-100 pt-12">
        <h2 className="text-2xl font-bold mb-8">
          Community Reviews ({product.rating} ⭐)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {product.reviews.map((review, index) => (
            <div key={index} className="p-6 bg-slate-50 rounded-xl">
              <div className="flex text-amber-400 mb-2">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-slate-700 italic mb-4">{review.comment}</p>
              <p className="text-xs font-bold text-slate-900">
                {review.reviewerName}
              </p>
              <p className="text-[10px] text-slate-400">
                {new Date(review.date).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
