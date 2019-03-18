import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import menuReducer from './menuReducer';

export default combineReducers({
    loginReducer,
    menuReducer
});