import React, { useState, useEffect } from 'react';
import './App.css';
import './css/styles.css'
import Tasks from './components/Tasks';
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';
import PopUp from './components/PopUp';
import TaskDetails from './components/TaskDetails';

function App() {
  const [taskList, setTaskList] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editTask, setEditTask] = useState('');
  const [popUp, setPopUp] = useState(false);
  const [showTask, setShowTask] = useState(false);

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

  const toggleForm = () => {
    setShowForm(!showForm);
    setEditTask('');
  }

  const taskInformation = (task) => {
    setTaskList([...taskList, task]);
    setShowForm(false);
  }

  const editButton = (task) => {
    setEditTask(task);
    setShowForm(true);
  }

  const updateInformation = (task) => {
    const newTask = taskList.map((taskItem) => {
      if (taskItem.id === task.id) {
        return task;
      }
      return taskItem;
    })
    setTaskList(newTask);
    setShowForm(false);
    setEditTask('');
  }

  const deleteButton = (task) => {
    setPopUp(true);
    setEditTask(task);

  }

  const deleteInformation = (task) => {
    const newData = taskList.filter((myTask) =>
      myTask.id !== task.id)

    setTaskList(newData);
    setPopUp(false);
    setEditTask('');
  }

  const viewTask = (task) => {
    setShowTask(true);
    setEditTask(task);
  }

  const duringPopUp = popUp ? " during-popup" : ""

  return (
    <div>
      <div className={"wrapper" + duringPopUp}>
        <Header toggleForm={toggleForm} />
        {showForm ?
          <Form
            taskInformation={taskInformation}
            editTask={editTask}
            updateInformation={updateInformation}
            setShowForm={setShowForm}
            setEditTask={setEditTask}
          /> : ''}
        {taskList.length === 0 ?
          <p>No task to display</p> :
          (<Tasks
            taskList={taskList}
            editButton={editButton}
            deleteButton={deleteButton}
            viewTask={viewTask}
          />)}
        {popUp ?
          <PopUp
            setPopUp={setPopUp}
            editTask={editTask}
            deleteInformation={deleteInformation}
          /> : ''}
        {showTask ?
          <TaskDetails
            setShowTask={setShowTask}
            taskDetail={editTask}
            setEditTask={setEditTask} /> :
          ''}
        <Footer taskList={taskList} />
      </div>
    </div>
  );
}

export default App;
