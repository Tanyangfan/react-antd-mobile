import React, {Component} from 'react';
import {connect} from 'react-redux';

import SearchItem from '../../components/SearchItem';
import Header from '../../components/Header';
import CarouselView from '../../components/CarouselView';
import ProductItem from '../../components/ProductItem';
import ProductList from '../../components/ProductList';

import * as ActionType from '../../actions';
import '../index.less';

class App extends Component {

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(ActionType.fetchReposRequest("rx"));
  }

  render() {
    return (
      <div>
        <Header title="兑换商城"/>
        <div className="search-line">
          <SearchItem placeholder="请输入搜索内容" maxLength={8}/>
          <img src="../../../images/icon_record.png"/>
        </div>
        <CarouselView/>
        <ProductItem/>
        <ProductList/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {data} = state
  return {data}
}

export default connect(mapStateToProps)(App)