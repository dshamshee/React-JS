import { createContext, useState } from "react";
import products from "./products.json";
import { useEffect } from "react";

export const CartContext = createContext();


export const CartProvider = ({ children }) => {

    const [quantity, setQuantity] = useState(0);

    const [cartProduct, setCartProduct] = useState([]);

    const handleAddCartProduct = (item) => {
        setCartProduct((prevProducts) => {
            // Check if the product already exists in the cart
            const existingProduct = prevProducts.find(
                (product) => product.id === item.id
            );

            if (existingProduct) {
                // If it exists, increase its quantity
                return prevProducts.map((product) =>
                    product.id === item.id
                        ? { ...product, quantity: (product.quantity || 1) + 1 }
                        : product
                );
            } else {
                // If it doesn't exist, add it with quantity = 1
                return [...prevProducts, { ...item, quantity: 1 }];
            }
        });
    };


    // Function to decrease quantity (or remove if quantity is 1)
    const handleRemoveCartProduct = (item) => {
        setCartProduct((prevProducts) => {
            const existingProduct = prevProducts.find(
                (product) => product.id === item.id
            );

            if (existingProduct.quantity > 1) {
                // Decrease quantity
                return prevProducts.map((product) =>
                    product.id === item.id
                        ? { ...product, quantity: product.quantity - 1 }
                        : product
                );
            } else {
                // Remove the item if quantity is 1
                return prevProducts.filter((product) => product.id !== item.id);
            }
        });
    };


    const updateQuantity = () => {
        setQuantity((prevQuantity) => (prevQuantity + 1))
    }

    return <CartContext.Provider value={{ cartProduct, handleAddCartProduct, handleRemoveCartProduct }}>
        {children}
    </CartContext.Provider>
}