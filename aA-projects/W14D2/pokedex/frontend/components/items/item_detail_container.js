import { connect } from 'react-redux';
import ItemDetail from './item_detail';
import { selectItem } from '../../reducers/selector';

const mapStateToProps = (state, ownProps) => {
    const itemId = ownProps.match.params.itemId;
    const item = selectItem(state, itemId);

    return {
        item,
    };
};

export default connect(mapStateToProps)(ItemDetail);