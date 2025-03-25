import React, { useContext } from 'react';
import products from './products.json' // Import your product data
import { ProductCard } from './CartItemCard';
import { CartContext, CartProvider } from './CartContext';
import { CartSummery } from './CartSummery';

export const CartPage = () => {

    const { cartProduct, handleAddCartProduct, handleRemoveCartProduct } = useContext(CartContext);
    // console.log(cartProduct.map((item)=> item.price))
    // console.log(cartProduct)

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Our Products</h1>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            {/* Cart Summary (optional) */}
            {/* <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
                <div className="items grid grid-cols-5 gap-5 ">
                    {cartProduct.map((cartItem) => {
                        return (
                            <div key={cartItem.id} className='flex gap-2 items-center w-auto '>
                                <button className='text-xl font-bold cursor-pointer' onClick={() => handleRemoveCartProduct(cartItem)}> - </button>
                                <span>
                                    {cartItem.name} (Qty: {cartItem.quantity})
                                </span>
                                <button className='text-xl font-bold cursor-pointer' onClick={() => handleAddCartProduct(cartItem)}> + </button>
                            </div>
                        )
                    })}
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-gray-600">{cartProduct.length} items</span>
                    <span className="font-bold text-lg">
                        Total: ${cartProduct.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}
                    </span>
                </div>
                <button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded">
                    Proceed to Checkout
                </button>
            </div> */}


            <CartSummery />
            
        </div>
    );
};

