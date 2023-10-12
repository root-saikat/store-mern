import React from 'react'
import { Link } from "react-router-dom";

const BrandsPage = () => {
  return (
    <>
      <div className="breadcrumb-links mt-5">
            <div className="container">
                <nav  aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link style={{ color: 'black', textDecoration: 'none' }} to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Brands</li>
                    </ol>
                </nav>
            </div>
        </div>
        <div className="p-bnr">
            <div className="pr-banner">
                <img src="./assets/products/brands.jpg" alt="" width="100%"/>
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
                                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        <li>E-Cigarette Kits</li>
                                        <li>E-Cigarette Kits</li>
                                        <li>E-Cigarette Kits</li>
                                        <li>E-Cigarette Kits</li>
                                        <li>E-Cigarette Kits</li>
                                        <li>E-Cigarette Kits</li>
                                        <li>E-Cigarette Kits</li>
                                        <li>E-Cigarette Kits</li>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9 col-12 pt-4">
                        <div className="container-fluid">
                            <div className="row row-cols-4">
                                <div className="col-lg-3 col-6">
                                    <div className="card">
                                        <img src="./assets/products/strawberry_mango.jpg" className="card-img-top" alt="..."/>
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">Some quick example text to build on the card title .</p>
                                            <h5 className="card-title">Price</h5>
                                        </div>
                                        <div className="view-buy-hover gap-2">
                                            <a href="./single-product.html"><button>VIEW</button></a>
                                            <button>BUY</button>
                                        </div>
                                    </div>
                                </div>
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
