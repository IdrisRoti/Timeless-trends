import CartItems from '@/components/cart/CartItems';
import PaymentInfo from '@/components/checkout/PaymentInfo';

export default function page() {
  return (
    <div className='mt-[9.3rem] max-w-[1440px] mx-auto px-5 md:px-9'>
      <h1 className='text-black text-4xl font-semibold'>Shopping Cart</h1>
      <div className='mt-[2rem] max-lg:space-y-6 lg:grid grid-cols-12 gap-14 items-center justify-between mx-auto relative'>
        <CartItems  isCart={false}/>
        <PaymentInfo />
      </div>
    </div>
  );
}
