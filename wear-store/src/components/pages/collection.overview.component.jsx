import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {  selectCollectionForPreview } from "../../redux/selectors/shop.data.selector";
import './collection-preview.component.scss';
import CollectionPreview from './collection-preview.component';

const CollectionOverview = ({previewData}) => {
    console.log(previewData,'previewData');
    return (

        <div className="collection-overview">
            {previewData.map(({ id, ...data }) => {
                return (
                    <CollectionPreview key={id} {...data}> </CollectionPreview>
                )
            })}
        </div>)
};
const mapStateToProps = createStructuredSelector(
    {
        previewData: selectCollectionForPreview
    }
)
export default connect(mapStateToProps)(CollectionOverview)