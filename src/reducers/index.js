import * as ActionType from '../actions';
import { combineReducers } from 'redux';

const initialState = {
  past:[],
  value:"1"
}

const data = (state = initialState, action) => {
  const {past,value} = state;
  switch (action.type) {
    case ActionType.ACTICON:
      return { past:[ ...past,value], value: action.item }
    default:
      return state;
  }

}



const rootReducer = combineReducers({
  data
})

export default rootReducer