import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SearchBar,Button } from 'antd-mobile';

import CarouselView from '../components/CarouselView/CarouselView';

import * as ActionType from '../actions';
import './demo.less';

class App extends Component {

  componentDidMount(){
    const {dispatch } = this.props
    dispatch(ActionType.ActionTest("a"))
  }

  render() {
    return (
      <div> 
        <SearchBar placeholder="搜索" maxLength={8} />
        <CarouselView/>
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