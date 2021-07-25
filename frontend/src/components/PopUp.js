import React from 'react'

function PopUp(props) {
  const { setPopUp } = props;

  return (
    <div className="PopUp">
      <div className="pu-content-container">
        <h1>Delete</h1>
        <hr />
        <p>Do you want to delete this task?</p>
      </div>
      {/* button controls */}
      <div className="pu-button-container">
        <button
          onClick={() => setPopUp(false)}
          className="yes-button"
        >
          Yes!
        </button>
        <button
          onClick={() => setPopUp(false)}
          className="no-button"
        >
          No
        </button>
      </div>
    </div>
  )
}

export default PopUp
