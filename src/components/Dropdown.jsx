import React, { useEffect, useRef, useState } from "react";
import Navlink from "./Navlink";

function Dropdown({ label, dropDownItems, arrowIcon }) {

  const dropDownItemsEl = dropDownItems.map((item, index) => {
    return <Navlink key={index} link={item.url} label={item.label} />;
  });

const [isDropdownVisible, setDropdownVisible] = useState(false);
const dropdownRef = useRef(null);

const toggleDropdown = () => {
  setDropdownVisible(!isDropdownVisible);
};

useEffect(() => {
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownVisible(false);
    }
  };

  document.addEventListener('mousedown', handleClickOutside);

  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, []);



  return (
    <div className="dropdown" ref={dropdownRef}>
      <div className="dropdown-link" onClick={toggleDropdown}>
        <div className="dropdown-trigger">
          {label}
          <span>
            <img className={`arrow ${isDropdownVisible ? 'opened' : ''}`} src={arrowIcon} alt="" />
          </span>
        </div>

        {isDropdownVisible && <span className="dropdown-items"> {dropDownItemsEl}</span>}
      </div>
    </div>
  );
}

export default Dropdown;
