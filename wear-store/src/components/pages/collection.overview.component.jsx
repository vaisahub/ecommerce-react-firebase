import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopData } from "../../redux/selectors/shop.data.selector";
import './collection-preview.component.scss';
import CollectionPreview from './collection-preview.component';

const CollectionOverview = ({ previewData }) => (
    <div className="collection-overview">
        {previewData.map(({ id, ...data }) => {
            return (
                <CollectionPreview key={id} {...data}> </CollectionPreview>
            )
        })}
    </div>
);
const mapStateToProps = createStructuredSelector(
    {
        previewData: selectShopData
    }
)
export default connect(mapStateToProps)(CollectionOverview)