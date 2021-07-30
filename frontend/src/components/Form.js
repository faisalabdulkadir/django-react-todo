import React, { useState, useEffect } from 'react'
import APIService from '../APIService'

function Form({ taskInformation, updateInformation, editTask, setShowForm, setEditTask }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  const readyToSave = title && description && date && time

  const readyToUpdate =
    (editTask.title !== title) ||
    (editTask.description !== description) ||
    (editTask.date !== date) ||
    (editTask.time !== time)

  const addTask = () => {
    onsubmit = (e) => {
      e.preventDefault()
    }
    APIService.InsertTask({ title, description, date, time })
      .then(resp => taskInformation(resp))
      .catch(error => console.log(error))
  }

  useEffect(() => {
    setTitle(editTask.title);
    setDescription(editTask.description)
    setDate(editTask.date)
    setTime(editTask.time)
  }, [editTask])

  const updateTask = () => {
    onsubmit = (e) => {
      e.preventDefault()
    }
    APIService.UpdateTask(editTask.id, { title, description, date, time })
      .then(resp => updateInformation(resp))
      .catch(error => console.log(error))
  }

  const closeForm = () => {
    onsubmit = (e) => {
      e.preventDefault();
    }

    setShowForm(false)
    setEditTask('')
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
          (<div className="update-button-section">
            <button
              type="submit"
              className={readyToUpdate ? "update-button active" : "update-button"}
              onClick={updateTask}
            >
              Update Task
            </button>
            <div className="divider" />
            <button
              type="button"
              className={"close-button"}
              onClick={closeForm}
            >
              Close
            </button>
          </div>) :
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
