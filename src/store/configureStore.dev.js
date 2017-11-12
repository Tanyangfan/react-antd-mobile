import { createStore, applyMiddleware } from 'redux';
import {createLogger} from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from '../epic';
import rootReducer from '../reducers';

const loggerMiddleware = createLogger()
const epicMiddleware = createEpicMiddleware(rootEpic);

const configureStore =  createStore(
    rootReducer,
    applyMiddleware(
        loggerMiddleware,
        epicMiddleware
    )
)
export default configureStore