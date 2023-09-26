// MainSlider.js
import React from 'react';
import Slider from 'react-slick';

const MainSlider = ({ slides }) => {
  const settings = {
    // Slick settings for the main slider
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index}>
          <img src={slide} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </Slider>
  );
};

export default MainSlider;
