import React from 'react'
import Dropdown from './Dropdown'
import dropdownArrow from "../assets/dropdown-arrow.png"
import Button from "./Button"

function SearchBooking() {

  const traveltypes = [{label:"Tourism", url:"/"},
                       {label:"Holiday", url:"/"},
                       {label:"Honeymoon", url:"/"},
                       {label:"Business", url:"/"},
                       {label:"Religous", url:"/"},
                      ]
  const Duration = [{label:"8 days", url:"/"},
                       {label:"15 days", url:"/"},
                       {label:"21 days", url:"/"},
                       {label:"1 month", url:"/"},
                       {label:"Summer", url:"/"},
                      ]

  return (
    <div className='search-booking'>
      <input type="text" placeholder="Where To?"/>
      <Dropdown arrowIcon={dropdownArrow} label={"Travel Type"} dropDownItems={traveltypes}/>
      <Dropdown arrowIcon={dropdownArrow} label={"Duration"} dropDownItems={Duration}/>
      <Button dataType={"primary"} label={"Submit"} handleClick={() => {return}} />
    </div>
  )
}

export default SearchBooking