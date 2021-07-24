import React, { useState } from 'react'
import APIService from '../APIService'

function Form({ taskInformation, updateInformation, editTask }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  const readyToSave = title && description && date && time

  const addTask = () => {
    onsubmit = (e) => {
      e.preventDefault()
    }
    APIService.InsertTask({ title, description, date, time })
      .then(resp => taskInformation(resp))
      .catch(error => console.log('error adding task'))
  }

  const updateTask = (task) => {
    updateInformation(task)

  }

  return (
    <div className="inputField">
      <form>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          placeholder="Add your new title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <label htmlFor="description">Description</label>
        <textarea
          id="descripton"
          rows="5"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
        <label htmlFor="time">Time</label>
        <input
          type="time"
          id="time"
          value={time}
          onChange={e => setTime(e.target.value)}
        />
        {editTask.id ?
          (<button
            className={readyToSave ? "save-button active" : "save-button"}
            onClick={(task) => updateTask(task)}
          >
            Update Task
          </button>) :
          (<button
            className={readyToSave ? "save-button active" : "save-button"}
            onClick={addTask}
          >
            Save Task
          </button>)
        }
      </form>
    </div>
  )
}

export default Form
