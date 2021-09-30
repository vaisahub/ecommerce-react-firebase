import React from 'react'
import { connect } from 'react-redux';
import { addItems, clearItemFromCart, removeItemFromCart } from '../redux/cart/cart.action';
import './checkout.items.scss'
 const CheckoutItem = ({ item,dispatch }) => {
    return (
        (<div className="item-cart">
            <div className="item-property">

                <img alt={item.name} src={item.imageUrl} />

            </div>
            <div className="item-property">{item.name}</div>
            <div className="item-property">
                <span className="down" onClick={()=>dispatch(removeItemFromCart(item))}> &#10094; </span>
                <span class="quantity"> {item.quantity}</span>
                <span className="up" onClick={()=>dispatch(addItems(item))}> &#10095; </span> </div>
            <div className="item-property">₹{item.price}</div>
            <div className="item-property remove" onClick={()=>{dispatch(clearItemFromCart(item))}}>&#9747; </div>
        </div>)
    )
}

export default connect()(CheckoutItem);