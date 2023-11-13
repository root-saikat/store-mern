import React, { useEffect, useState } from 'react'
import AdminMenu from './AdminMenu'

const Users = () => {

    const host = "http://localhost:5000";
    const token = localStorage.getItem("token");
    const [users, setUsers] = useState([]);

    // fetch all users 
    const getAllUsers = async () => {
        try {
            const response = await fetch(`${host}/api/auth/get-users`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    "auth-token": { token }
                }
            });

            if (response.ok) {
                const responseBody = await response.json();
                setUsers(responseBody.users);
            } else {
                console.error("HTTP error! Status:", response.status);
            }
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    useEffect(() => {
        getAllUsers(); // eslint-disable-next-line 
    }, []);


    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-3">
                    <AdminMenu />
                </div>
                <div className="col-md-9 ps-5">
                    <div className="row">
                        <div className="col-md-6">
                            <h3>ALL Users</h3>
                        </div>
                    </div>
                    <div className="row">
                        {users?.map((user) => (
                            <div className="card mb-3" key={user._id}>
                                <div className="card-body">
                                    <h5 className="card-title">{user.name}</h5>
                                    <p className="card-text">{user.email}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Users
