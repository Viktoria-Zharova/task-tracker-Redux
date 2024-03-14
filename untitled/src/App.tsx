// App.tsx
import React from 'react';
import TaskList from './components/TaskList';
import TaskInput from './components/TaskInput';
import './styles/index.css';

const App: React.FC = () => {
    return (
        <div className="App">
            <header>
            </header>
            <main className="main">
                <div className="list">
                    <div className="heading">
                        <h1>Task Tracker</h1>
                    </div>
                    <div className="menu">
                        <div className="enter">
                            <TaskInput />
                        </div>
                    </div>
                    <div className="task-list">
                        <TaskList />
                    </div>
                </div>
            </main>
            <footer>
            </footer>
        </div>
    );
};

export default App;
