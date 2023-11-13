import React, { useState, useEffect } from "react";
import AdminMenu from './AdminMenu'
import { Link } from "react-router-dom";


const AllProducts = () => {

    const host = "http://localhost:5000";
    const token = localStorage.getItem("token");
    const [products, setProducts] = useState([]);   //used for fetching all product

    // get all products 
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
                    // You may want to handle this error by updating the state or showing an alert
                }
            } else {
                console.error("HTTP error! Status:", response.status);
                // You may want to handle this error by updating the state or showing an alert
            }
        } catch (error) {
            console.error("Error fetching products:", error);
            // You may want to handle this error by updating the state or showing an alert
        }
    };

    useEffect(() => {
        getAllProduct();  // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-3">
                    <AdminMenu />
                </div>
                <div className="col-md-9 ps-5">
                    <div className="row">
                        <div className="col">
                            <h3>All Products</h3>
                            <div className="all-products mt-5">
                                <div className="row">
                                    {products?.map((product) => (
                                        <Link key={product._id}
                                            to={`/dashboard/admin/product/${product.slug}`}
                                            className="product-link col-3 mb-5">
                                            <div className="card" key={product._id}>
                                                <img src={`${host}/api/product/product-photo/${product._id}`} className="card-img-top" alt={product.name} />
                                                <div className="card-body">
                                                    <h5 className="card-title">{product.name}</h5>
                                                    <p className="card-text">{product.description}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllProducts
