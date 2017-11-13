import { combineReducers } from 'redux';
import searchResult from './searchResult';
import userResult from './userResult';
import home from './home';

const rootReducer = combineReducers({
    searchResult,
    userResult,
    home
})

export default rootReducer;