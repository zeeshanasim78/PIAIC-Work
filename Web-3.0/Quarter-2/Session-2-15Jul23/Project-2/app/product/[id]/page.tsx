import { getAllProds } from "@/lib/getAllProds";
import React from "react";

export default function page({ params }: { params: { id: number } }) {
  const data = getAllProds();
  const [product] = data.filter((item) => item.id == params.id);

  return (
    <div>
      <h1>{product.name}</h1>
      <h1> {product.price}</h1>
    </div>
  );
}
