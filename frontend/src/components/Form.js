import React, { useState } from 'react'
function Form() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

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
        <button
          className="save-button"
        >
          Save Task
        </button>
      </form>
    </div>
  )
}

export default Form
