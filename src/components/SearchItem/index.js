import React, {Component} from 'react';
import {Icon} from 'antd-mobile';

import './index.less';

class SearchItem extends Component {

    render() {

        const readOnly = this.props.readOnly;

        var input;
        if (readOnly) {
            input = <input type="search" readOnly placeholder="请输入搜索内容" className="search-input"/>;
        } else {
            input = <input type="search" placeholder="请输入搜索内容" className="search-input"/>;
        }

        return (
            <div className="search-item">
                {input}
                <div className="search-button">
                    <Icon type="search" size='md' color="white" /> 
                </div>
            </div>
        );
    }
}

export default SearchItem;