import './shop.component.scss'
import React from 'react';
import CollectionPreview from './collection-preview.component';
import { createStructuredSelector } from 'reselect';
import { selectShopData } from '../../redux/selectors/shop.data.selector';
import { connect } from 'react-redux';

const Shop = ({ previewData }) => (

    <div className="shop-page">
        {previewData.map(({ id, ...data }) => {
            return (
                <CollectionPreview key={id} {...data}> </CollectionPreview>
            )
        })}
    </div>

)

const mapStateToProps = createStructuredSelector(
    {
        previewData: selectShopData
    }
)

export default connect(mapStateToProps)(Shop);