import React from 'react';
import './header.component.scss'
import { Link } from 'react-router-dom'
import { auth } from '../firebase/firebase.util';
import { connect } from 'react-redux';
import CartIcon from './cart-icon-component';
import CartDropdownComponent from './cart-dropdown-component';
import { userSignedIn } from '../redux/selectors/user-selector';
import { selectCartHidden } from '../redux/selectors/cart-selector';

const HeaderComp = ({ currentUser, cartHidden }) => {

    return (

        <div className="header">

            <div className="logo-container">
                <Link to="/">
                    <img alt="logo" className="logo" src={`https://www.logomaker.com/wp-content/uploads/2019/01/iStock-687017552.jpg`} />
                </Link>
            </div>

            <div className="option-container">
                <div className="option">
                    <Link to="/" className="link"> Home </Link>
                </div>
                <div className="option">
                    <Link to="/Shop" className="link" > Shop</Link>
                </div>
                <div className="option">

                    {currentUser && <div className="link" onClick={() => { auth.signOut(); }}> Sign out </div>}
                    {!currentUser && <Link to="/SignInSignUp" className="link" > Login</Link>}


                </div>
                <div className="option">
                    <CartIcon />
                    {

!cartHidden && <CartDropdownComponent key="cartdropdowncomponent" />

}
                </div>
                
            </div>
        </div>



    )
}

const mapStateToProps = state => ({

    currentUser: userSignedIn(state),
    cartHidden:  selectCartHidden(state)

});
export default connect(mapStateToProps,)(HeaderComp)
