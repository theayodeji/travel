import React, { useState } from 'react';
import './Dropdown.css'; // Create a CSS file for styling

function Dropdown() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-trigger" onClick={toggleDropdown}>
        <span className="trigger-text">Dropdown Label</span>
        <img
          src="arrow-icon.png"
          alt="Arrow"
          className={`arrow ${isDropdownVisible ? 'rotate' : ''}`}
        />
      </div>
      {isDropdownVisible && (
        <div className="dropdown-content">
          {/* Dropdown content */}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
