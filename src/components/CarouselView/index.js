import React from 'react';
import { Carousel } from 'antd-mobile';
import './CarouselView.less';

const CarouselView = () =>{
    return (
        <Carousel
        className="my-carousel"
        autoplay={false}
        infinite
        selectedIndex={1}
        swipeSpeed={35}
      >
          <a href="">
            <img
              src={`https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_120x44dp.png`}
              alt="icon"
            />
          </a>
      </Carousel>
    )
};

export default CarouselView;