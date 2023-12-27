import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask.trim()])
      setNewTask('')
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks]
    updatedTasks.splice(index, 1)
    setTasks(updatedTasks)
  };

  const editTask = (index) => {
    const updatedText = prompt('Edit task:', tasks[index])
    if (updatedText !== null) {
      const updatedTasks = [...tasks]
      updatedTasks[index] = updatedText
      setTasks(updatedTasks)
    }
  };

  return (
      <div>
        <h2>Todo List</h2>
        <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="New task..."
        />
        <button onClick={addTask}>Add Task</button>
        <ul>
          {tasks.map((task, index) => (
              <li key={index}>
                {task}
                <button onClick={() => deleteTask(index)}>Delete</button>
                <button onClick={() => editTask(index)}>Edit</button>
              </li>
          ))}
        </ul>
      </div>
  )
};

export default TodoList;