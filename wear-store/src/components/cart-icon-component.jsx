import React from 'react'
import './cart-icon-component.scss';
import { ReactComponent as ShopingIcon } from './../images/shopping-bag.svg'
import { connect } from 'react-redux';
import { toggleHidden } from '../redux/cart/cart.action';
import { cartItemCount } from '../redux/selectors/cart-selector';
export const CartIcon = ({ toggleHidden, selectCartItemCount }) => {
    return (
        <div className="cart-icon">
            <ShopingIcon onClick={toggleHidden} className="shopping-icon" />
            <span className="item-count"> {selectCartItemCount} </span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleHidden: () => dispatch(toggleHidden)
});

const mapStateToProps = state => ({
    selectCartItemCount: cartItemCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);