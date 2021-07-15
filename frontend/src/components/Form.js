import React from 'react'
import { BiListPlus } from 'react-icons/bi'
function Form() {
  return (
    <div>
      <div className="inputField">
        <input type="text" placeholder="Add your new todo" />
        <button><i className="fas fa-plus"><BiListPlus /></i></button>
      </div>
    </div>
  )
}

export default Form
