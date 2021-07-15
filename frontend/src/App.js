import React, { useState, useEffect } from 'react';
import './App.css';
import './css/styles.css'
import { BiListPlus } from 'react-icons/bi'
import { MdDelete, MdEdit } from 'react-icons/md'

function App() {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/todos', {
      'method': 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(response => response.json())
      .then(response => setTaskList(response))
      .catch(error => console.log(error))
  }, [])
  return (
    <div>
      <div className="wrapper">
        <header>Todo App</header>
        <div className="inputField">
          <input type="text" placeholder="Add your new todo" />
          <button><i className="fas fa-plus"><BiListPlus /></i></button>
        </div>
        <ul className="todoList">
          {taskList.map((task) => (
            <li key={task.id}>{task.title}

                <i className="icon-edit"><MdEdit /></i>
                <i className="icon-delete"><MdDelete /></i>
            </li>
          ))}
        </ul>
        <div className="footer">
          <span>You have ( <span className="pendingTasks">{taskList.length}</span> ) pending tasks</span>
          <button>Clear All</button>
        </div>
      </div>

    </div>
  );
}

export default App;
