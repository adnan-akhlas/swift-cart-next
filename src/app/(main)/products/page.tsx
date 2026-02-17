import { IProduct } from "@/app/types/product";
import ProductCard from "@/components/ProductCard";
import { products } from "@/constants/products";

export default function Products() {
  return (
    <section>
      <h1 className="text-center text-4xl my-8">Products Page</h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 my-6">
        {products.map((product: IProduct) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
