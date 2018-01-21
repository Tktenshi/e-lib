import { combineReducers } from 'redux';
import { libReducer } from './libReducer';

export default combineReducers({
    libReducer: libReducer
});