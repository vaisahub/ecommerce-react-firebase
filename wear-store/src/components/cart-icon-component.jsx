import React from 'react'
import './cart-icon-component.scss';
import { ReactComponent as ShoppingIcon } from './../images/shopping-bag.svg'
import { connect } from 'react-redux';
import { toggleHidden } from '../redux/cart/cart.action';
import { cartItemCount } from '../redux/selectors/cart-selector';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router';


export const CartIcon = ({ toggleHidden, selectCartItemCount }) => {
    return (
        <div className="cart-icon">
            <ShoppingIcon onClick={toggleHidden} className="shopping-icon" />
            <span className="item-count"> {selectCartItemCount} </span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleHidden: () => dispatch(toggleHidden)
});

// const mapStateToProps = state => ({
//     selectCartItemCount: cartItemCount(state)
// });


const mapStateToProps = createStructuredSelector({
    selectCartItemCount: cartItemCount
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartIcon));