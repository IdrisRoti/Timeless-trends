import Link from "next/link";

export default function OrderSummary() {
  return (
    <section className='md:col-span-4 bg-[#E5E6EA] max-h-fit pb-2'>
      <h2 className='font-semibold pt-4 pb-2.5 px-5 text-4xl'>Order Summary</h2>
      <div className='bg-black/30 h-[1px]' />
      {/* total price */}
      <div className='lg:w-[19rem] w-[80%] mx-auto flex py-4 px-5 items-center justify-between'>
        <p className='text-[#333] text-sm sm:text-base md:text-lg'>Total</p>
        <span className='font-semibold'>$58</span>
      </div>
      <div className='bg-black/30 h-[1px]' />
      {/* delivery fee */}
      <div className='lg:w-[19rem] w-[80%] mx-auto flex py-4 px-5 items-center justify-between'>
        <p className='text-[#333] text-sm sm:text-base md:text-lg'>Delivery fee</p>
        <span className='font-semibold'>$5</span>
      </div>
      <div className='bg-black/30 h-[1px]' />
      {/* shipping info */}
      <div className='px-10 mt-7 mb-6'>
        <h2 className='text-2xl font-bold mb-4'>Shipping info</h2>
        <p className='text-sm sm:text-base md:text-lg h-[11.65rem] max-lg:max-w-[60%] max-md:max-w-[80%] max-sm:max-w-[100%]'>
          Modern shipping containers revolutionized the global trade industry.
          Introduced in the 1950s, these standardized containers drastically
          reduced shipping times and costs
        </p>
      </div>
      <div className='bg-black/30 h-[1px]' />
      <div className="my-6 mb-[1.88rem] px-4 w-full">
        <Link href="/checkout" className="block font-medium text-lg text-center bg-black text-white uppercase w-full p-2.5 hover:opacity-80 duration-500">Check out</Link>
      </div>
    </section>
  );
}
