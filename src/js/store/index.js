import {createStore, applyMiddleware} from "redux";
import { tasksReducer } from '../reducers/tasks';
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const store = createStore(tasksReducer, applyMiddleware(thunk, logger));

export default store;