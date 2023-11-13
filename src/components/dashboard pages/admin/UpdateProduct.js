import React, { useState, useEffect } from "react";
import AdminMenu from './AdminMenu'
import { useParams, useNavigate } from "react-router-dom";

const UpdateProduct = (props) => {
    const host = "http://localhost:5000";
    const token = localStorage.getItem("token");

    const params = useParams();
    const navigate = useNavigate();

    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);
    const [photo, setPhoto] = useState("");
    const [brand, setBrand] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [quantity, setQuantity] = useState("");
    const [id, setId] = useState("");

    // fetch single product to update 
    const getSingleProduct = async () => {
        try {
            const response = await fetch(`${host}/api/product/get-product/${params.slug}`);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();

            setName(data.product.name);
            setId(data.product._id);
            setDescription(data.product.description);
            setPrice(data.product.price);
            setQuantity(data.product.quantity);
            setCategory(data.product.category._id);
            setBrand(data.product.brand._id);
        } catch (error) {
            console.log(error);
        }
    };



    //fetch all category
    const getAllCategory = async () => {
        try {
            const response = await fetch(`${host}/api/category/get-category`, {
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
                        setCategories(responseBody.category);
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
        getAllCategory();
        getSingleProduct(); // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    //update product function
    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const productData = new FormData();
            productData.append("name", name);
            productData.append("description", description);
            productData.append("category", category);
            productData.append("brand", brand);
            productData.append("price", price);
            productData.append("quantity", quantity);
            photo && productData.append("photo", photo);
            productData.append("category", category);

            const response = await fetch(`${host}/api/product/update-product/${id}`, {
                method: 'PUT',
                headers: {
                    'auth-token': token,
                },
                body: productData,
            });

            const data = await response.json();

            if (!response.ok) {
                // Handle non-successful responses
                props.setAlert(data.message || "Error creating product", "danger");
                return;
            }

            // const data = await response.json();

            if (data.success) {
                props.setAlert(`${name} product Updated successfully`, "success");
                navigate("/dashboard/admin/all-products");
                // Additional actions upon success (e.g., navigate)
            } else {
                props.setAlert("Error creating product", "danger");
            }
        } catch (error) {
            console.error("Error in handleCreate:", error);
            props.setAlert("Something went wrong", "danger");
        }
    };


    // delete product function
    const handleDelete = async (e) => {
        e.preventDefault();
        try {
            const answer = window.confirm("Are you sure you want to delete this product?");
            if (!answer) return;

            const response = await fetch(`${host}/api/product/delete-product/${id}`, {
                method: 'delete',
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log(data);

            if (data.success) {
                props.setAlert("Product deleted successfully", "success");
                navigate("/dashboard/admin/all-products");
            } else {
                props.setAlert("Product deletion failed", "danger");
            }
        } catch (error) {
            console.log(error);
            props.setAlert("Something went wrong", "danger");
        }
    };

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-3">
                    <AdminMenu />
                </div>
                <div className="col-md-9 ps-5">
                    <div className="row">
                        <div className="col">
                            <h3>Update Product</h3>
                            <div className="product-form">
                                <form>
                                    <div className="row">
                                        <div className="col-md-5 my-2">
                                            <label htmlFor="productname" className="form-label">Name</label>
                                            <input type="text" className="form-control" id="productname" value={name} aria-describedby="emailHelp" onChange={(e) => setName(e.target.value)} />
                                        </div>
                                        <div className="col-md-5 my-2">
                                            <label htmlFor="productDescription" className="form-label">Description</label>
                                            <input type="text" className="form-control" id="productDescription" value={description} aria-describedby="emailHelp" onChange={(e) => setDescription(e.target.value)} />
                                        </div>
                                        <div className="col-md-5 my-2">
                                            <label htmlFor="productPrice" className="form-label">Price</label>
                                            <input type="number" className="form-control" id="productPrice" value={price} aria-describedby="emailHelp" onChange={(e) => setPrice(e.target.value)} />
                                        </div>
                                        <div className="col-md-5 my-2">
                                            <label htmlFor="productPrice" className="form-label">Category</label>
                                            <select className="form-select" aria-label="Default select example" value={category} onChange={(e) => setCategory(e.target.value)}>
                                                <option selected>Select Cetegory</option>
                                                {categories?.map((c) => (
                                                    <option key={c._id} value={c._id}>{c.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="col-md-5 my-2">
                                            <label htmlFor="productQuantity" className="form-label">Quantity</label>
                                            <input type="number" className="form-control" id="productQuantity" value={quantity} aria-describedby="emailHelp" onChange={(e) => setQuantity(e.target.value)} />
                                        </div>
                                        <div className="col-md-5 my-2">
                                            <label htmlFor="productPrice" className="form-label">Brand</label>
                                            <select className="form-select" aria-label="Default select example" value={brand} onChange={(e) => setBrand(e.target.value)}>
                                                <option selected>Select Brand</option>
                                                {brands?.map((c) => (
                                                    <option key={c._id} value={c._id}>{c.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-5 my-2 my-3">
                                            <label htmlFor="ProductPhoto" className="form-label">Product Photo</label>
                                            <input type="file" name="ProductPhoto" id="ProductPhoto" accept="image/*" onChange={(e) => setPhoto(e.target.files[0])} />
                                        </div>
                                        <div className="col-md-5 my-2 my-3">
                                            {photo ? (
                                                <div className="photo-preivew">
                                                    <img
                                                        src={URL.createObjectURL(photo)}
                                                        alt="product_photo"
                                                        height={"80px"}
                                                        className="img img-responsive"
                                                    />
                                                </div>
                                            ) : (
                                                <div className="photo-preivew">
                                                    <img
                                                        src={`${host}/api/product/product-photo/${id}`}
                                                        alt="product_photo"
                                                        height={"80px"}
                                                        className="img img-responsive"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="row mt-2">
                                        <div className="col
                                        ">
                                            <div className="buttons d-flex">
                                                <button className="btn btn-primary me-4" onClick={handleUpdate}>Update Product</button>
                                                <button className="btn btn-danger me-4" onClick={handleDelete}>Delete Product</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateProduct
