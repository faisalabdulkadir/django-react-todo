import React from 'react'

function Footer({ taskList }) {
  return (
    <div>
      <div className="footer">
        <span>You have ( <span className="pendingTasks">{taskList.length}</span> ) pending tasks</span>
      </div>
    </div>
  )
}

export default Footer
