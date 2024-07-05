'use client';

import CartContext from '@/context/CartContext';
import { useContext } from 'react';

export default function page() {
  const { cart } = useContext(CartContext);

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      {cart.map((cartItem) => (
        <div>
          {cartItem.name} {cartItem.quantity}
        </div>
      ))}
    </div>
  );
}
