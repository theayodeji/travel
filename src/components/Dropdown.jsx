import React from 'react'
import Navlink from './Navlink';

function Dropdown({label, dropDownItems, arrowIcon}) {

  const dropDownItemsEl = dropDownItems.map((item, index) => {
    return <Navlink key={index} link={item.url} label={item.label}/>
  })
  return (
    <p className='dropdown-link'>
      {label}<span><img src={arrowIcon} alt="" /></span>
      {dropDownItemsEl}
    </p>
  )
}

export default Dropdown;