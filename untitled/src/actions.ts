import { TaskActionTypes, ADD_TASK, DELETE_TASK, TOGGLE_TASK } from './types';

export const addTask = (text: string): TaskActionTypes => {
    return {
        type: ADD_TASK,
        payload: text,
    };
};

export const deleteTask = (index: number): TaskActionTypes => {
    return {
        type: DELETE_TASK,
        payload: index,
    };
};

export const toggleTask = (index: number): TaskActionTypes => {
    return {
        type: TOGGLE_TASK,
        payload: index,
    };
};
