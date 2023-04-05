

import React , {Component} from "react";
import { ReactDOM } from "react";
import Navbar from "./navbar";
import HeaderPro from "./headerpro";
import Footer from "./footer";
import ProductGrid from "./prodgrid";
import ProductCarousel from "./carousel";
import './products.css';
import Slideshow from "./carousel1";
function Products()
{


return (
    <div>
        <HeaderPro/>
            <ProductGrid/>
        {/* <a className="text">Best of us!</a> */}
        {/* <Slideshow/> */}
        <Footer/>
   </div>
);

}

export default Products;