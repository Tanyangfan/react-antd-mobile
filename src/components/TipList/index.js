import React, {Component} from 'react';
import {Grid} from 'antd-mobile';

import './index.less';

class TipList extends Component {

    renderTip(dataItem) {
        return <div>
            {dataItem.title}
        </div>
    }

    render() {
        return (<Grid data={this.props.data} columnNum={2} renderItem={this.renderTip}/>);
    }
}

export default TipList;