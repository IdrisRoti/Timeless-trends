'use client';

import CartItems from '@/components/cart/CartItems';

export default function page() {

  return (
    <div className="mt-[9rem] max-w-[1440px] mx-auto px-9">
      <h1 className="text-black text-4xl font-semibold">Shopping Cart</h1>
      <CartItems />
    </div>
  );
}
