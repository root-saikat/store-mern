import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = () => {
    return (
        <>
            <div className="card col-3">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build</p>
                    <Link to="#" className="btn btn-primary">Go somewhere</Link>
                </div>
            </div>

        </>
    )
}

export default ProductCard
