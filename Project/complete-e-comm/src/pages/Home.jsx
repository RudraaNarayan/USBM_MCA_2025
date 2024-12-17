/* eslint-disable no-unused-vars */
import React from 'react';
import Carousel from '../components/Carousel';
import ProductCard from '../components/ProductCard';

function Home() {
  return (
    <div>
      <Carousel />
      <h2>Featured Products</h2>
      <div className="row">
        <ProductCard title="Product 1" price="$100" />
        <ProductCard title="Product 2" price="$150" />
        <ProductCard title="Product 3" price="$200" />
      </div>
    </div>
  );
}

export default Home;
