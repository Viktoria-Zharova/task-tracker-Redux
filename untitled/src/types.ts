export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';

export interface Task {
    text: string;
    completed: boolean;
}

export interface TaskState {
    tasks: Task[];
}

export interface AddTaskAction {
    type: typeof ADD_TASK;
    payload: string;
}

export interface DeleteTaskAction {
    type: typeof DELETE_TASK;
    payload: number;
}

export interface ToggleTaskAction {
    type: typeof TOGGLE_TASK;
    payload: number;
}

export type TaskActionTypes = AddTaskAction | DeleteTaskAction | ToggleTaskAction;
