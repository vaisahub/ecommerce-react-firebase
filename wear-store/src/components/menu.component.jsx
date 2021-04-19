import React from 'react'
import './menu.component.scss'
const MenuItem = ({ title, size, img }) => {
    return (
        <div style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover' }} className={`${size} menu-item`}>
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="sub-title">SHOP NOW</span>
            </div>
        </div>
    )
}

export default MenuItem;