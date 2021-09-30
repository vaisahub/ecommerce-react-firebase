import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectTotalValue } from "../redux/selectors/cart-selector";
import CheckoutItem from "./checkout.items";
import './checkout.page.scss';

const CheckOut = ({ cartItems, total }) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">Product</div>
            <div className="header-block">Description</div>
            <div className="header-block">Quantity</div>
            <div className="header-block">Price</div>
            <div className="header-block">Remove</div>
        </div>
        <div className="checkout-items">
            {cartItems.map(item =>
                <CheckoutItem key={item.id} item={item}></CheckoutItem>
            )
            }
             {
                    cartItems.length === 0 ? <p className="empty-cart">Your cart is empty !! :( </p> : ''
                }
        </div>
        <div class="total-price"> Total: ₹{total} </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectTotalValue
});

export default connect(mapStateToProps)(CheckOut);