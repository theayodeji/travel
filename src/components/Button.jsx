import React from 'react'

function Button({ label, dataType, handleClick }) {
  return (
    <button className={`btn-${dataType}`} onClick={handleClick}>{label}</button>
  )
}

export default Button;