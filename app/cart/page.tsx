'use client';

import CartItems from '@/components/cart/CartItems';
import OrderSummary from '@/components/cart/OrderSummary';
import ContinueShoppingBtn from '@/components/ContinueShoppingBtn';

export default function page() {
  return (
    <div className='mt-[9.3rem] max-w-[1440px] mx-auto px-9'>
      <h1 className='text-black text-4xl font-semibold'>Shopping Cart</h1>
      <div className='mt-[2rem] md:grid grid-cols-12 gap-14 justify-between mx-auto relative'>
        <CartItems />
      <OrderSummary />
      </div>
      <ContinueShoppingBtn />
    </div>
  );
}
