/* eslint-disable no-unused-vars */
// src/App.js
import React from 'react';
import { CartProvider } from './CartContext';
import ProductList from './ProductList';
import Cart from './Cart';

const App = () => {
  return (
    <CartProvider>
      <div className="app">
        <h1>My E-Commerce Store</h1>
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
  );
};

export default App;
