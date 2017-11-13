import React, {Component} from 'react';
import {Carousel} from 'antd-mobile';

import './index.less';

class CarouselView extends Component {
  render() {

    var banners;
    const data = this.props.data;

    if (data) {
      banners = this
        .props
        .data
        .map((url, key) => (
          <a href="" key={key}>
            <img src={url} alt="icon"/>
          </a>
        ));
    }

    return (
      <Carousel className="my-carousel" autoplay={true} infinite swipeSpeed={50}>
        {banners}
      </Carousel>
    );
  }
}

export default CarouselView;