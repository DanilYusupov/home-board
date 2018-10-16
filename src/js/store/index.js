import {createStore, applyMiddleware} from "redux"
import tasksReducer from '../reducers/tasks'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

const store = createStore(tasksReducer, composeWithDevTools(
    applyMiddleware(thunk)
));

export default store;