import React from 'react'
import AdminMenu from './AdminMenu'
import ProductCard from './ProductCard'
import ProductFormP from './ProductFormP'

const CreateProduct = () => {
  return (
    <div className="container my-5">
            <div className="row">
                <div className="col-md-3">
                    <AdminMenu/>
                </div>
                <div className="col-md-9 ps-5">
                    <div className="row">
                        <div className="col">
                            <h3>Create New Product</h3>
                            <div className="product-form">
                                <ProductFormP/>
                            </div>
                        </div>
                    </div>
                    <div className="row my-5">
                        <div className="col">
                            <h3>All Products</h3>
                            <div className="all-products mt-5">
                                <ProductCard/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default CreateProduct
