import { ADD_TASK, EDIT_STATUS, REMOVE_TASK } from '../actions/TasksActions';

const initialState = [
    {
        id: 1,
        title: 'First task',
        text: 'This is text task',
        assignee: 'Nobody',
        status: 'TODO',
    },
    {
        id: 2,
        title: 'Second task',
        text: 'This is text task',
        assignee: 'Nobody',
        status: 'TODO',
    },
]

const tasksReducer = (state = initialState, action) => {
    console.log('Preparing for switch-case with action', action)
    switch (action.type) {
        case ADD_TASK:
            console.log('Adding task with action', action)
            return [
                ...state,
                action.task,
            ]
        case EDIT_STATUS:
            console.log('Editing status', action)
            return state.map(task => task.id === action.id ? {...task, status: action.status} : task)
        default:
            console.log('Get into default case', action)
            return state
    }
}

export default tasksReducer;