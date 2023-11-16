import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BrandsPage = () => {

    const host = "http://localhost:5000";
    const token = localStorage.getItem("token");
    const [brands, setBrands] = useState([]);
    const [products, setProducts] = useState([]);

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

    useEffect(() => {
        getAllBrands();
        getAllProduct();
    }, [token]);


    return (
        <>
            <div className="breadcrumb-links mt-5">
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link style={{ color: 'black', textDecoration: 'none' }} to="/">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Brands</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div className="p-bnr">
                <div className="pr-banner">
                    <img src="./assets/products/brands.jpg" alt="" width="100%" />
                </div>
            </div>
            <section className="products-all brands-all mt-5 mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-12">
                            <div className="accordion accordion-flush" id="accordionFlushExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingOne">
                                        <h3 className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            BRANDS
                                        </h3>
                                    </h2>
                                    <div id="flush-collapseOne" className="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
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
                                <div className="accordion-item">
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
                                                        <Link to={`/singleproduct/${product._id}`}><button>VIEW</button></Link>
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
            </section>
        </>
    )
}

export default BrandsPage
