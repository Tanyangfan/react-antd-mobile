import React, {Component} from 'react';
import {Carousel} from 'antd-mobile';
import {Icon} from 'antd-mobile';

import './index.less';

import icon_exchange_record from '../../images/icon_exchange_record.png';

class ExchangeRecordItem extends Component {

    renderRecords(records) {
        if (records.length > 0) {
            return records.map((banner, key) => (
                <div key={key}>
                    sss
                </div>
            ));
        } else {
            return <div>加载中...</div>;
        }
    }

    render() {
        return (
            <div className="exchange-carousel-line">
                <img src={icon_exchange_record} alt="兑换记录" className="exchange-carousel-left"/>
                <Carousel
                    className="exchange-carousel-view"
                    vertical={true}
                    dots={false}
                    dragging={false}
                    swiping={false}
                    autoplay={true}
                    infinite
                    swipeSpeed={50}>
                    {this.renderRecords(this.props.data)}
                </Carousel>
                <div className="exchange-carousel-right">
                    更多
                    <Icon type="right" size='md'/>
                </div>
            </div>
        );
    }
}

export default ExchangeRecordItem;