import { status, taskReducer } from './task';
import {
    ADD_TASK,
    REMOVE_TASK,
} from '../actions/TasksActions';
import {
    STATUS_TASK,
    EDIT_TEXT,
    EDIT_TITLE
} from '../actions/TaskActions';

export const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return [
                ...state,
                action.task
            ]
        case REMOVE_TASK:
            return state.filter(
                task => task.id !== action.id
            )
        case STATUS_TASK:
            return state.map(task => {
                if (task.id === action.id) {
                    taskReducer(task, action)
                }
            })
        case EDIT_TITLE:
            return state.map(task => {
                if (task.id === action.id) {
                    taskReducer(task, action)
                }
            })
        case EDIT_TEXT:
            return state.map(task => {
                if (task.id === action.id) {}
                taskReducer(task, action)
            })
        default:
            return state
    }
}