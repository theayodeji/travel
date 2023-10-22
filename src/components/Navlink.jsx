import React from 'react'
import { Link } from 'react-router-dom'

function Navlink({url, label}) {
  return (
    <Link to={url}  className='nav-link'>
        {label}
    </Link>
  )
}

export default Navlink