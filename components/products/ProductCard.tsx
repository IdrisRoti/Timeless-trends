"use client";

import CartContext from "@/context/CartContext";
import Image from "next/image";
import { useContext } from "react";

export type ProductType = {
  id: number;
  image: string;
  subcat: string;
  color: string;
  instock: number;
  name: string;
};

export default function ProductCard({ product }: { product: ProductType }) {
  const { cart, setCart } = useContext(CartContext);

  const handleAddToCart = (productData: ProductType) => {
    console.log(productData, cart);
  };

  return (
    <article
      className="grid-cols-subgrid"
    >
      <div className="bg-[#F0F1F6] w-full aspect-square flex justify-center items-center border border-black/30 shadow-sm">
        <Image src={product.image} alt="" width={130} height={173} />
      </div>
      <div className="flex items-start gap-[0.625rem] py-3">
        <p>{product.subcat}</p>
        <div className="w-4 h-4" style={{ background: product.color }} />
        <span className="font-medium text-sm">+{product.instock}</span>
      </div>
      <h2 className="font-bold text-lg line-clamp-1">{product.name}</h2>
      <button
      onClick={()=> handleAddToCart(product)}
        className="p-[0.625rem] text-center bg-black font-medium w-full text-white mt-9 hover:opacity-60 transition duration-500"
      >
        ADD TO CART
      </button>
    </article>
  );
}
