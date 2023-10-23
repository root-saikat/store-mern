import React, { useEffect, useState } from 'react';
import logo from '../assets/vs-new-logo.png';
import { Link, useNavigate } from "react-router-dom";
import jwt_decode from 'jwt-decode';


const Navbar = () => {

    let navigate = useNavigate();

    const authtoken = localStorage.getItem('token'); // Get the authentication token
    const [userName, setUserName] = useState('');

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate("/");
    }

    useEffect(() => {

        if (authtoken) {
            try {
                const decodedToken = jwt_decode(authtoken); // You may need to import jwt_decode
                setUserName(decodedToken.user.name);
            } catch (error) {
                console.error("Error decoding token:", error);
            }
        }

        // mobile menu
        const mbOpen = document.getElementById('mb-open');
        const mbclose = document.getElementById('mbm-x');
        const mbMenu = document.getElementById('mb-mnu');

        if (mbOpen) {
            mbOpen.addEventListener('click', () => {
                mbMenu.style.display = "flex";
            });
        }

        if (mbclose) {
            mbclose.addEventListener('click', () => {
                mbMenu.style.display = "none";
            });
        }

        // cart popup
        const cartPopup = document.getElementById('cart-popup');
        const showCart = document.getElementById('cart');
        const CartSd = document.getElementById('cart-s-d');
        const contShop = document.getElementById('cont-shop');

        if (cartPopup && showCart) {
            showCart.addEventListener('click', () => {
                cartPopup.style.display = "flex";
                // CartSd.innerHTML = `1 ITEM BDT 5468`;
            });
        }

        const xcart = document.getElementById('x-mark');
        if (xcart) {
            xcart.addEventListener('click', () => {
                cartPopup.style.display = "none";
            });
        }

        if (contShop) {
            contShop.addEventListener('click', () => {
                cartPopup.style.display = "none";
            });
        }

        // Function to hide the cartPopup
        const hideCartPopup = () => {
            if (cartPopup && cartPopup.style.display === 'flex') {
                cartPopup.style.display = 'none';
            }
        };

        // Function to show the cartPopup
        const showCartPopup = () => {
            if (cartPopup && cartPopup.style.display === 'none') {
                cartPopup.style.display = 'flex';
                CartSd.innerHTML = `1 ITEM BDT 5468`;
            }
        };

        // Add a click event listener to the document
        document.addEventListener('click', (event) => {
            // Check if the click target is NOT inside the cartPopup or showCart
            if (!cartPopup.contains(event.target) && event.target !== showCart) {
                // Hide the cartPopup
                hideCartPopup();
            }
        });

        // Add a click event listener to show the cartPopup when the cart is clicked
        if (showCart) {
            showCart.addEventListener('click', (event) => {
                // Show the cartPopup
                showCartPopup();
                // Stop the click event from propagating to the outside click event listener
                event.stopPropagation();
            });
        }

        // Cleanup function to remove the event listeners
        return () => {
            document.removeEventListener('click', hideCartPopup);
            if (showCart) {
                showCart.removeEventListener('click', showCartPopup);
            }
        };

    }, [authtoken]); // Empty dependency array ensures this code runs after component mount



    return (
        <>
            <header className="customhead-header-container">
                <div className="container-fluid p-2">
                    <div className="row">
                        <div className="col header-full">
                            <div className="row header-top">
                                <div className="col">
                                    <div className="container-fluid d-flex px-lg-5 px-sm-0 justify-content-between">
                                        <div className="top-left row align-items-center">
                                            <div className="col pr-0 for-after">
                                                <div className="same-day-delivary">
                                                    <Link to="/"><span>SAME DAY DELIVERY</span></Link>
                                                </div>
                                            </div>
                                            <div className="col pl-0 pr-0 for-after text-center">
                                                <div className="free-shipping">
                                                    <Link to="/"><span>FREE DELIVERY</span></Link>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="search-box d-flex gap-1 align-items-center">
                                                    <i className="fa-solid fa-magnifying-glass"></i>
                                                    <input type="search" placeholder="Search"
                                                        className="form-control-plaintext text-white form-control-sm ml-1 px-1 inh" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="top-right row">
                                            <div className="col d-flex align-items-center ">
                                                {!localStorage.getItem('token') ? <div className="login-reg d-flex align-content-center align-items-center gap-1">
                                                    <i className="fa-solid fa-user pr-2"></i>
                                                    <Link to="/login">
                                                        <span className="p-1 login-btn">LOGIN</span>
                                                    </Link>
                                                    <span style={{ color: 'white' }}>/</span>
                                                    <Link to="/register">
                                                        <span className="p-1">REGISTER</span>
                                                    </Link>
                                                </div> : <>
                                                    <li className="nav-item dropdown d-flex">
                                                        <Link className="dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <span className="p-1 login-btn">{userName}</span>
                                                        </Link>
                                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                            <li><Link className="dropdown-item text-dark text-center" to="/dashboard">DashBoard</Link></li>
                                                            <li className='d-flex align-items-center justify-content-center mt-2'><button onClick={handleLogout} className="btn btn-warning btn-sm mx-1" >Logout</button></li>
                                                        </ul>
                                                    </li>
                                                    
                                                </>}
                                            </div>
                                            <div className="col d-flex align-items-center cart-sect">
                                                <div className="cart d-flex align-items-center gap-2" id="cart">
                                                    <i className="fa-solid fa-cart-shopping"></i>
                                                    <span className="text-white" id="cart-s-d" style={{ cursor: 'pointer' }}>0 ITEM BDT O</span>
                                                </div>
                                                {/* cart popup start */}
                                                <div className="cart-popup flex-column gap-1 bg-white" id="cart-popup">
                                                    <div className="row">
                                                        <div className="col text-white bg-primary-color text-center p-3">
                                                            <h3>RECENTLY ADDED ITEMS</h3>
                                                            <i className="fa-solid fa-xmark" id="x-mark"></i>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col bg-dark d-flex gap-2 p-3">
                                                            <div className="cart-item-img" style={{ width: '50px', height: '50px' }}>
                                                                <img src="../assets/products/strawberry_mango.jpg" alt="" width="100%" height="100%" />
                                                            </div>
                                                            <div className="desc">
                                                                <h6>Item Name</h6>
                                                                <span>Quantity 1</span>
                                                            </div>
                                                            <div className="price">
                                                                <h6>BDT: 5468</h6>
                                                                <i className="fa-solid fa-trash"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col bg-dark p-3 text-center">
                                                            <h3>CART SUBTOTAL: BDT 5,468</h3>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col bg-dark p-3 text-center">
                                                            <h3>OTHER CHARGES: BDT 0</h3>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col bg-dark d-flex gap-2 p-3">
                                                            <Link to="/cart">
                                                                <button className="btn btn-primary" style={{ fontSize: '13px', whiteSpace: 'nowrap' }}>VIEW CART</button>
                                                            </Link>
                                                            <button id="cont-shop" className="btn btn-primary" style={{ fontSize: '13px', whiteSpace: 'nowrap' }}>CONTINUE SHOPPING</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row header-nav-links">
                                <div className="col container-fluid">
                                    <ul className="d-flex justify-content-center">
                                        <li className="hover-able">
                                            <Link to="/products">
                                                <span>PRODUCTS</span> <i className="fa-solid fa-sort-down"></i>
                                            </Link>
                                            <div className="hover-products p-3">
                                                <div className="row pl-2">
                                                    <div className="col-6">
                                                        <Link to="/"><h3>Disposable Vapes</h3></Link>
                                                        <ul>
                                                            <Link to="/"><h3>E-Chigarette Kits</h3></Link>
                                                            <li><Link to="/">vape pans</Link></li>
                                                            <li><Link to="/">vape pans</Link></li>
                                                        </ul>
                                                        <ul>
                                                            <Link to="/"><h3>E-Chigarette Kits</h3></Link>
                                                            <li><Link to="/">vape pans</Link></li>
                                                            <li><Link to="/">vape pans</Link></li>
                                                        </ul>
                                                        <ul>
                                                            <Link to="/"><h3>E-Chigarette Kits</h3></Link>
                                                            <li><Link to="/">vape pans</Link></li>
                                                            <li><Link to="/">vape pans</Link></li>
                                                        </ul>
                                                        <Link to="/"><h3>Heat Not Burn</h3></Link>
                                                    </div>
                                                    <div className="col-6">
                                                        <Link to="/"><h3>Newest Arival</h3></Link>
                                                        <ul>
                                                            <Link to="/"><h3>E-Chigarette Kits</h3></Link>
                                                            <li><Link to="/">vape pans</Link></li>
                                                            <li><Link to="/">vape pans</Link></li>
                                                        </ul>
                                                        <ul>
                                                            <Link to="/"><h3>E-Chigarette Kits</h3></Link>
                                                            <li><Link to="/">vape pans</Link></li>
                                                            <li><Link to="/">vape pans</Link></li>
                                                        </ul>
                                                        <ul>
                                                            <Link to="/"><h3>E-Chigarette Kits</h3></Link>
                                                            <li><Link to="/">vape pans</Link></li>
                                                            <li><Link to="/">vape pans</Link></li>
                                                        </ul>
                                                        <Link to="/"><h3>Heat Not Burn</h3></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="hover-able2">
                                            <Link to="/brands">
                                                <span>BRANDS</span> <i className="fa-solid fa-sort-down"></i>
                                            </Link>
                                            <div className="hover-brands p-2">
                                                <div className="row">
                                                    <div className="col-6 text-center">
                                                        <ul>
                                                            <li><Link to="">vape pans</Link></li>
                                                            <li><Link to="">vape pans</Link></li>
                                                            <li><Link to="">vape pans</Link></li>
                                                            <li><Link to="">vape pans</Link></li>
                                                            <li><Link to="">vape pans</Link></li>
                                                            <li><Link to="">vape pans</Link></li>
                                                            <li><Link to="">vape pans</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-6 text-center">
                                                        <ul>
                                                            <li><Link to="">vape pans</Link></li>
                                                            <li><Link to="">vape pans</Link></li>
                                                            <li><Link to="">vape pans</Link></li>
                                                            <li><Link to="">vape pans</Link></li>
                                                            <li><Link to="">vape pans</Link></li>
                                                            <li><Link to="">vape pans</Link></li>
                                                            <li><Link to="">vape pans</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                <img src={logo} alt="" width="114" height="auto" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/vapeguide">
                                                <span>VAPE GUIDE</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/service">
                                                <span>CUSTOMAR SERVICE</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row for-mobil-menu-row">
                                <div className="col ">
                                    <div className="container d-flex justify-content-between">
                                        <div className="sm-menu-icon">
                                            <i className="fa-solid fa-bars" id="mb-open"></i>
                                            <div className="mobile-side-menu" id="mb-mnu">
                                                <div className="container d-flex flex-column justify-content-center align-items-center gap-3">
                                                    <i className="fa-solid fa-xmark mbm-xmark" id="mbm-x"></i>
                                                    <li>
                                                        <Link to="/">
                                                            <span>Home</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/products">
                                                            <span>Products</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/brands">
                                                            <span>Brands</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/vapeguide">
                                                            <span>VAPE GUIDE</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/service">
                                                            <span>CUSTOMAR SERVICE</span>
                                                        </Link>
                                                    </li>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sm-logo" style={{ height: '50px', marginTop: '-40px', marginLeft: '45px' }}>
                                            <Link to="/"><img src={logo} alt="" height="100%" /></Link>
                                        </div>
                                        <div className="sm-right-icons d-flex gap-3 align-items-center">
                                            <Link to="/register"><i className="fa-solid fa-user"></i></Link>
                                            <Link to="/cart"><i className="fa-solid fa-cart-shopping" id="mobile-cart"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar;
