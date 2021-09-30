import React from 'react';
import { connect } from 'react-redux';
import CustomButton from './button-component';
import './cart-dropdown-component.scss'
import CartItem from './cart.item.components';
import { withRouter } from 'react-router';
import { selectCartItems } from '../redux/selectors/cart-selector';
import { createStructuredSelector } from 'reselect';
import { toggleHidden } from '../redux/cart/cart.action';

const CartDropdownComponent = ({ cartItems, history, dispatch }) => {

    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.map(item =>
                    <CartItem key={item.id} item={item}></CartItem>
                )}
                {
                    cartItems.length === 0 ? <p className="empty-cart">Your cart is empty !! :( </p> : ''
                }
            </div>
            <CustomButton onClick={ ()=>{dispatch(toggleHidden);history.push('/checkout')}} className="black-btn"> Check out</CustomButton>
        </div>
    );
}
const mapStateToProps =  createStructuredSelector({
    cartItems: selectCartItems
});
export default withRouter(connect(mapStateToProps)(CartDropdownComponent));
