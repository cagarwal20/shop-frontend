import React from 'react';
import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import "./carousel.css"
function ProductCarousel() {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg',
    },
    {
      id: 2,
      name: 'Product 2',
      image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg',
    },
    {
        id: 2,
        name: 'Product 2',
        image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg',
      },
      {
        id: 2,
        name: 'Product 2',
        image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg',
      },
    // Add more products here
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <Slider {...settings}>
      {products.map((product) => (
        <div key={product.id}>
          <h3 className="headingc">{product.name}</h3>
          <img src={product.image} alt={product.name} className="carousel"/>
        </div>
      ))}
    </Slider>
  );
}

export default ProductCarousel;
