import { createContext, useState } from "react";
import products from "./products.json";

export const CartContext = createContext();


export const CartProvider = ({ children }) => {

    const [quantity, setQuantity] = useState(0);

    const [CartItem, setCartItem] = useState([]);

    const updateQuantity = () => {
        setQuantity((prevQuantity)=> (prevQuantity + 1))
    }

    return <CartContext.Provider value={{ products, updateQuantity }}>
        {children}
    </CartContext.Provider>
}