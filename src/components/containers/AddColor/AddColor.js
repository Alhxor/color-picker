import { connect } from 'react-redux';
import { addColor } from '../../../actions/actions';
import AddColorForm from '../../ui/AddColorForm/AddColorForm';

export default connect(
    null,
    { addColor }
)(AddColorForm);
