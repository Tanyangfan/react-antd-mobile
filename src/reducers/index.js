import { combineReducers } from 'redux';
import searchResult from './searchResult';
import userResult from './userResult';
import home from './home';
import tipList from './tipList';

const rootReducer = combineReducers({
    searchResult,
    userResult,
    home,
    tipList
})

export default rootReducer;