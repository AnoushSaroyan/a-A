import {connect} from 'react-redux'
import SessionForm from './session_form'

import { login } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
    formType: "login",
    errors: state.errors.session
});

const mapDipatchToProps = (dispatch) => ({
    processForm: (user) => dispatch(login(user))
});

export default connect(mapStateToProps, mapDipatchToProps)(SessionForm);
