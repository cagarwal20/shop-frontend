import React from 'react';
import './header.css';
import DropdownMenu from "./hambutton";
function Header() {
  return (
    <header className="header">
      <div className="container">
        <a href="/" className="logo">
          Diya's
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

export default Header;
