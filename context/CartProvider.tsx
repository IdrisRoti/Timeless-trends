'use client';

import { useState } from 'react';
import CartContext from './CartContext';
import { ProductType } from '@/components/products/ProductCard';

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  // get cart from localStorage if present
  const cartFromLocalStorage =
    typeof localStorage != 'undefined' && localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart')!)
      : [];

  const [cart, setCart] = useState<ProductType[] | []>(cartFromLocalStorage);

  const addToCart = (product: ProductType) => {
    let updatedCart;
    // check if product has been added to cart
    const inCart = cart.find((item) => item.id === product.id);

    if (inCart) {
      updatedCart = cart.map((cartItem) =>
        cartItem.id === product.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  };

  const removeFromCart = (id: number) => {
    let updatedCart;
    updatedCart = cart.filter((cartItem) => cartItem.id != id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  };

  const increaseQty = (id: number) => {
    let updatedCart;
    const itemInCart = cart.find((item) => item.id === id);
    if (itemInCart) {
      updatedCart = cart.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  };

  const decreaseQty = (id: number) => {
    let updatedCart;
    const itemInCart = cart.find((item) => item.id === id);
    if (itemInCart) {
      updatedCart = cart.map((cartItem) =>
        cartItem.id === id
          ? {
              ...cartItem,
              quantity: cartItem.quantity > 0 ? cartItem.quantity - 1 : 1,
            }
          : cartItem
      );
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  };
  
//   const getCartTotal = ()=>{
//     const total = cart.reduce((acc, currValue)=>{return acc + currValue.quantity * currValue.price}, 0)
//     return total;
//   }
  
  console.log('CART: ', cart);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseQty,
        decreaseQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
