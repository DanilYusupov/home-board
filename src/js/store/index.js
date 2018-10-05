import {createStore} from "redux";
import rootReducer from '../reducers/'
import { status } from '../reducers/task';
import { tasksReducer } from '../reducers/tasks';

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

const store = createStore(tasksReducer, initialState);

export default store;