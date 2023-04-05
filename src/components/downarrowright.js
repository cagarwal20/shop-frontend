import React, { useState } from 'react';
import './downarrowright.css';
import {AiOutlineArrowDown} from 'react-icons/ai'
import { Button } from 'antd';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
//export const sortby = "1";
export function DropdownMenuDownArrowRight() {
  const [isOpen, setIsOpen] = useState(false);
  const [sort,setsort] = useState()
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }
  const sortchange  = (value) =>{
    setsort({value:"true"})
  }
  return (
    <div className="dropdown-menu">
      <button className="dropdown-menu-button" onClick={toggleDropdown}>
        <AiOutlineArrowDown/> Sort By 
      </button>
      {isOpen&&(
        <div className="dropdown-menu-content">
          <a>Price: low to high</a>
          <a>Price: high to low</a>
          <a>Discount: high to low</a>
          <a>Discount:low to high</a>
        </div>
      )}
    </div>
  );
}
export default  DropdownMenuDownArrowRight;
