import {v4} from 'uuid'

export const ADD_TASK = 'ADD_TASK'

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
