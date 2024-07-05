import { createContext, Dispatch, SetStateAction } from "react";
import { ProductType } from "@/components/products/ProductCard";

type CartContextType = {
    cart: ProductType[];
    setCart: Dispatch<SetStateAction<[] | ProductType[]>>
}

const CartContext = createContext<CartContextType>({
    cart:[], setCart: ()=> null
})

export default CartContext;