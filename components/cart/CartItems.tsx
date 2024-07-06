import CartContext from '@/context/CartContext';
import Image from 'next/image';
import { useContext } from 'react';

export default function CartItems() {
  const { cart, increaseQty, decreaseQty, removeFromCart } = useContext(CartContext);

  return (
    <section className='md:col-span-8 bg-[#E5E6EA] py-28 px-6 md:max-h-[44rem] overflow-x-auto'>
      {cart.length > 0 ? (cart.map((cartItem) => {
        return (
          <div className='mb-9'>
            <article className='flex items-center py-3 px-2'>
              <div className='px-7 py-5 border border-black/40 bg-white mr-3.5 '>
                <Image
                  src={cartItem.image}
                  alt=''
                  width={56.25}
                  height={75.29}
                />
              </div>
              <div className='mr-14'>
                <p className='mb-2'>{cartItem.subcat}</p>
                <h2 className='text-lg font-bold mb-5'>{cartItem.name}</h2>
                <button onClick={()=>removeFromCart(cartItem.id)} className='text-[#E21A1A]'>Remove</button>
              </div>
              <div className='gap-2 flex items-center'>
                <div onClick={()=>decreaseQty(cartItem.id)} className='w-6 h-6 cursor-pointer hover:opacity-70'>
                  <Image src={'/minus.png'} alt='' width={24} height={24} />
                </div>
                <div className='w-6 h-6 flex items-center justify-center text-lg'>
                  {cartItem.quantity}
                </div>
                <div onClick={()=> increaseQty(cartItem.id)} className='w-6 h-6  cursor-pointer hover:opacity-70'>
                  <Image src={'/plus.png'} alt='' width={24} height={24} />
                </div>
              </div>
              <div className='ml-[6.5rem] font-semibold'>$58.90</div>
              <div className='ml-[6.5rem] font-semibold'>$58.90</div>
            </article>
            <div className='bg-black/30 h-[1px]' />
          </div>
        );
      })) :(
        <p>No items in Cart</p>
      )}
    </section>
  );
}
