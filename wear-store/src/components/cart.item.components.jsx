import React from "react";
import './cart.item.components.scss';
const CartItem = ({ item: { imageUrl, name, price, quantity } }) => (
    <div className="cart-item">
        <img alt="item-img" className="item-img" src={imageUrl} />
        <div className="item-details">
            <p className="name">{name}</p>
            <p className="price">
                {quantity} x ₹{price}</p>
        </div>
    </div>
);

export default CartItem;