import React, {Component} from 'react';
import {connect} from 'react-redux';

import SearchItem from '../../components/SearchItem';
import Header from '../../components/Header';
import CarouselView from '../../components/CarouselView';

import * as ActionType from '../../actions';

import './index.less';
import '../global.less';

import icon_record from '../../images/icon_record.png';
import card_coupons from '../../images/card_coupons.png';

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
          <SearchItem readOnly placeholder="请输入搜索内容" maxLength={8} className="search-item"/>
          <div className="search-line-right">
            <img src={icon_record} alt="icon_record" className="icon-record"/>
            <img src={card_coupons} alt="card_coupons" className="icon-card-coupons" style={{display:"none"}}/>
          </div>
        </div>
        <CarouselView data={this.props.home.banners} style={{height:"220px"}}/>
        <div className="exchange-line">
          <div className="exchange-line-left">
            <img src={icon_record} alt="icon_record"/>
          </div>
          <div className="exchange-line-right">
            <img src={icon_record} alt="icon_record"/>
          </div>
        </div>
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