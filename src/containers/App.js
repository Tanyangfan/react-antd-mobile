import { Button } from 'antd-mobile';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ActionType from '../actions';
import './demo.less';

class App extends Component {

  componentDidMount(){
    const {dispatch } = this.props
    dispatch(ActionType.ActionTest("a"))
  }

  render() {
    return (
      <div className="test"> 
        <Button type="primary">This is a button</Button>
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