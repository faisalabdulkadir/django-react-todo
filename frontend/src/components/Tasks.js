import React from 'react'
import { MdDelete, MdEdit, MdPageview } from 'react-icons/md'

function Tasks({ taskList, editButton, deleteButton, viewTask }) {

  const editBtn = (task) => {
    editButton(task);
  }

  const deleteBtn = (task) => {
    deleteButton(task);
  }

  const viewTaskDetail = (task) => {
    viewTask(task);
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
            <i
              className="icon-delete"
              onClick={() => deleteBtn(task)}
            >
              <MdDelete />
            </i>
            <i
              className="icon-view"
              onClick={() => viewTaskDetail(task)}
            >
              <MdPageview />
            </i>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tasks
