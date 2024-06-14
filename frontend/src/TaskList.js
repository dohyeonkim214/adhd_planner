import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState({ description: '', dueDate: '' });

    useEffect(() => {
        axios.get('/tasks')
            .then(response => setTasks(response.data))
            .catch(error => console.error('Error fetching tasks:', error));
    }, []);

    const handleInputChange = (e) => {
        setNewTask({ ...newTask, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        axios.post('/tasks', newTask)
            .then(response => {
                setTasks([...tasks, response.data]);
                setNewTask({ description: '', dueDate: '' });
            })
            .catch(error => console.error('Error adding task:', error));
    };

    return (
        <div>
            <h1>ToDo List</h1>
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    name="description"
                    value={newTask.description}
                    onChange={handleInputChange}
                    placeholder="New task description"
                    required
                />
                <input
                    type="date"
                    name="dueDate"
                    value={newTask.dueDate}
                    onChange={handleInputChange}
                    required
                />
                <button type="submit">Add Task</button>
            </form>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <input type="checkbox" defaultChecked={task.isCompleted} />
                        {task.description} - {task.dueDate}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
