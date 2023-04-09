

import React , {Component, useEffect} from "react";
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
import axios from "axios";
import { Carousel } from 'antd';
function ProductDetails()
{
    const { id } = useParams();
    const [data,setdata] = useState([]);
    const [loading,setloading] = useState(false);
    const [product,setproduct] = useState({});
    const sliderstyle = {
        maxWidth: "100%", maxHeight: "100%"
    }
    useEffect(() => {
    const gp = () => {
              
        axios.get(`http://localhost:8000/product_detail/?id=${id}`)
        .then(res => {
            console.log(res.data.data[0])
            setproduct(res.data.data[0])
            setloading(false)
        })
        console.log(product)
    };
    gp();
    },[]);



return (
    <div>
        <HeaderPro/>
        <Carousel autoplay>
            <div>
            <h3 className="contentStyle"><img src={product.image} style={sliderstyle}></img></h3>
            </div>
            <div>
            <h3 className="contentStyle"><img src={product.image} style={sliderstyle}></img></h3>
            </div>
            <div>
            <h3 className="contentStyle"><img src={product.image} style={sliderstyle}></img></h3>
            </div>
            <div>
            <h3 className="contentStyle"><img src={product.image} style={sliderstyle}></img></h3>
            </div>
        </Carousel>
        <div className="product-section">

        <h2 className="prod-desc">{product.name}</h2>
        <p className="prod-desc">{product.description}</p>
        
        <h2>Features</h2>
        <ul>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
        </ul>
        
        <h2>Customer Reviews</h2>
        <ul>
          <li>Review 1</li>
          <li>Review 2</li>
          <li>Review 3</li>
        </ul>
      </div>
      
      {/* Purchase section */}
      <div className="purchase-section">
        <button>Add to Cart</button>
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <button>Checkout</button>
      </div>
      
      {/* Related products section */}
      <div className="related-products-section">
        <h2>Related Products</h2>
        <ul>
          <li>Product 1</li>
          <li>Product 2</li>
          <li>Product 3</li>
        </ul>
      </div>
        <Footer/>
   </div>
);

}

export default ProductDetails;