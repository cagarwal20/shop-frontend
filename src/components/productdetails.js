

import React , {Component} from "react";
import { ReactDOM } from "react";
import Navbar from "./navbar";
import HeaderPro from "./headerpro";
import Footer from "./footer";
import ProductGrid from "./prodgrid";
import ProductCarousel from "./carousel";
import './productdetails.css';
import Slideshow from "./carousel1";
import { useState } from "react";
import { useParams } from 'react-router-dom';
function ProductDetails()
{
    const { id } = useParams();
    const [data,setdata] = useState([]);



return (
    <div>
        <HeaderPro/>
            <h>{id}</h>
            {/* <ProductGrid/> */}
        {/* <a className="text">Best of us!</a> */}
        {/* <Slideshow/> */}
        <Footer/>
   </div>
);

}

export default ProductDetails;