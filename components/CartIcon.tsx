"use client"

import CartContext from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

export default function CartIcon() {
    const {cart} = useContext(CartContext)
    return (
        <Link className='relative' href='/cart'>
        <Image src='/shopping-cart.png' alt='logoUp' width={32} height={32} />
        <span className="font-semibold w-5 h-5 rounded-full bg-black absolute top-0 right-0 flex justify-center items-center">{cart.length}</span>
      </Link>
    );
  }