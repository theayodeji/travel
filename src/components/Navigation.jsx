import React from 'react'
import Dropdown from './Dropdown';
import Navlink from "./Navlink"

function Navigation() {
    const links = [
        {label:"Home", url:"/", isDropDown:false},
        {label:"About", url:"/about", isDropDown:false},
        {label:"Services", url:"/services", isDropDown:true, dropDownItems:[
            {label: "Honeymoon Packages", url: "/"},
            {label: "Tours Packages", url: "/"},
            {label: "Musical Events", url: "/"},
            {label: "Build Package", url: "/"}
        ]},
        {label:"Upcoming Packages", url:"/services", isDropDown:false}
    ];

    const navItems = links.map((item, index) => {
        if (item.isDropDown) {
            return <Dropdown key={index} label={item.label} dropDownItems={item.dropDownItems}/>
        }
        else{
            return <Navlink key={index} label={item.label} url={item.url}/>
        }
    })

  return (
    navItems
  )
}

export default Navigation