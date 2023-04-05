import React, { useState } from 'react';
import './downarrowright.css';
import {AiOutlineArrowDown} from 'react-icons/ai'
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
function DropdownMenuDownArrowRight() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="dropdown-menu">
      <button className="dropdown-menu-button" onClick={toggleDropdown}>
        <AiOutlineArrowDown/> Sort By
      </button>
      {isOpen && (
        <div className="dropdown-menu-content">
          <a href="/">Relevance</a>
          <a href="/products/">Price:low to high</a>
          <a>Popularity</a>
          <a href="/">Price:High to Low</a>
          <a href="/products/">Discount: High to Low</a>
          <a href="/products/">Discount: Low to High</a>
          <a>Pants</a>
        </div>
      )}
    </div>
  );
}

export default DropdownMenuDownArrowRight;
