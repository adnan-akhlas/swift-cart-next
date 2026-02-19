"use server";

export async function getProducts(q: string) {
  let uri: string;
  if (q) {
    uri = `https://dummyjson.com/products/search?q=${q}`;
  } else {
    uri = "https://dummyjson.com/products?limit=10";
  }
  const response = await fetch(uri);
  return response.json();
}

export async function getProduct(id: string) {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  return response.json();
}
