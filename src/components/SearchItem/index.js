import React, { Component } from 'react';

import './index.less'

class SearchItem extends Component {
    render() {
        return (
            <div className="search-item">
                <input type="search" placeholder="请输入搜索内容" className="search-input"/>
            </div>
        );
    }
}

export default SearchItem;