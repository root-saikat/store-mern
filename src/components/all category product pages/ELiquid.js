import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Prices } from "../routes/Prices";

const ELiquid = () => {

    const host = "http://localhost:5000";
    const token = localStorage.getItem("token");
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);
    const [checked, setChecked] = useState([]);
    const [radio, setRadio] = useState([]);

    //fetch all Brands
    const getAllBrands = async () => {
        try {
            const response = await fetch(`${host}/api/brand/get-brand`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    "auth-token": { token }
                }
            });

            if (response.ok) {
                try {
                    const responseBody = await response.json();

                    if (responseBody.success) {
                        setBrands(responseBody.brand);
                    } else {
                        console.log("API returned unsuccessful response:", responseBody.messege);
                    }
                } catch (error) {
                    console.error("Error parsing JSON:", error);
                }
            } else {
                console.error("HTTP error! Status:", response.status);
            }
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    // get same category products
    const getAllProductByCategory = async (categoryId) => {
        try {
            const response = await fetch(`${host}/api/product/get-cat-product/65467de0ad96009cf62ec85b`, {
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
        getAllBrands();
        getAllProductByCategory();
    }, [token]); 
   
    return (
        <>
            <div className="breadcrumb-links mt-5">
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link style={{ color: 'black', textDecoration: 'none' }} to="/">Home</Link></li>
                            <li className="breadcrumb-item"><Link style={{ color: 'black', textDecoration: 'none' }} to="/products">Products</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">E Liquids</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* Banner */}
            <div className="p-bnr">
                <div className="pr-banner">
                    <img src="/assets/products/e-liquid.jpg" alt="" width="100%" />
                </div>
            </div>
            {/* products section start */}
            <section className="products-all mt-5 mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-12">
                            <div className="accordion accordion-flush" id="accordionFlushExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingTwo">
                                        <h3 className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            PRICE
                                        </h3>
                                    </h2>
                                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                            <div className="input-group d-flex flex-column">
                                                {Prices?.map((p) => (
                                                    <div className="form-check" key={p._id}>
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="flexRadioDefault"
                                                            id={`flexRadioDefault${p._id}`}
                                                            value={p.array}
                                                            onChange={() => setRadio(p.array)}
                                                        />
                                                        <label className="form-check-label" htmlFor={`flexRadioDefault${p._id}`}>
                                                            {p.name}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingThree">
                                        <h3 className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            BRAND
                                        </h3>
                                    </h2>
                                    <div id="flush-collapseThree" className="accordion-collapse collapse " aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                            {brands?.map((c) => (
                                                <div key={c._id} className="form-check" onChange={(e) => (e.target.checked, c._id)}>
                                                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor={`flexCheckDefault${c._id}`}>
                                                        {c.name}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-12 pt-4">
                            <div className="container-fluid">
                                <div className="row row-cols-4 gap-4">
                                    {products?.map((product) => (
                                        <div className="col-3" key={product._id}>
                                            <div className="card" >
                                                <img src={`${host}/api/product/product-photo/${product._id}`} className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">{product.name}</h5>
                                                    <p className="card-text">{product.description.substring(0, 30)}...</p>
                                                    <h5 className="card-title">${product.price}</h5>
                                                </div>
                                                <div className="view-buy-hover gap-2">
                                                    <Link to={`/${product._id}`}><button>VIEW</button></Link>
                                                    <button>BUY</button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default ELiquid;