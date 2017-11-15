import React, {Component} from 'react';

import {HOST_IMAGE_URL} from '../../epic';
import './index.less';
import ICON_MORE from '../../images/icon_more.png';

class CategoryItem extends Component {

    renderImage(category) {
        if (category.id === -1) {
            return <img src={ICON_MORE} alt="icon"/>
        } else {
            return <img src={`${HOST_IMAGE_URL}${category.image}`} alt="icon"/>
        }
    }

    render() {

        var categoryItems;
        const data = this.props.data;

        if (data.length > 0) {
            categoryItems = data.map((category, key) => (
                <div key={key} className="category-item">
                    {this.renderImage(category)}
                    <span>
                        {category.name}
                    </span>
                </div>
            ));
        }

        return (
            <div className="category-line">
                {categoryItems}
            </div>
        );
    }
}

export default CategoryItem;