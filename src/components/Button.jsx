import React from 'react'

function Button({ dataType }) {
  return (
    <div className={`btn-${dataType}`}>Button</div>
  )
}

export default Button