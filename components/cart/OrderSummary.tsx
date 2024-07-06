import Image from 'next/image';
import Link from 'next/link';

export default function OrderSummary() {
  return (
    <section className='md:col-span-4 bg-[#E5E6EA] max-h-fit'>
        <h2 className='font-semibold py-4 px-5 text-4xl mb-3'>Order Summary</h2>
        <div className='bg-black/30 h-[1px]' />
        <div className='w-[19rem] mx-auto flex py-4 px-5 items-center justify-between'>
            <p className='text-[#333] text-lg'>Total</p>
            <span className='font-semibold'>$58</span>
        </div>
        <div className='bg-black/30 h-[1px]' />
        <div className='w-[19rem] mx-auto flex py-4 px-5 items-center justify-between'>
            <p className='text-[#333] text-lg'>Delivery fee</p>
            <span className='font-semibold'>$5</span>
        </div>
        <div className='bg-black/30 h-[1px]' />
        <div className='w-[24.3rem]'>
            
        </div>
    </section>
  );
}
