import Image from "next/image";

export type ProductType = {
  id: number;
  image: string;
  subcat: string;
  color: string;
  price: number;
  name: string;
  quantity?: number;
};

export default function ProductCard({ product }: { product: ProductType }) {
  return (
    <article
      className="grid-cols-subgrid"
    >
      <div className="bg-[#F0F1F6] w-full aspect-square flex justify-center items-center border border-black/30 shadow-sm">
        <Image src={product.image} alt="" width={130} height={173} />
      </div>
      <div className="flex text-sm md:text-base items-start gap-[0.625rem] py-3">
        <p>{product.subcat}</p>
        <div className="w-4 h-4" style={{ background: product.color }} />
        <span className="font-medium text-sm">${product.price}</span>
      </div>
      <h2 className="font-bold md:text-lg line-clamp-2">{product.name}</h2>
      <button
        className="p-[0.625rem] text-center bg-black font-medium w-full text-white mt-9 hover:opacity-60 transition duration-500"
      >
        ADD TO CART
      </button>
    </article>
  );
}
