import React from 'react'
import APIService from '../APIService';

function PopUp({ setPopUp, editTask, deleteInformation }) {


  const deleteTask = () => {
    onsubmit = (e) => {
      e.preventDefault();
    }
    APIService.DeleteTask(editTask.id)
      .then(() => deleteInformation(editTask))
      .catch(error => console.log(error))
    setPopUp(false);

  }

  return (
    <div className="PopUp">
      <div className="pu-content-container">
        <h1>Delete</h1>
        <hr />
        <p>Do you want to delete this task?</p>
      </div>
      {/* button controls */}
      <div className="pu-button-container">
        <button
          onClick={deleteTask}
          className="yes-button"
        >
          Yes!
        </button>
        <button
          onClick={() => setPopUp(false)}
          className="no-button"
        >
          No
        </button>
      </div>
    </div>
  )
}

export default PopUp
