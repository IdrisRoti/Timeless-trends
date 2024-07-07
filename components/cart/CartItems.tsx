import { cartData } from '@/data';
import Image from 'next/image';
import ContinueShoppingBtn from '../ContinueShoppingBtn';

export default function CartItems({isCart}:{isCart?:boolean}) {
  return (
    <section className='md:col-span-8 md:max-h-[44rem]'>
      <div className='px-6 pt-7 pb-3 hidden md:block bg-[#E5E6EA]'>
        <h2 className='text-2xl font-medium '>Select Items</h2>
      </div>
      <div className='bg-black/30 h-[1.5px] hidden md:block' />
      <div className='pb-2 pt-9 px-2 md:px-6 bg-[#E5E6EA]'>
        {        
          cartData.map((cartItem, i) => {
            return (
              <div key={i} className='mb-9'>
                <article className='flex items-center py-3 px-2'>
                  {/* check icon */}
                  <Image
                    className='hidden lg:block bg-black mr-2 md:mr-14'
                    width={16}
                    height={16}
                    src='/check.png'
                    alt='checkbox'
                  />
                  {/* product image */}
                  <div className='  px-3.5 md:px-7 py-2.5 md:py-5 border border-black/40 bg-white mr-2 md:mr-3.5 '>
                    <div className='relative w-7 md:w-[3.5rem] h-9 md:h-[4.7rem]'>
                      <Image
                        className='object-cover'
                        src={cartItem.image}
                        alt=''
                        fill
                      />
                    </div>
                  </div>
                  {/* product details */}
                  <div className='mr-2 md:mr-14'>
                    <p className='mb-2 text-xs md:text-base'>
                      {cartItem.subcat}
                    </p>
                    <h2 className='text-sm md:text-[0.57rem] font-bold mb-2.5 md:mb-5'>
                      {cartItem.name}
                    </h2>
                    <button
                      className='text-[#E21A1A] md:text-base text-sm'
                    >
                      Remove
                    </button>
                  </div>
                  {/* increase and decrease buttons */}
                  <div className={`gap-2 ${isCart ? "flex": "hidden" } items-center`}>
                    <div
                      className='w-6 h-6 cursor-pointer hover:opacity-70'
                    >
                      <Image src={'/minus.png'} alt='increase button' width={24} height={24} />
                    </div>
                    <div className='w-6 h-6 flex items-center justify-center text-lg bg-white'>
                      1
                    </div>
                    <div
                      className='w-6 h-6  cursor-pointer hover:opacity-70'
                    >
                      <Image src={'/plus.png'} alt='decrease button' width={24} height={24} />
                    </div>
                  </div>
                  {/* product price */}
                  <div className='ml-4 md:ml-[6.5rem] text-sm lg:text-base font-semibold md:text-base'>
                    $58.90
                  </div>
                  {/* product price * quantity  total */}
                  <div className={`${isCart ? "hidden md:block" : "block"} text-sm lg:text-base ml-4 md:ml-[6.5rem] font-semibold`}>$58.90</div>
                </article>
                <div className='bg-black/30 h-[1px]' />
              </div>
            );
          })
        }
      </div>
      <ContinueShoppingBtn />
    </section>
  );
}
