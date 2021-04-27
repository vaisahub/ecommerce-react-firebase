import './shop.component.scss'
import React from 'react';
import SHOP_DATA from '../../shop.data';
import CollectionPreview from './collection-preview.component';

class Shop extends React.Component {

    constructor() {
        super();
        this.state = {
            previewData: SHOP_DATA
        }
    }
    render() {
        return (
            <div class="shop-page">
                {this.state.previewData.map(({id, ...data }) => {
                    return (
                        <CollectionPreview key={id} {...data}> </CollectionPreview>
                    )})}
            </div>
        )
    }

}

export default Shop;