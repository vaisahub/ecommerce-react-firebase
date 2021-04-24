import React from 'react';
import './header.component.scss'
import { Link } from 'react-router-dom'

const HeaderComp = () => (
    <div className="header">

        <div className="logo-container">
            <Link to="/">
                <img alt="logo" className="logo" src={`https://www.logomaker.com/wp-content/uploads/2019/01/iStock-687017552.jpg`} />
            </Link>
        </div>

        <div className="option-container">
            <div className="option">
                <Link to="/"  style={{paddingLeft: 13,color:'black',  fontSize: 'large'}}> Home </Link>
            </div>
            <div className="option">
                <Link to="/Shop"  style={{paddingLeft: 13,color:'black', fontSize: 'large'}} > Shop</Link>
            </div>
            <div className="option">
                <Link to="/SignInSignUp"  style={{paddingLeft: 13,color:'black', fontSize: 'large'}} > Login</Link>
            </div>
        </div>
    </div>



)

export default HeaderComp
