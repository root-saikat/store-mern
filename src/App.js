import './style.css'
import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Register from './components/Register';
import Home from './components/Home';
import Vapeguide from './components/Vapeguide';
import Alert from './components/Alert';
import Login from './components/Login';
import Service from './components/Service';
import Cart from './components/Cart';
import Footer from './components/Footer';
import ProductPage from './components/ProductPage';
import BrandsPage from './components/BrandsPage';
import ScrollToTop from './components/ScrollToTop ';
import SingleProduct from './components/SingleProduct';

function App() {

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Navbar />
      <Alert alert={alert} />
      <Routes>
        <Route exact path="/" element={<Home showAlert={showAlert}/>} />
        <Route exact path="/register" element={<Register showAlert={showAlert}/>} />
        <Route exact path="/vapeguide" element={<Vapeguide />} />
        <Route exact path="/service" element={<Service/>} />
        <Route exact path="/cart" element={<Cart/>} />
        <Route exact path="/products" element={<ProductPage/>} />
        <Route exact path="/brands" element={<BrandsPage/>} />
        <Route exact path="/singleproduct" element={<SingleProduct/>} />
        <Route exact path="/login" element={<Login showAlert={showAlert}/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
