import React from 'react';
import MenuList from '../menulist.component';
import './homepage.components.scss'
class HomePage extends React.Component {
 
    render() {
        return (
            <div className="home-page">
                <MenuList></MenuList>
            </div>)
    }
}



export default HomePage;
