

import React , {Component} from "react";
import { ReactDOM } from "react";
import Navbar from "./navbar";
import Header from "./header";
import Footer from "./footer";
import Iframe from 'react-iframe';
import './homepage.css'
function HomePage()
{


return (
    <div>
        <Header/>
        {/* <div className="photo-container"> 
            <img src="https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej-1520x800.webp"
                sizes="(max-width: 960px) 100vw, 50vw"
                alt="your-image-description" />
        </div>
        <a className="text"> Why Us!</a>
        <Iframe url="https://www.sdrive.app/embed/1ptBQD"
        className="iframe"
        /> */}
        <Footer/>
    </div>
);

}

export default HomePage;