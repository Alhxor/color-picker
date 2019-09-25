import { connect } from 'react-redux';
import { rateColor, removeColor } from '../../../actions/actions';
import ColorList from '../../ui/ColorList/ColorList';

const mapStateToProps = state => ({ colors: [...state.colors] });
const mapDispatchToProps = dispatch => ({
    rateColor(id) {
        return rating => dispatch(rateColor(id, rating));
    },
    removeColor(id) {
        return () => dispatch(removeColor(id));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ColorList);
