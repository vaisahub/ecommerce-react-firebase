import './category-page.component.scss';
import React from 'react';
import { selectCollection } from '../../redux/selectors/shop.data.selector.js';
import { connect } from 'react-redux';
import CollectionItem from './collection-item.component';

const CategoryPage = ({ collection }) => {
    const { items, title } = collection;
    return (<div className="collection-page" >
        <div className="title">{title}</div>
        <div className="items">
            {items.map((item) => {
                return (
                    <CollectionItem key={item.id} item={item}> </CollectionItem>
                )
            })}
        </div>
    </div >)


};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.categoryId)(state)
})

export default connect(mapStateToProps)(CategoryPage);