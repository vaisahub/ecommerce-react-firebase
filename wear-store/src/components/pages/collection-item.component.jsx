import React from 'react';
import CustomButton from '../button-component';
import './collection-item.component.scss';
import { connect } from 'react-redux';
import { addItems } from '../../redux/cart/cart.action';
const CollectionItem = ({ item, addItems }) => {

    const { price, imageUrl, name } = item;
    return (
        <div className="item">
            <div className="img-container">
                <div className="item-img" style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover' }}>  </div>
                <div className="item-content">
                    <CustomButton onClick={() =>  addItems(item) }>
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
const mapDispatchToProps = (dispatch) => ({
    addItems: (item) => dispatch(addItems(item))
});
export default connect(null, mapDispatchToProps)(CollectionItem);