import React, { useState } from 'react';
import './downarrowright.css';
import {AiOutlineArrowDown} from 'react-icons/ai'
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';

export function DropdownMenuDownArrowRight() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  //const [sort,setsort] = useState()
  const sortby = useSelector(state => state.sortby);
  //const [sortby , setsortby] = useState("1")
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }
  const sortchangeplh  = () =>{
    dispatch({ type: 'UPDATE_SORTBY', payload: '1' });
  }
  const sortchangephl  = () =>{
    dispatch({ type: 'UPDATE_SORTBY', payload: '2' });
   }
   const sortchangedhl  = () =>{
    dispatch({ type: 'UPDATE_SORTBY', payload: '3' });
   }
   const sortchangedlh  = () =>{
    dispatch({ type: 'UPDATE_SORTBY', payload: '4' });
   }
  return (
    <div className="dropdown-menu">
      <button className="dropdown-menu-button" onClick={toggleDropdown}>
        <AiOutlineArrowDown/> Sort By 
      </button>
      {isOpen&&(
        <div className="dropdown-menu-content">
          <Button onClick={sortchangeplh}>{sortby==1?<div className='boldtext'>Price: low to high</div>:<div>Price: low to high</div>}</Button>
          <Button onClick={sortchangephl}>{sortby==2?<div className='boldtext'>Price: high to low</div>:<div>Price: high to low</div>}</Button>
          <Button onClick={sortchangedhl}>{sortby==3?<div className='boldtext'>%off: low to high</div>:<div>%off: low to high</div>}</Button>
          <Button onClick={sortchangedlh}>{sortby==4?<div className='boldtext'>%off: high to low</div>:<div>%off: high to low</div>}</Button>
        </div>
      )}
    </div>
  );
}

export default DropdownMenuDownArrowRight;
