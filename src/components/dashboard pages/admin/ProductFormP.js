import React from 'react'

const ProductFormP = () => {
    return (
        <div>
            <form>
                <div className="row">
                    <div className="col-md-5 my-2">
                        <label htmlFor="productname" className="form-label">Name</label>
                        <input type="text" className="form-control" id="productname" aria-describedby="emailHelp" />
                    </div>
                    <div className="col-md-5 my-2">
                        <label htmlFor="productDescription" className="form-label">Description</label>
                        <input type="text" className="form-control" id="productDescription" aria-describedby="emailHelp" />
                    </div>
                    <div className="col-md-5 my-2">
                        <label htmlFor="productPrice" className="form-label">Price</label>
                        <input type="number" className="form-control" id="productPrice" aria-describedby="emailHelp" />
                    </div>
                    <div className="col-md-5 my-2">
                    <label htmlFor="productPrice" className="form-label">Category</label>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Select Category</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="col-md-5 my-2">
                        <label htmlFor="productQuantity" className="form-label">Quantity</label>
                        <input type="number" className="form-control" id="productQuantity" aria-describedby="emailHelp" />
                    </div>
                    <div className="col-md-5 my-2">
                    <label htmlFor="productPrice" className="form-label">Brand</label>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Select Brand</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
                <div className="col-md-5 my-2 my-3">
                    <label htmlFor="ProductPhoto" className="form-label">Product Photo</label>
                    <input type="file" name="ProductPhoto" id="ProductPhoto" />
                </div>

                <button type="submit" className="btn btn-primary mt-1">Create Product</button>
            </form>

        </div>
    )
}

export default ProductFormP
