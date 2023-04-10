

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
import { Button, Carousel } from 'antd';
import {Row,Col} from 'antd';
import {Card} from "antd";
import { Spin } from "antd";
function ProductDetails()
{
    const { id } = useParams();
    const [data,setdata] = useState([]);
    const [loading,setloading] = useState(false);
    const [product,setproduct] = useState({});
    const [sizes,setsizes] = useState({});
    const [proddesc , setproddesc] = useState({});
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
            setsizes(res.data.data[0].sizes)
            setproddesc(res.data.data[0].feature)
        })
        console.log(product)
    };
    gp();
    },[]);



return (
    <div>
        <HeaderPro/>
        {product.len==0 ? <Spin/>:<div>
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
          <h3 className="prod-desc1">MRP:{product.mrp}</h3>
          <h3 className="prod-desc" >Sale Price: {product.sale_price}</h3>
          <h2 className="prod-desc" style={{color:'red'}}>{product.disc}%</h2>
        <h2 className="prod-desc">Features</h2>
        <ul className="prod-desc">
        {Object.keys(proddesc).map((key) => (
            <div>
<div  style={{marginRight:'2em'}}>{proddesc[key]}</div>
</div>
))}
        </ul>
        
        <h2 className="prod-desc">Sizes</h2>
        <ul className="prod-desc">
          {/* {Object.keys(sizes).map => (
            <Button shape='circle' style={{marginRight:'2em'}}>{size.first}</Button>
          ))} */}
          {Object.keys(sizes).map((key) => (
            <div>
<Button shape='circle' style={{marginRight:'2em'}}>{key}</Button>
</div>
))}
          {/* <Button shape='circle' style={{marginRight:'2em'}}>{sizes['S']}</Button> */}
          {/* <Button shape='circle' style={{marginRight:'2em'}}>M</Button>
          <Button shape='circle' style={{marginRight:'2em'}}>L</Button>
          <Button shape='circle' style={{marginRight:'2em'}}>XL</Button> */}
        </ul>
      </div>
      
      {/* Purchase section */}
      {/* <div className="purchase-section">
        <button>Add to Cart</button>
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <button>Checkout</button>
      </div> */}
      
      {/* Related products section */}
      {/* <div className="related-products-section">
        <h2 className="prod-desc" >Related Products</h2>
      </div> */}</div>}
        <Footer/>
   </div>
);

}

export default ProductDetails;