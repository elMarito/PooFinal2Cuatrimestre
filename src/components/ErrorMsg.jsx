import React from 'react'

const ErrorMsg = (text) => {
  const handleClick = () => { /* closedialog */};
  return (
    <dialog>
      <div><h2>⛔ Error</h2></div>
      <line />
      <div><p>{text}</p></div>
      <button onClick={handleClick}></button>
    </dialog>
  )
}

export default ErrorMsg