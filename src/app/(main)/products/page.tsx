import { getProducts } from "@/actions/products";
import { IProduct } from "@/app/types/product";
import ProductCard from "@/components/ProductCard";
import SearchForm from "@/components/SearchForm";
// import { products } from "@/constants/products";

export default async function Products() {
  const { products } = await getProducts();
  return (
    <section>
      <h1 className="text-center text-4xl my-8">Products Page</h1>
      <SearchForm />
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 my-6">
        {products.map((product: IProduct) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </section>
  );
}
