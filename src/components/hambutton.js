import React, { useState } from 'react';
import './hambutton.css';
import {HamburgerIcon} from 'react-hamburger-icon'
import {AiOutlineArrowDown} from 'react-icons/ai'
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="dropdown-menu">
      <button className="dropdown-menu-button" onClick={toggleDropdown}>
        <HamburgerIcon/>
      </button>
      {isOpen && (
        <div className="dropdown-menu-content">
          <a href="/">Home</a>
          <a href="/products/">Products</a>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
