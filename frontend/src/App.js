import React, { useState, useEffect } from 'react';
import './App.css';
import './css/styles.css'
import Tasks from './components/Tasks';
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';

function App() {
  const [taskList, setTaskList] = useState([]);
  const [showForm, setShowForm] = useState(false);

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
    setShowForm(!showForm)
  }
  
  return (
    <div>
      <div className="wrapper">
       <Header toggleForm={toggleForm}/>
        {showForm ? <Form />: ''}
        <Tasks taskList={taskList}/>
        <Footer taskList={taskList} />
      </div>

    </div>
  );
}

export default App;
