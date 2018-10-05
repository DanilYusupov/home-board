import {v4} from 'uuid'
import { status } from '../reducers/task';

export const ADD_TASK = 'ADD_TASK'
export const REMOVE_TASK = 'REMOVE_TASK'

export const addTask = (title, text, assignee) => {
    return dispatch => {
        dispatch({
            type: ADD_TASK,
            task: {
                id: v4(),
                title: title,
                text: text,
                assignee: assignee,
                status: status.TODO
            }
        })
    }
}

export const removeTask = (id) => {
    return dispatch => {
        dispatch({
            type: REMOVE_TASK,
            id: id
        })
    }
}
