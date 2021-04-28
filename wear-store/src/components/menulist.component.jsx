import React from 'react';
import './menulist.component.scss';
import MenuItem from './menu.component';
const MenuList = ({ menuList }) => {
    return (
        <div className="directory-menu">
            { menuList.map(({id,...otherItems}) => <MenuItem key={id} {...otherItems}></MenuItem>)}
        </div>

    )
}

export default MenuList;