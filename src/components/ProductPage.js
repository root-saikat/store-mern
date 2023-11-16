import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Prices } from "./routes/Prices";

const ProductPage = () => {

    const host = "http://localhost:5000";
    const token = localStorage.getItem("token");
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);
    const [checked, setChecked] = useState([]);
    const [radio, setRadio] = useState([]);

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

    // Fetch all categories
    const getAllCategory = async () => {
        try {
            const response = await fetch(`${host}/api/category/get-category`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token,
                },
            });

            if (response.ok) {
                try {
                    const responseBody = await response.json();

                    if (responseBody.success) {
                        setCategories(responseBody.category);
                    } else {
                        console.log("API returned unsuccessful response:", responseBody.message);
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
        getAllCategory();
        getAllBrands();
    }, [token]); // Make sure to include token as a dependency if it's used in useEffect

    // Handle category and price filters
    // const handleFilter = (value, id, type) => {
    //     if (type === "category") {
    //         setChecked((prevChecked) => {
    //             if (value) {
    //                 return [...prevChecked, id];
    //             } else {
    //                 return prevChecked.filter((c) => c !== id);
    //             }
    //         });
    //     } else if (type === "price") {
    //         setRadio(value ? id : null);
    //     }
    // };
    // filter by cat
    const handleFilter = (value, id) => {
        let all = [...checked];
        if (value) {
            all.push(id);
        } else {
            all = all.filter((c) => c !== id);
        }
        setChecked(all);
    };

    useEffect(() => {
        if (!checked.length || !radio.length) getAllProduct();
    }, [checked.length, radio.length]);

    useEffect(() => {
        if (checked.length || radio.length) filterProduct();
    }, [checked, radio]);

    // Filter products based on selected categories and price
    const filterProduct = async () => {
        try {
            const response = await fetch(`${host}/api/product/product-filter`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    categories: checked,
                    price: radio,
                }),
            });

            if (response.ok) {
                const { products } = await response.json();
                setProducts(products);
            } else {
                console.error("HTTP error! Status:", response.status);
            }
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    useEffect(() => {
        if (checked.length || radio !== null) {
            filterProduct();
        } else {
            getAllProduct();
        }
    }, [checked, radio]);


    return (
        <>
            <div className="breadcrumb-links mt-5">
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link style={{ color: 'black', textDecoration: 'none' }} to="/">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Products</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* Banner */}
            <div className="p-bnr">
                <div className="pr-banner">
                    <img src="./assets/products/products.jpg" alt="" width="100%" />
                </div>
            </div>
            {/* products section start */}
            <section className="products-all mt-5 mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-12">
                            <div className="accordion accordion-flush" id="accordionFlushExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingOne">
                                        <h3 className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            CATEGORY
                                        </h3>
                                    </h2>
                                    <div id="flush-collapseOne" className="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                            {categories?.map((c) => (
                                                <div key={c._id} className="form-check" onChange={(e) => handleFilter(e.target.checked, c._id)}>
                                                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault" >
                                                        {c.name}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingTwo">
                                        <h3 className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            PRICE
                                        </h3>
                                    </h2>
                                    <div id="flush-collapseTwo" className="accordion-collapse collapse show" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
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
                                    <div id="flush-collapseThree" className="accordion-collapse collapse show" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                            {brands?.map((c) => (
                                                <div key={c._id} className="form-check" onChange={(e) => handleFilter(e.target.checked, c._id)}>
                                                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
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
                                {/* {JSON.stringify(radio, null, 4)} */}
                                <div className="row row-cols-4 gap-4">
                                    {products?.map((product) => (
                                        <div className="col-3">
                                            <div className="card" key={product._id}>
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
            </section >
        </>
    )
}

export default ProductPage;