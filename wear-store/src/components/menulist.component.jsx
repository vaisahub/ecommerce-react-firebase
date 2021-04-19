import React from 'react';
import './menulist.component.scss';
import MenuItem from './menu.component';
const MenuList = ({ menuList }) => {
    return (
        <div className="directory-menu">
            { menuList.map(data => <MenuItem size={data.size} img={data.url} key={data.id} title={data.title}></MenuItem>)}
        </div>

    )
}

export default MenuList;