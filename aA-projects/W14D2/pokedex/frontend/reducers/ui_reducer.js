import errorsReducer from './errors_reducer';
import loadingReducer from './loading_reducer';
import { combineReducers } from 'redux';

const uiReducer = combineReducers({
    errors: errorsReducer,
    loading: loadingReducer
});

export default uiReducer;