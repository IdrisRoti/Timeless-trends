import Image from 'next/image';
import Link from 'next/link';

export default function CartIcon() {
  return (
    <Link className='relative hover:scale-75 transition duration-300' href='/cart'>
      <Image src='/shopping-cart.png' alt='logoUp' width={32} height={32} />
      <span className='sr-only'>View cart</span>
      <span className='font-semibold w-5 h-5 rounded-full bg-black absolute top-0 right-0 flex justify-center items-center'>
        3
      </span>
    </Link>
  );
}
