/* eslint-disable no-unused-vars */
// src/ProductList.js
import React from 'react';
import { useCart } from './CartContext';

const products = [
  { id: 1, name: 'Product 1', price: 20, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product 2', price: 30, image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Product 3', price: 40, image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Product 4', price: 50, image: 'https://via.placeholder.com/150' },
];

const ProductList = () => {
  const { addToCart } = useCart();

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
