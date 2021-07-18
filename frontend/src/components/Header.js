import React from 'react'
import { BiListPlus } from 'react-icons/bi'

function Header({toggleForm}) {

  return (
    <div className="header-section">
      <header>Todo App</header>
      <button
        className="icon"
        onClick={toggleForm}
      >
        <i className="fas fa-plus"><BiListPlus /></i>
      </button>
    </div>
  )
}

export default Header
