import React, { useState } from 'react';
import './downarrow.css';
import {AiOutlineArrowDown} from 'react-icons/ai'
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
function DropdownMenuDownArrow() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="dropdown-menu">
      <button className="dropdown-menu-button" onClick={toggleDropdown}>
        <AiOutlineArrowDown/> Categories
      </button>
      {isOpen && (
        <div className="dropdown-menu-content">
          <a href="/">Kurtis</a>
          <a href="/products/">Salwars</a>
          <a>Pants</a>
        </div>
      )}
    </div>
  );
}

export default DropdownMenuDownArrow;
