import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SearchBar } from 'antd-mobile';

import Header from '../Header'
import CarouselView from '../../components/CarouselView';
import ProductItem from '../../components/ProductItem';
import ProductList from '../../components/ProductList';

import * as ActionType from '../../actions';

class App extends Component {

  componentDidMount(){
    const {dispatch} = this.props;
    dispatch(ActionType.fetchReposRequest("rx"));
  }

  render() {
    return (
      <div> 
        <Header title="积分商城"/>
        <SearchBar placeholder="搜索" maxLength={8} />
        <CarouselView/>
        <ProductItem/>
        <ProductList/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { data } = state
  return {
      data
  }
}

export default connect(mapStateToProps)(App)