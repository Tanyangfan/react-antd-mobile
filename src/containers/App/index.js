import React, {Component} from 'react';
import {connect} from 'react-redux';
import {dematerialize} from 'rxjs/operators/dematerialize';

import SearchItem from '../../components/SearchItem';
import Header from '../../components/Header';
import BannerView from '../../components/BannerView';
import CategoryItem from '../../components/CategoryItem';
import ExchangeRecordItem from '../../components/ExchangeRecordItem';

import * as ActionType from '../../actions';

import './index.less';

import icon_record from '../../images/icon_record.png';
import card_coupons from '../../images/card_coupons.png';
import icon_flower_money from '../../images/icon_flower_money.png';
import icon_flower from '../../images/icon_flower.png';

class App extends Component {

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(ActionType.fetchHomeRequest());
  }

  render() {
    return (
      <div>
        <Header title="兑换商城"/>

        <div className="search-line">
          <SearchItem
            readOnly
            placeholder="请输入搜索内容"
            maxLength={8}
            className="search-item"/>
          <div className="search-line-right">
            <img src={icon_record} alt="icon_record" className="icon-record"/>
            <img
              src={card_coupons}
              alt="card_coupons"
              className="icon-card-coupons"
              style={{
              display: "none"
            }}/>
          </div>
        </div>

        <BannerView data={this.props.home.banners}/>

        <div className="exchange-line">
          <div className="exchange-line-left">
            <img
              src={icon_flower_money}
              alt="icon_flower_money"
              className="exchange-line-icon"/>
            <span>
              幸福花+现金兑换
            </span>
          </div>
          <div className="exchange-line-right">
            <img src={icon_flower} alt="icon_flower" className="exchange-line-icon"/>
            <span>
              纯幸福花兑换
            </span>
          </div>
        </div>

        <CategoryItem data={this.props.home.categoryList}/>

        <ExchangeRecordItem data={this.props.home.exchangeInfoList}/>

      </div>
    );
  }
}

const mapStateToProps = state => {
  const {home} = state
  console.log(home)
  return {home}
}

export default connect(mapStateToProps)(App)