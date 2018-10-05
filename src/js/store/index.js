import {createStore, applyMiddleware} from "redux";
import { status } from '../reducers/task';
import { tasksReducer } from '../reducers/tasks';
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const initialState = {
    tasks: [
        {
            id: 1,
            title: 'First task',
            text: 'This is text task',
            assignee: 'Nobody',
            status: status.TODO
        }
    ]
}

const store = createStore(tasksReducer, initialState, applyMiddleware(thunk, logger));

export default store;