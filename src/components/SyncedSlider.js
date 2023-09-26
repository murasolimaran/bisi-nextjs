// SyncedSlider.js
import React from 'react';
import Slider from 'react-slick';

const SyncedSlider = ({ slides }) => {
  const settings = {
    // Slick settings for the synced slider
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    focusOnSelect: true,
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

export default SyncedSlider;
