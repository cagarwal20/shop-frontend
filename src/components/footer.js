import React from 'react';
import './footer.css';
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaApple,FaYoutube,FaFacebook,FaTwitter,FaInstagram} from "react-icons/fa";
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="social-icons"> 
          <a href="https://www.facebook.com/" ><FaFacebook/></a>
          <a href="https://twitter.com/" target="_blank"><FaTwitter/></a>
          <a href="https://www.instagram.com/" target="_blank"><FaInstagram/></a>
          <a href="https://www.youtube.com/" target="_blank"><FaYoutube/></a>
        </div>
        <p>&copy; Diya's Collection</p>
      </div>
    </footer>
  );
}

export default Footer;
