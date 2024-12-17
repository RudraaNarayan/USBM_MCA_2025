/* eslint-disable no-unused-vars */
import React from 'react';
import { Carousel } from 'react-bootstrap';

function CustomCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src="carousel-image1.jpg" alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="carousel-image2.jpg" alt="Second slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default CustomCarousel;
