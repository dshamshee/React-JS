import React, { useState } from 'react';
import products from './products.json' // Import your product data
import { ProductCard } from './CartItemCard';

export const CartPage = () => {
    
    const [price, setPrice] = useState([]);

    console.log(typeof(price))
    
    
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
        <div className="flex justify-between items-center">
          <span className="text-gray-600">{products.length} items</span>
          <span className="font-bold text-lg">
            Total: ${products.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
          </span>
        </div>
        <button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded">
          Proceed to Checkout
        </button>
      </div> */}
    </div>
  );
};

