import React from 'react'
import { Link } from 'react-router-dom'

function Navlink({link, label}) {
  return (
    <Link to={link} className='nav-link'>
        {label}
    </Link>
  )
}

export default Navlink