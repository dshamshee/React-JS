import React, { useContext } from 'react';
import { CartContext } from './CartContext';

export const ProductCard = ({ product }) => {

    const {handleAddCartProduct} = useContext(CartContext);
    // console.log(cartProduct)

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
      <img 
        className="w-full h-48 object-cover" 
        src={product.image} 
        alt={product.name} 
      />
      <div className="px-6 py-4">
        <div className="flex justify-between items-start">
          <h2 className="font-bold text-xl mb-2">{product.name}</h2>
          <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-2.5 py-0.5 rounded">
            {product.category}
          </span>
        </div>
        <p className="text-gray-700 text-base mb-4">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
          onClick={()=> handleAddCartProduct(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

// Example usage with the first product:
// <ProductCard product={products[0]} />