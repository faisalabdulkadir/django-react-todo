import React from 'react'
import { MdDelete, MdEdit } from 'react-icons/md'


function Tasks({taskList}) {
  return (
    <div>
      <ul className="todoList">
        {taskList.map((task) => (
          <li key={task.id}>{task.title}

            <i className="icon-edit"><MdEdit /></i>
            <i className="icon-delete"><MdDelete /></i>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tasks
