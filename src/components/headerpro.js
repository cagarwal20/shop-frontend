import React from 'react';
import './headerpro.css';
import DropdownMenuDownArrow from './downarrow';
import DropdownMenu from './hambutton';
function HeaderPro() {
  return (
    <header className="header">
      <div className="container">
        <a href="/" className="logo">
          Diya's                 
        </a>
        <a className="products">
          Products
        </a>
        {/* <nav className="nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav> */}
        <DropdownMenu/>
      </div>
    </header>
  );
}

export default HeaderPro;
