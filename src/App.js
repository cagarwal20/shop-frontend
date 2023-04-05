import logo from './logo.svg';
import './App.css';
import HomePage from './components/homepage';
import Products from './components/products';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/products/" element={<Products/>} />
      </Routes>
  </BrowserRouter> 
  
  );
}

export default App;
