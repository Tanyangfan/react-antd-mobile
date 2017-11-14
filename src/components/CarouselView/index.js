import React, {Component} from 'react';
import {Carousel} from 'antd-mobile';

import {HOST_IMAGE_URL} from '../../epic';
import './index.less';
import default_image from '../../images/default_image.png';

class CarouselView extends Component {
  render() {

    var banners;
    const data = this.props.data;

    if (data.length > 0) {
      banners = this
        .props
        .data
        .map((banner, key) => (
          <a href="" key={key}>
            <img src={`${HOST_IMAGE_URL}${banner.image}`} alt="icon"/>
          </a>
        ));
    } else {
      banners = <a href="">
        <img src={default_image} alt="icon"/>
      </a>
    }

    return (
      <Carousel className="my-carousel" autoplay={true} infinite swipeSpeed={50}>
        {banners}
      </Carousel>
    );
  }
}

export default CarouselView;