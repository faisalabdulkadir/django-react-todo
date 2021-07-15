import React from 'react'

function Footer({taskList}) {
  return (
    <div>
      <div className="footer">
        <span>You have ( <span className="pendingTasks">{taskList.length}</span> ) pending tasks</span>
        <button>Clear All</button>
      </div>
    </div>
  )
}

export default Footer
