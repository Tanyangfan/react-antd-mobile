import React, {Component} from 'react';
import {connect} from 'react-redux';

import SearchItem from '../../components/SearchItem';
import Header from '../../components/Header';
import CarouselView from '../../components/CarouselView';
import ProductItem from '../../components/ProductItem';
import ProductList from '../../components/ProductList';

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

    const urls = ["http://139.196.122.144:10004/uploads/adv/ed0c7356-5662-4895-bd29-f271fb8979c8.png", "http://139.196.122.144:10004/uploads/adv/3cf6fafc-453a-4392-ab0b-917f77d8538b.png"];
    return (
      <div>
        <Header title="兑换商城"/>
        <div className="search-line">
          <SearchItem readOnly placeholder="请输入搜索内容" maxLength={8} className="search-item"/>
          <div className="search-line-right">
            <img src={icon_record} alt="icon_record" className="icon-record"/>
            <img src={card_coupons} alt="card_coupons" className="icon-card-coupons"/>
          </div>
        </div>
        <CarouselView data={urls}/>
        <ProductItem/>
        <ProductList/>
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