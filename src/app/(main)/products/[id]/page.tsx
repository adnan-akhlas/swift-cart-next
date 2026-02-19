import Modal from "@/components/Modal";
import ProductCard from "@/components/ProductCard";
import { products } from "@/constants/products";

export default function Product() {
  return (
    <div>
      <Modal isOpen={true}>
        <ProductCard product={products[0]} />
      </Modal>
    </div>
  );
}
