import { combineReducers } from 'redux';
import searchResult from './searchResult';
import userResult from './userResult';

const rootReducer = combineReducers({
    searchResult,
    userResult
})

export default rootReducer;