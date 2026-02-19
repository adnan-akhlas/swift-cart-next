"use server";

export async function getProducts() {
  const response = await fetch("https://dummyjson.com/products?limit=10");
  return response.json();
}

export async function getProduct(id: string) {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  return response.json();
}
