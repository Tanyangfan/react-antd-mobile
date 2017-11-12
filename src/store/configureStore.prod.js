import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from '../epic';
import rootReducer from '../reducers';

const epicMiddleware = createEpicMiddleware(rootEpic);

const configureStore =  createStore(
    rootReducer,
    applyMiddleware(
        epicMiddleware
    )
)
export default configureStore