import React from 'react'
import { Link } from "react-router-dom";


const Service = () => {
    return (
        <>
            <div className="breadcrumb-links mt-5">
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link style={{color: 'black', textDecoration: 'none'}} to="/">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Customar Service</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div className="p-bnr">
                <div className="pr-banner">
                    <img src="../assets/products/customer-service_3.jpg" alt="" width="100%" />
                </div>
            </div>
            <section className="customar-service-section mt-5 mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h5>VAPE STOP ADVANTAGE:</h5>
                            <div className="advntges d-flex gap-2">
                                <li>100% Authentic</li>
                                <li>Free Shipping ৳ 3,000+</li>
                                <li>60 Day Warranty</li>
                                <li>Best Price Guarantee</li>
                                <li>Free Return</li>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-6 col-12">
                            <h5>WRITE TO US:</h5>
                            <form>
                                <div className="row">
                                    <div className="mb-3 col-6">
                                        <input type="text" className="form-control" required placeholder="Your Name*" id="exampleInputName" />
                                    </div>
                                    <div className="mb-3 col-6">
                                        <input type="email" className="form-control" placeholder="Your Email*" required id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6 mb-3">
                                        <input type="number" className="form-control" placeholder="Your Phone No*" required />
                                    </div>
                                    <div className="col-6 mb-3">
                                        <input type="text" className="form-control" placeholder="Reason to Contact*" required />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <textarea placeholder="Type Your Message*" className="form-control" required cols="30" rows="10"></textarea>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary mt-3">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Service;
