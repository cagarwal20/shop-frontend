import React, { useState } from 'react';
import './downarrow.css';
import {AiOutlineArrowDown} from 'react-icons/ai'
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
function DropdownMenuDownArrow(props) {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const category = useSelector(state => state.category);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }
  const catchangeall  = () =>{
    dispatch({ type: 'UPDATE_CATEGORY', payload: '1' });
  }
  const catchangekurtis  = () =>{
    dispatch({ type: 'UPDATE_CATEGORY', payload: '2' });
   }
   const catchangeleggings  = () =>{
    dispatch({ type: 'UPDATE_CATEGORY', payload: '3' });
   }
   const catchangeacc  = () =>{
    dispatch({ type: 'UPDATE_CATEGORY', payload: '4' });
   }
  return (
    <div className="dropdown-menu">
      <button className="dropdown-menu-button" onClick={toggleDropdown}>
        <AiOutlineArrowDown/> Categories
      </button>
      {isOpen && (
        <div className="dropdown-menu-content">
          <Button onClick={catchangeall}>{category==1?<div className='boldtext'>ALL</div>:<div>ALL</div>}</Button>
          <Button onClick={catchangekurtis}>{category==2?<div className='boldtext'>KURTIS</div>:<div>KURTIS</div>}</Button>
          <Button onClick={catchangeleggings}>{category==3?<div className='boldtext'>LEGGINGS</div>:<div>LEGGINGS</div>}</Button>
          <Button onClick={catchangeacc}>{category==4?<div className='boldtext'>ACCESSORIES</div>:<div>ACCESSORIES</div>}</Button>
        </div>
      )}
    </div>
  );
}

export default DropdownMenuDownArrow;
