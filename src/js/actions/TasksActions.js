import {v4} from 'uuid'

export const ADD_TASK = 'ADD_TASK'
export const EDIT_STATUS = 'EDIT_STATUS'
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
                status: 'TODO'
            }
        })
    }
}

export const editStatus = (id, status) => {
    return dispatch => {
        dispatch({
            type: EDIT_STATUS,
            id: id,
            status: status
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