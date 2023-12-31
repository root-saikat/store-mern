import React, { useEffect, useState } from 'react'
import AdminMenu from './AdminMenu'
import CategoryForm from './categoryForm'

const CreateCategory = (props) => {

    const [categories, setCategories] = useState([]);
    const [name, setName] = useState("");
    const [updatedName, setUpdatedName] = useState("");
    const [selected, setSelected] = useState(null);

    const host = "http://localhost:5000";
    const token = localStorage.getItem("token");

    // create new category form handle
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${host}/api/category/create-category`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token,
                },
                body: JSON.stringify({
                    name: name, // assuming 'name' is the field you want to send
                })
            });

            const data = await response.json();

            if (response.ok && data.success) {
                getAllCategory();
                props.setAlert(`${name} Category Created Successfully`, "success");
            } else {
                // Handle error case if needed
                console.log("API returned unsuccessful response:", data);
            }
        } catch (error) {
            console.error("Error in handleSubmit:", error);
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

    useEffect(() => {
        getAllCategory(); // eslint-disable-next-line 
    }, []);


    // update or edit category handle
    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${host}/api/category/update-category/${selected._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('token'), // Include the authentication token
                },
                body: JSON.stringify({
                    name: updatedName,
                }),
            });

            const data = await response.json();
            console.log(data);

            if (response.ok && data.success) {
                props.setAlert(`${updatedName} is updated`, "success");
                setUpdatedName("");
                getAllCategory();

                // Trigger a click event on the button to close the modal
                const editButton = document.querySelector('[data-bs-target="#categoryModal"]');
                if (editButton) {
                    editButton.click();
                }

            } else {
                props.setAlert(data.message || "Update failed");
            }
        } catch (error) {
            props.setAlert("Something went wrong");
        }
    };


    // delete category handle
    const handleDelete = async (pId) => {
        try {
            const response = await fetch(`${host}/api/category/delete-category/${pId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('token'), // Include the authentication token
                },
            });

            const data = await response.json();

            if (response.ok && data.success) {
                props.setAlert(`${name} Category deleted Successfully`, "success");
                getAllCategory();
            } else {
                console.log("API returned unsuccessful response:", data);
            }
        } catch (error) {
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
                            <h3>Create Category</h3>
                            <div className="div-form col-md-6 py-3">
                                <CategoryForm handleSubmit={handleSubmit}
                                    value={name}
                                    setValue={setName} buttonTitle="Create" />
                            </div>
                            <div className="existing-category py-4 col-md-8">
                                <h3>All Categories</h3>
                                <div className="category-table">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Category Name</th>
                                                <th scope="col" className='text-end pe-5'>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {categories?.map((c) => (
                                                <tr key={c._id}>
                                                    <td>{c.name}</td>
                                                    <td>
                                                        <button className="btn btn-primary ms-2" data-bs-toggle="modal" data-bs-target="#categoryModal" onClick={() => { setUpdatedName(c.name); setSelected(c); }}>
                                                            Edit
                                                        </button>
                                                        <button className="btn btn-danger ms-2" onClick={() => {
                                                            handleDelete(c._id);
                                                        }}>
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="modal fade" id="categoryModal" tabIndex={-1} aria-labelledby="categoryModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="categoryModalLabel">Update Cayegory</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                        </div>
                                        <div className="modal-body">
                                            <CategoryForm value={updatedName}
                                                setValue={setUpdatedName}
                                                handleSubmit={handleUpdate} buttonTitle="Update" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateCategory
