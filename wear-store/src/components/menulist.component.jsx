import React from 'react';
import './menulist.component.scss';
import MenuItem from './menu.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectMenuList } from '../redux/selectors/directory.selector';

const MenuList = ({ menuList }) => {
    return (
        <div className="directory-menu">
            {menuList.map(({ id, ...otherItems }) => <MenuItem key={id} {...otherItems}></MenuItem>)}
        </div>

    )
}

const mapStateToProps = createStructuredSelector({
    menuList: selectMenuList
});
export default connect(mapStateToProps)(MenuList);