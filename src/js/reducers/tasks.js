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
    switch (action.type) {
        case ADD_TASK:
            return [
                ...state,
                action.task,
            ]
        case EDIT_STATUS:
            return state.map(task => task.id === action.id ? {...task, status: action.status} : task)
        case REMOVE_TASK:
            return state.filter(task => task.id !== action.id)
        default:
            console.log('Get into default case', action)
            return state
    }
}

export default tasksReducer;