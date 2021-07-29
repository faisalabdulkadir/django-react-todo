import React from 'react'
import {MdArrowForward} from 'react-icons/md'

function TaskDetails({ setShowTask, taskDetail, setEditTask }) {
  return (
    <div className="PopUp">
      <div className="pu-content-container">
        <h1>{taskDetail.title}</h1>
        <hr />
        <p className="description"><i>{taskDetail.description}</i></p>
        <blockquote>{taskDetail.time} <MdArrowForward />  {taskDetail.date} </blockquote>
      </div>
      {/* button controls */}
      <div className="pu-button-container">
        <button
          onClick={() => {
            setShowTask(false);
            setEditTask('');
          }}
          className="yes-button"
        >
          Close!
        </button>
      </div>
    </div>
  )
}

export default TaskDetails
