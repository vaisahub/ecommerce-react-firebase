import React from 'react';
import { connect } from 'react-redux';
import CustomButton from './button-component';
import './cart-dropdown-component.scss'
import CartItem from './cart.item.components';
const CartDropdownComponent = ({ cartItems }) => {

    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.map(item =>
                    <CartItem key={item.id} item={item}></CartItem>
                )}
            </div>
            <CustomButton className="black-btn"> Check out</CustomButton>
        </div>
    );
}
const mapStateToProps = state => ({
    cartItems: state.cart.cartItems
});
export default connect(mapStateToProps, null)(CartDropdownComponent);
