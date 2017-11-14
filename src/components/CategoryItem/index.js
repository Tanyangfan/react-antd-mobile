import React, {Component} from 'react';
import {HOST_IMAGE_URL} from '../../epic';
import './index.less';

class CategoryItem extends Component {
    render() {

        var categoryItems;
        const data = this.props.data;

        if (data.length > 0) {
            categoryItems = data.map((category, key) => (
                <div key={key} className="category-item">
                    <img src={`${HOST_IMAGE_URL}${category.image}`} alt="icon"/>
                    <span>
                        {category.name}
                    </span>
                </div>
            ));
        }

        return (
            <div className="category-line">
                {categoryItems};
            </div>
        );
    }
}

export default CategoryItem;