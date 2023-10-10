import React from 'react'

function Navlink({link, label}) {
  return (
    <a href={link} className='nav-link'>
        {label}
    </a>
  )
}

export default Navlink