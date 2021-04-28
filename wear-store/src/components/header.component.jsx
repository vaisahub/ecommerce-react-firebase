import React from 'react';
import './header.component.scss'
import { Link } from 'react-router-dom'
import { auth } from '../firebase/firebase.util';
import { connect } from 'react-redux';

const HeaderComp = ({currentUser}) =>{

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
                {currentUser ? <div className="link" onClick={() => { auth.signOut(); }}> Sign out </div> : <Link to="/SignInSignUp" className="link" > Login</Link>}
            </div>
        </div>
    </div>



)}

const mapStateToProps = state => ({

    currentUser: state.user

})
export default connect(mapStateToProps)(HeaderComp)
