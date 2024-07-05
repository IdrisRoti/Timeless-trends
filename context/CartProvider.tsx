"use client"

import { useState } from "react"
import CartContext from "./CartContext"
import { ProductType } from "@/components/products/ProductCard"

const CartProvider = ({children}:{children: React.ReactNode})=>{
    const [cart, setCart]= useState<ProductType[] | []>([])
    return (
        <CartContext.Provider value={{cart, setCart}}>{children}</CartContext.Provider>
    )
}

export default CartProvider;