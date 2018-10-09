import {ADD_TASK} from '../actions/TasksActions';

const initialState = {
    tasks: [
        {
            id: 1,
            title: 'First task',
            text: 'This is text task',
            assignee: 'Nobody',
            status: 'TODO'
        }
    ]
}

export const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    action.task
                ]
            }
        default:
            return state
    }
}