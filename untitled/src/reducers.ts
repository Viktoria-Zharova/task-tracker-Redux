import { TaskActionTypes, TaskState, ADD_TASK, DELETE_TASK, TOGGLE_TASK } from './types';

const initialState: TaskState = {
    tasks: [],
};

const rootReducer = (state: TaskState = initialState, action: TaskActionTypes): TaskState => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, { text: action.payload, completed: false }],
            };
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter((_, index) => index !== action.payload),
            };
        case TOGGLE_TASK:
            return {
                ...state,
                tasks: state.tasks.map((task, index) =>
                    index === action.payload ? { ...task, completed: !task.completed } : task
                ),
            };
        default:
            return state;
    }
};

export default rootReducer;
