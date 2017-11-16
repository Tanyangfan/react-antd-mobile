import React, {Component} from 'react';
import {Carousel} from 'antd-mobile';
import {Icon} from 'antd-mobile';

import {transTime} from '../../tools/transTime';

import './index.less';

import icon_exchange_record from '../../images/icon_exchange_record.png';

class ExchangeRecordItem extends Component {

    renderRecords(records) {

        if (records.length <=0) {
            records = [
                {
                    id: "111111",
                    timestamp: "111111",
                    message: "加载中......",
                }
            ]
        }

        console.log(records);

        return records.map((record, key) => (
            <div key={key} className="exchange-content">
                <div className="exchange-content-top">
                    <span className="exchange-content-top-left">
                        {record.id}
                    </span>
                    <span className="exchange-content-top-right">
                        {transTime(record.timestamp)}
                    </span>
                </div>
                <div className="exchange-content-bottom">
                    <span className="exchange-content-bottom-left">
                        兑换了
                    </span>
                    <span className="exchange-content-bottom-right">
                        {record.message}
                    </span>
                </div>
            </div>
        ));
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
                    infinite={true}>
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