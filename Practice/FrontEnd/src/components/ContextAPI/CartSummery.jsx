import { useContext } from "react";
import { CartContext } from "./CartContext";

export const CartSummery = () => {

    const { cartProduct, handleAddCartProduct, handleRemoveCartProduct } = useContext(CartContext);

    return (
        <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
            {cartProduct.length === 0 ? (
                <p className="text-gray-500">Your cart is empty</p>
            ) : (
                <>
                    <div className="space-y-4 mb-6">
                        {cartProduct.map((item) => (
                            <div key={item.id} className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                                <div className="flex items-center space-x-4">
                                    <img src={item.image} className="w-16 h-16 object-cover rounded" alt={item.name} />
                                    <div>
                                        <h3 className="font-medium">{item.name}</h3>
                                        <p className="text-gray-600">${item.price.toFixed(2)}</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <button
                                        onClick={() => handleRemoveCartProduct(item)}
                                        className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full cursor-pointer"
                                    >
                                        -
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button
                                        onClick={() => handleAddCartProduct(item)}
                                        className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full cursor-pointer"
                                    >
                                        +
                                    </button>
                                </div>
                                {/* <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="text-red-500 hover:text-red-700"
                                >
                                    Remove
                                </button> */}
                            </div>
                        ))}
                    </div>
                    <div className="border-t pt-4">
                        <div className="flex justify-between font-bold text-lg">
                            <span>Total:</span>
                            <span>
                                ${cartProduct.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}
                            </span>
                        </div>
                        <button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded">
                            Checkout
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}