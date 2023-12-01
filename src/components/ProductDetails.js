import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { useParams } from 'react-router';

const ProductDetails = () => {

    const host = "http://localhost:5000";
    const token = localStorage.getItem("token");
    const [products, setProducts] = useState([]);
    const { pid } = useParams();

    // Fetch all products
    const getAllProduct = async () => {
        try {
            const response = await fetch(`${host}/api/product/get-product`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token,
                },
            });

            if (response.ok) {
                const { success, message, products } = await response.json();

                if (success) {
                    setProducts(products);
                } else {
                    console.log("API returned unsuccessful response:", message);
                }
            } else {
                console.error("HTTP error! Status:", response.status);
            }
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    useEffect(() => {
        getAllProduct();
    }, [token]);


    const singleProduct = products.find(item => item._id === pid); // Adjust the comparison based on the type of ID
    const { name, price, description, code, bigdescription } = singleProduct || {};

    return (
        <>
            <div className="breadcrumb-links mt-5">
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mt-3">
                            <li className="breadcrumb-item"><Link style={{ color: 'black', textDecoration: 'none' }} to="/">Home</Link></li>
                            <li className="breadcrumb-item"><Link style={{ color: 'black', textDecoration: 'none' }} to="/products">Products</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Product Details</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <section className="product-showcase">
                <div className="container my-5">
                    <div className="row">
                        <div className="col col-lg-6 col-md-12 col-12 p-slider">
                            <div className="row">
                                <div className="col">
                                    <div id="robotcarousel" className="carousel slide" data-bs-ride="carousel">
                                        {singleProduct && (
                                            <div className="carousel-inner">
                                                <div className="carousel-item">
                                                    <img
                                                        className="d-block w-100"
                                                        src={`${host}/api/product/product-photo/${singleProduct._id}`}
                                                        alt="swamp"
                                                    />
                                                </div>
                                                <div className="carousel-item active">
                                                    <img
                                                        className="d-block w-100"
                                                        src={`${host}/api/product/product-photo/${singleProduct._id}`}
                                                        alt="flight"
                                                    />
                                                </div>
                                            </div>
                                        )}
                                        <button className="carousel-control-prev" type="button" data-bs-target="#robotcarousel" data-bs-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button className="carousel-control-next" type="button" data-bs-target="#robotcarousel" data-bs-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true" />
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-6 col-md-12 col-12 p-texts d-flex flex-column mt-lg-0 mt-5">
                            <h3>{name}</h3>
                            <h5>{description}</h5>
                            <span>( CODE : {code} )</span>
                            <br />
                            <p>{bigdescription}</p>
                            <h4 className="mb-4">Price: ${price}</h4>
                            <form action className="form">
                                <div className="input-group row">
                                    <p className="mb-1">STRENGTH LEVEL <span style={{ color: 'red' }}>*</span></p>
                                    <button type="button" id="str-l" className="ms-3" style={{ width: 'fit-content', marginleft: '12px', bordercolor: '#ba9d4d' }}>50mg</button>
                                </div>
                                <div className="input-group row mt-3 mx-0">
                                    <p className="mb-1 p-0">QUANTITY</p>
                                    <select name id style={{ width: '100px', borderradius: '8px', height: '40px' }}>
                                        <option value={1} selected>1</option>
                                        <option value>1</option>
                                        <option value>2</option>
                                        <option value>3</option>
                                        <option value>4</option>
                                        <option value>5</option>
                                        <option value>6</option>
                                    </select>
                                </div>
                                <button type="button" className="btn btn-primary my-4">ADD TO CART</button>
                            </form>
                        </div>
                    </div >
                    <div className="row my-5 ">
                        <div className="col">
                            <ul className="nav nav-tabs justify-content-center" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" data-bs-toggle="tab" href="#home" role="tab">
                                        <i className="now-ui-icons objects_umbrella-13" /> What's Included
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="tab" href="#profile" role="tab">
                                        <i className="now-ui-icons shopping_cart-simple" /> Product Features
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="tab" href="#messages" role="tab">
                                        <i className="now-ui-icons shopping_shop" /> Delivery
                                    </a>
                                </li>
                            </ul>
                            <div className="tab-content py-3 px-4" style={{ border: '1px solid #dddddd' }}>
                                <div className="tab-pane active" id="home" role="tabpanel">
                                    <li>1 x Elf Bar BC5000 Disposable Vape of Peach Mango Watermelon flavour</li>
                                    <li>Prefilled with 13ml E liquid</li>
                                    <li>Preinstalled battery of 650 mAh capacity</li>
                                    <li>50mg Nicotine Strength</li>
                                </div>
                                <div className="tab-pane" id="profile" role="tabpanel">
                                    <li>100% Original</li>
                                    <li>Number of Puffs: 5,000</li>
                                    <li>Coil Resistance: 0.8 Ω</li>
                                    <li>Adjustable Airflow: Standard</li>
                                    <li>Rechargeable: Yes, with a standard USB C type cable</li>
                                    <li>Use-and-throw vape kit with preinstalled battery and prefilled</li>
                                </div>
                                <div className="tab-pane" id="messages" role="tabpanel">
                                    <li>Free delivery on orders above the combined value of BDT 3,000</li>
                                    <li>For orders less than BDT 3,000 combined value, a shipping charge of BDT 75</li>
                                    <li>Same day delivery in Dhaka if ordered on a working day before 12pm</li>
                                    <li>For more details on deliveries, please <a href>click here</a></li>
                                </div>
                            </div>
                        </div>
                    </div >
                </div >
            </section >
        </>
    )
}

export default ProductDetails
