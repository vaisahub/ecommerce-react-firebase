import './shop.component.scss'
import React from 'react';
import CollectionOverview from './collection.overview.component';
import { Route } from 'react-router-dom';
import CategoryPage from './category-page.component';

const Shop = ({ match }) => {
    console.log(match.path)
    return (

        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionOverview} />
            <Route  path={`${match.path}/:categoryId`} component={CategoryPage} />
        </div>

    ) 
}



export default Shop;