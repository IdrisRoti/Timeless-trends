import Image from 'next/image';
import Link from 'next/link';

export default function ContinueShoppingBtn() {
  return (
    <div className='flex items-center gap-2 mb-12 mt-4'>
      <Image src={'/angle-left.png'} alt="Continue shopping icon" width={24} height={24} />
      <Link className='text-lg font-bold' href='/'>
        Continue Shopping
      </Link>
    </div>
  );
}
