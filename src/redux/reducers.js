import { combineReducers } from 'redux';
import { authReducer } from './reducers/authReducer.js';


const rootReducer = combineReducers({
    authReducer
})

export default rootReducer;