import React from 'react';
import './prodgrid.css';
import { useState,useEffect } from 'react';
import axios from "axios";
import {Spin} from 'antd';
import { useRef } from 'react';
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
import { FaStar} from "react-icons/fa";
import { FiStar} from "react-icons/fi";
import Rating from 'react-rating';
import DropdownMenuDownArrow from './downarrow';
import {DropdownMenuDownArrowRight} from './downarrowright';

// function RatingStars({ rating }) {
//     const fullStars = Math.floor(rating);
//     const halfStars = Math.ceil(rating - fullStars);
//     const emptyStars = 5 - fullStars - halfStars;
  
//     const stars = [];
  
//     for (let i = 0; i < fullStars; i++) {
//       stars.push(<i className="fa fa-star" key={i}></i>);
//     }
  
//     for (let i = 0; i < halfStars; i++) {
//       stars.push(<i className="fa fa-star-half-o" key={fullStars + i}></i>);
//     }
  
//     for (let i = 0; i < emptyStars; i++) {
//       stars.push(<i className="fa fa-star-o" key={fullStars + halfStars + i}></i>);
//     }
  
//     return <div className="RatingStars">{stars}</div>;
//   }
function ProductGrid() {
    const [products,setproducts] = useState([]);
    const [search,setsearch] = useState("");
    const [searchtemp,setsearchtemp] = useState([]);
    const[loading,setloading] = useState(true);
    const [rating, setRating] = useState(0);
    //const [ myArray,setmyArray ] = useState(["one", "two", "three"]);
    // const gp = (search) => {
    //     if(search){  
    //     axios.get(`http://localhost:8000/get_products/?search=${search}`)
		// .then(res => {
    //         setproducts(res.data.data)
    //         setloading(false)
		// })}
    // };
    // const gp1 = (search) => {
    //     axios.get(`http://localhost:8000/get_products/?search=${search}`)
	// 	.then(res => {
    //         console.log(res)
    //         setproducts(res.data.data)
	// 	})
    // };

    useEffect(() => {
        setloading(true)
        const gp = setTimeout(() => {      
            axios.get(`http://localhost:8000/get_products/?search=${search}`)
            .then(res => {
                setproducts(res.data.data)
                setloading(false)
            })
        },2000)
        return ()=>clearTimeout(gp)
    },[search]);
    useEffect(() => {
        const gp = () => {
              
            axios.get(`http://localhost:8000/get_products/?search=${search}`)
            .then(res => {
                setproducts(res.data.data)
                setloading(false)
            })
        };
        gp();
    },[]);
  return (
    <div>
        <input
        className='search'
      type="text"
      placeholder="Find the deal....."
      onChange={e => setsearch(e.target.value)}
      
        />
        <div className="filters">
        <div className="filter">
        <DropdownMenuDownArrow/></div>
        <div className="filter1">
        <DropdownMenuDownArrowRight relevance="true"/> 
        </div>
        </div>
        {/* <button onClick={()=>gp(search)}>Search</button> */}
       {loading ? <div className="ProductGrid"><Spin/></div> :
    <div className="ProductGrid">
      {products.map((product, index) => (
        <div className="ProductGrid-item" key={index}>
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p className="disc_price">INR{product.mrp}</p>
          <p>INR{product.sale_price}</p>
          <p className="disc">{product.disc}%</p>


          {/* <Rating
          initialRating={product.rating}
        emptySymbol={<FiStar/>}
        fullSymbol={<FaStar/>}
        onChange={(value) => setRating(value)}
      />
          <button>Add to Cart</button> */}
        </div>
      ))}
    </div>}
    </div>
  );
}

export default ProductGrid;
