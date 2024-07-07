import Image from 'next/image';
import Link from 'next/link';

export default function PaymentInfo() {
  return (
    <section className='md:col-span-4 bg-[#E5E6EA] max-h-fit  pb-2'>
      <h2 className='font-semibold pt-4 pb-2.5 px-5 text-4xl text-[#333]'>
        Payment Info
      </h2>
      <div className='bg-black/30 h-[1px]' />
      {/* card type */}
      <p className='mt-3 ml-5 mb-2 text-sm sm:text-base md:text-lg'>
        Card Type
      </p>
      <div className='ml-6 flex items-center justify-center sm:justify-start lg:justify-center gap-8 mb-[4.7rem]'>
        <div className='w-[3.15rem] aspect-square bg-white border border-black/30 flex items-center justify-center'>
          <Image
            src='/mastercard.png'
            width={30}
            height={24}
            alt='mastercard'
          />
        </div>
        <div className='w-[3.15rem] aspect-square bg-white border border-black/30 flex items-center justify-center'>
          <Image src='/paypal.png' width={20} height={24} alt='paypal' />
        </div>
        <div className='w-[3.15rem] aspect-square bg-white border border-black/30 flex items-center justify-center'>
          <Image src='/visa.png' width={25} height={16} alt='visa' />
        </div>
      </div>
      {/* card name */}
      <div>
        <p className='color-[#333] ml-6 mb-3 text-sm sm:text-base md:text-lg'>
          Cardholder Name
        </p>
        <div className='mb-4 px-6'>
          <input className='h-10 w-full p-2' type='text' value='Jackson Eddy' />
        </div>
      </div>
      {/* card number */}
      <div>
        <p className='color-[#333] ml-6 mb-3 text-sm sm:text-base md:text-lg'>
          Cardholder Number
        </p>
        <div className='px-6 mb-4'>
          <input
            className='h-10 w-full p-2'
            type='text'
            value='1111 2222 1431 1431'
          />
        </div>
      </div>
      
      <div className='flex items-center px-6 justify-between gap-4 md:gap-8'>
        {/* expiration date */}
        <div className='flex flex-col'>
          <label className='color-[#333] mb-3 text-sm sm:text-base md:text-lg'>
            Expiration Date
          </label>
          <div className=''>
            <input className='h-10 p-2 block' type='text' value='12/07/26' />
          </div>
        </div>
        {/* CVV */}
        <div className='flex flex-col'>
          <label className='mb-3 text-sm sm:text-base md:text-lg'>CVV</label>

          <div className=''>
            <input className='h-10 p-2 block w-full' type='text' value='456' />
          </div>
        </div>
      </div>
      <div className='bg-black/30 h-[1px] mt-[4.5rem]' />
      <div className='mt-5 mb-[1.88rem] px-4 w-full'>
        <Link
          href='/checkout'
          className='block font-medium text-lg text-center bg-black text-white uppercase w-full p-2.5'
        >
          Pay $176.7
        </Link>
      </div>
    </section>
  );
}
