import React, { useState } from 'react';
import './downarrow.css';
import {AiOutlineArrowDown} from 'react-icons/ai'
import { Button } from 'antd';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
function DropdownMenuDownArrow(props) {
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
          <a>Kurtis</a>
          <a>Kurtis</a>
          <a>Kurtis</a>
          <a>Kurtis</a>
        </div>
      )}
    </div>
  );
}

export default DropdownMenuDownArrow;
