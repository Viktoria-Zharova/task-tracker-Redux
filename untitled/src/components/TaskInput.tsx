// TaskInput.tsx
import React, { useState, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions';

const TaskInput: React.FC = () => {
    const [taskText, setTaskText] = useState<string>('');

    const dispatch = useDispatch();

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTaskText(event.target.value);
    };

    const handleEnterTask = () => {
        if (taskText.trim() !== '') {
            dispatch(addTask(taskText));
            setTaskText('');
        } else {
            alert('Add your task, please');
        }
    };

    return (
        <div className="#task-input"> {/* Исправлено здесь */}
            <input type="text" value={taskText} onChange={handleInputChange} placeholder="Enter the task" />
            <button onClick={handleEnterTask}>Enter</button>
        </div>
    );
};

export default TaskInput;
