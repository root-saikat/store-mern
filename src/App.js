import './style.css'
import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Register from './components/Register';
import Home from './components/Home';
import Vapeguide from './components/Vapeguide';
import Alert from './components/Alert';
import Service from './components/Service';
import Cart from './components/Cart';
import Footer from './components/Footer';
import ProductPage from './components/ProductPage';
import BrandsPage from './components/BrandsPage';
import ScrollToTop from './components/ScrollToTop ';
import SingleProduct from './components/SingleProduct';
import ForgetPassword from './components/ForgetPassword';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/routes/private';
import Loginmodal from './components/Login';
import AdminRoute from './components/routes/AdminRoutes';
import AdminDashboard from './components/AdminDashboard';

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
      <ScrollToTop />
      <Navbar />
      <Alert alert={alert} />
      <Routes>
        <Route exact path="/" element={<Home setAlert={showAlert} />} />
        <Route exact path="/register" element={<Register setAlert={showAlert} />} />
        <Route exact path="/vapeguide" element={<Vapeguide />} />
        <Route exact path='/dashboard' element={<PrivateRoute/>} >
          <Route exact path="user" element={<Dashboard />} />
        </Route>
        <Route exact path='/dashboard' element={<AdminRoute/>} >
          <Route exact path="admin" element={<AdminDashboard/>} />
        </Route>
        <Route exact path="/service" element={<Service />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/products" element={<ProductPage />} />
        <Route exact path="/brands" element={<BrandsPage />} />
        <Route exact path="/singleproduct" element={<SingleProduct />} />
        <Route exact path="/login" element={<Loginmodal setAlert={showAlert} />} />
        <Route exact path="/reset-password" element={<ForgetPassword setAlert={showAlert} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
