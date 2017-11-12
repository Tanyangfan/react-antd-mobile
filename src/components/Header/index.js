import React, {Component} from 'react';
import {Icon} from 'antd-mobile';

import './index.less'

class Header extends Component {
    render() {
        return (
            <div className="header">
                <Icon type="left" size='lg'/> 
                    {this.props.title}
                <Icon type="left" size='lg' className="header-hidden"/>
            </div>
        );
    }
}
export default Header;