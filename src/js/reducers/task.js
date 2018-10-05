import {
    STATUS_TASK,
    EDIT_TITLE,
    EDIT_TEXT
} from '../actions/TaskActions';

export const status = {
    TODO: 'TODO',
    IN_PROGRESS: 'IN_PROGRESS',
    DONE: 'DONE',
}

export const taskReducer = (state = {}, action) => {
    switch (action.type) {
        case STATUS_TASK:
            return (state.id !== action.id) ?
                state :
                {
                    ...state,
                    status: action.status,
                }
        case EDIT_TEXT:
            return (state.id !== action.id) ?
                state :
                {
                    ...state,
                    text: action.text,
                }
        case EDIT_TITLE:
            return (state.id !== action.id) ?
                state :
                {
                    ...state,
                    title: action.title,
                }
        default:
            return state
    }
}