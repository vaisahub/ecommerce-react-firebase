import React from 'react';
import CustomButton from '../button-component';
import './collection-item.component.scss';

const CollectionItem = ({ price, imageUrl, name }) => {

    return (
        <div className="item">
            <div className="img-container">
                <div className="item-img" style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover' }}>  </div>
                <div className="item-content">
                    <CustomButton >
                        Add to cart
                    </CustomButton>
                </div>
            </div>
            <div className="item-footer">
                <div> {name}</div>
                <div> ₹{price} </div>
            </div>
        </div>)
}

export default CollectionItem;