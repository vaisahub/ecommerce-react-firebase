import CollectionItem from './collection-item.component';
import './collection-preview.component.scss';

const CollectionPreview = ({ title, items }) => {

    return (
        <div class="collection-preview">
            <div className="title">
                <h2>
                    {title}
                </h2>
            </div>

            <div class="collections">

                {items.filter((data, inx) => inx < 4).map(({ id, ...otherKeys }) => {
                    return (
                        <CollectionItem key={id} {...otherKeys}> </CollectionItem>
                    )
                })}
            </div>
        </div>
    )

}

export default CollectionPreview;