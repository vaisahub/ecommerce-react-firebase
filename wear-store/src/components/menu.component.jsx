import React from 'react'
import './menu.component.scss'
import {withRouter} from 'react-router-dom'
const MenuItem = ({ title, size, url, linkUrl,history, match }) => {
    return (
        <div onClick={()=>{history.push(`${match.url}${linkUrl}`)}} className={`${size} menu-item`}>
           <div style={{ backgroundImage: `url(${url})`, backgroundSize: 'cover' }} className="background-img"></div>
            <div className="content" >
                <h1 className="title">{title}</h1>
                <span className="sub-title">SHOP NOW</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem);