import React from 'react'
import { MdDelete, MdEdit } from 'react-icons/md'


function Tasks({ taskList, editButton }) {
  const editBtn = (task) => {
    editButton(task);
  }
  return (
    <div>
      <ul className="todoList">
        {taskList.map((task) => (
          <li key={task.id}>{task.title}

            <i
              className="icon-edit"
              onClick={() => editBtn(task)}
            >
              <MdEdit />
            </i>
            <i className="icon-delete"><MdDelete /></i>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tasks
