import React from 'react';
import './collection-item.component.scss';

const CollectionItem = ({ price, imageUrl, name }) => {

    return (
        <div className="item">
            <div className="img-container">
                <div className="item-img" style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover' }}>  </div>
                <div className="item-content">
                    Add to cart
                </div>
            </div>
            <div className="item-footer">
                <div> {name}</div>
                <div> ₹{price} </div>
            </div>
        </div>)
}

export default CollectionItem;