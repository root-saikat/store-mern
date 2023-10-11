import React, { useState } from 'react'
import { useNavigate, Link } from "react-router-dom";

const Loginmodal = (props) => {

    const [credentials, setCredentials] = useState({ email: "", password: "" })

    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json()
        console.log(json);
        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            props.showAlert("Login Successfully", "success")
            navigate("/");
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
                <div className='col-5 p-5 login-card'>
                    <form onSubmit={handleSubmit}>
                        <input type="email" className="form-control mb-3" placeholder="Email ID" value={credentials.email} onChange={onChange} id='email' name='email' />
                        <input type="password" className="form-control mb-3" placeholder="Password" value={credentials.password} onChange={onChange} id='password' name='password' />
                        <div className="row justify-content-between mb-3">
                            <div className="col"><Link to="">Forget Password?</Link></div>
                            <div className="col text-end"><Link to="/register">Sign up</Link></div>
                        </div>
                        <button type="submit" className="btn btn-primary d-flex justify-content-center" style={{ margin: '0 auto' }}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Loginmodal;
