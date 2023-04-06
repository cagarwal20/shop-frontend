import logo from './logo.svg';
import './App.css';
import HomePage from './components/homepage';
import Products from './components/products';
import ProductDetails from './components/productdetails';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/products/" element={<Products/>} />
        <Route path="/product-details/:id" element={<ProductDetails/>}/>
      </Routes>
  </BrowserRouter> 
  
  );
}

export default App;
