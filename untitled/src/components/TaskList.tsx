import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RootState from "../reducers";
import { deleteTask, toggleTask } from '../actions';

const TaskList: React.FC = () => {
    const tasks = useSelector((state: RootState) => state.tasks);
    const dispatch = useDispatch();

    const handleDeleteTask = (index: number): void => {
        dispatch(deleteTask(index));
    };

    const handleToggleTask = (index: number): void => {
        dispatch(toggleTask(index));
    };

    return (
        <ul className="task-list">
            {tasks.map((task, index) => (
                <li key={index}>
                    <label>
                        <input type="checkbox" checked={task.completed} onChange={() => handleToggleTask(index)} />
                        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</span>
                    </label>
                    <button onClick={() => handleDeleteTask(index)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
