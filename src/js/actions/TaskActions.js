export const STATUS_TASK = 'STATUS_TASK'
export const EDIT_TEXT = 'EDIT_TEXT'
export const EDIT_TITLE = 'EDIT_TITLE'

export const editStatus = (id, status) => {
    return dispatch => {
        dispatch({
            type: STATUS_TASK,
            id: id,
            status: status
        })
    }
}

export const editTitle = (id, title) => {
    return dispatch => {
        dispatch({
            type: EDIT_TITLE,
            id: id,
            title: title
        })
    }
}

export const editText = (id, text) => {
    return dispatch => {
        dispatch({
            type: EDIT_TEXT,
            id: id,
            text: text
        })
    }
}