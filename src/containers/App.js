import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SearchBar } from 'antd-mobile';

import {deepCompare} from '../tools/deepCompare';

import CarouselView from '../components/CarouselView';
import ProductItem from '../components/ProductItem';
import ProductList from '../components/ProductList';

import * as ActionType from '../actions';
import './demo.less';

class App extends Component {

  componentDidMount(){
    const {dispatch } = this.props;
    dispatch(ActionType.ActionTest("a"));
  }

  shouldComponentUpdate(nextProps, nextState){
    deepCompare(this,nextProps,nextState);
  }

  render() {
    return (
      <div> 
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