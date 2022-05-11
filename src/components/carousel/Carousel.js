import React from "react";
import AliceCarousel from 'react-alice-carousel';

const Carousel = ({ items }) => {
  const responsiveObject = {
    0: {
      items: 2,
    },
    512: {
      items: 4
    }
  };

  return (
    <AliceCarousel
      mouseTracking
      disableButtonsControls
      disableDotsControls
      infinite
      autoPlay={true}
      animationType="slide"
      animationDuration={1500}
      autoPlayInterval={1000}
      items={items}
      responsive={responsiveObject}
    />
  );
};

export default Carousel;