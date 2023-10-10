import React from 'react'
import Dropdown from './Dropdown'
import dropdownArrow from "../assets/dropdown-arrow.png"
import Button from "./Button"

function SearchBooking() {
  return (
    <div className='search-booking'>
      <input type="text" placeholder="Where To?"/>
      <Dropdown arrowIcon={dropdownArrow} label={"Travel Type"} />
      <Dropdown arrowIcon={dropdownArrow} label={"Duration"} />
      <Button dataType={"primary"} label={"Submit"} handleClick={() => {return}} />
    </div>
  )
}

export default SearchBooking