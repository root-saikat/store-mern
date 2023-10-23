import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";


const ForgetPassword = (props) => {
    const [credentials, setCredentials] = useState({ email: "", newPassword: "", question: ""})

    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/forget-password", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, newPassword: credentials.newPassword, question: credentials.question })
        });
        const json = await response.json()
        console.log(json);
        if (json.success) {
            // Show alert and redirect
            props.showAlert("Password reset Successfully", "success")
            navigate("/login");
        }
        else {
            props.showAlert("Invalid Details", "danger")
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    

    return (
        <div className='container mt-5 mb-5'>
            <div className='row justify-content-center'>
                <div className='col-lg-5 p-5 login-card col-10'>
                    <h5 className='text-center'>Reset Password</h5>
                    <form onSubmit={handleSubmit}>
                        <input type="email" className="form-control mb-3" placeholder="Email" value={credentials.email} onChange={onChange} id='email' name='email' />

                        <input type="password" className="form-control mb-3" placeholder="New Password" value={credentials.newPassword} onChange={onChange} id='newPassword' name='newPassword' />

                        <input type="text" className="form-control mb-3" placeholder="Your Pet Name" value={credentials.question} onChange={onChange} id='question' name='question' />

                        <button type="submit" className="btn btn-primary d-flex justify-content-center" style={{ margin: '0 auto' }}>Reset Password</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ForgetPassword
