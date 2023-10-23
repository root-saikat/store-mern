import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Register = (props) => {
    const [credentials, setCredentials] = useState({
        name: '',
        email: '',
        password: '',
        cpassword: '',
        question:'',
    });

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password, question } = credentials;
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password, question })
        });
        const json = await response.json()
        console.log(json);
        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            navigate("/");
            props.setAlert("Account Created Successfully", "success");
        }
        else {
            props.setAlert("Invalid Details", "danger");
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };


    return (
        <div className="register-section">
            <div className="container my-5">
                <div className="row">
                    <div className="col col-lg-8 col-12">
                        <form onSubmit={handleSubmit}>
                            <h5>CREATE AN ACCOUNT</h5>
                            <div className="col col-lg-6 col-12">
                                <input type="text" onChange={onChange} name="name" id="name" className="form-control my-4" placeholder="Name*" required />
                                <input type="email" onChange={onChange} name="email" id="email" className="form-control my-4" placeholder="Your Email*" required />
                                <input type="password" onChange={onChange} name="password" id="password" className="form-control my-4" placeholder="Create a password*" required minLength="5" />
                                <input type="password" onChange={onChange} name="cpassword" id="cpassword" className="form-control my-4" placeholder="Confirm password*" required minLength="5" />
                                <input type="text" onChange={onChange} name="question" id="question" className="form-control my-4" placeholder="Enter Your pet name*" required />
                            </div>
                            <h6>PLEASE NOTE:</h6>
                            <p>By creating an account with us, you are confirming that you are 18 years or over.</p>
                            <p>Please <Link to="/">Click Here</Link> for Full <Link to="/">Terms & Conditions</Link>.</p>
                            <div className="captcha"></div>
                            <div className="row">
                                <div className="col">
                                    <div className="row justify-content-between mt-2">
                                        <div className="col col-6"><button type="submit" className="btn btn-primary" style={{ width: '100%', height: '100%' }}>Register</button></div>
                                        <div className="col col-6"><Link to="/login"><button type="button" className="btn btn-outline-secondary" style={{ width: '100%' }}>ALREADY HAVE AN ACCOUNT?</button></Link></div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
