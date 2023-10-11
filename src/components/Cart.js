import React from 'react'
import Cartimage from '../assets/products/strawberry_mango.jpg';

const Cart = () => {
    return (
        <>
            <section className="cart-page my-5">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="row mb-3">
                                <div className="col d-flex justify-content-between">
                                    <h5>SHOPPING CART</h5>
                                    <a href="">
                                        PROCEED TO CHECKOUT
                                    </a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Product</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">Quantity</th>
                                                <th scope="col">Subtotal</th>
                                                <th scope="col"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>
                                                    <div className="row">
                                                        <div className="col d-flex gap-2">
                                                            <div className="product-cart-imgbox" style={{width: '80px' ,height: '80px'}}>
                                                                <img src={Cartimage} alt="" width="100%" height="100%" />
                                                            </div>
                                                            <div className="p-c-text" style={{width: '300px'}}>
                                                                <p className="mb-1">	ELF BAR BC5000, PEACH MANGO WATERMELON | DISPOSABLE VAPE</p>
                                                                <span>SKU: ELF06-50mg</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>BDT 2,290</td>
                                                <td>
                                                    <div className="row">
                                                        <div className="col d-flex gap-1">
                                                            <input type="number" className="form-control" style={{width: '50px'}} value="1" />
                                                            <button className="btn btn-primary">Update</button>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>BDT 2,290</td>
                                                <td><i style={{cursor: 'pointer'}} className="fa-solid fa-trash"></i></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>
                                                    <div className="row">
                                                        <div className="col d-flex gap-2">
                                                            <div className="product-cart-imgbox" style={{width: '80px',height: '80px'}}>
                                                                <img src={Cartimage} alt="" width="100%" height="100%" />
                                                            </div>
                                                            <div className="p-c-text" style={{width: '300px'}}>
                                                                <p className="mb-1">	ELF BAR BC5000, PEACH MANGO WATERMELON | DISPOSABLE VAPE</p>
                                                                <span>SKU: ELF06-50mg</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>BDT 2,290</td>
                                                <td>
                                                    <div className="row">
                                                        <div className="col d-flex gap-1">
                                                            <input type="number" className="form-control" style={{width: '50px'}} value="1" />
                                                            <button className="btn btn-primary">Update</button>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>BDT 2,290</td>
                                                <td><i style={{cursor: 'pointer'}} className="fa-solid fa-trash"></i></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>
                                                    <div className="row">
                                                        <div className="col d-flex gap-2">
                                                            <div className="product-cart-imgbox" style={{width: '80px',height: '80px'}}>
                                                                <img src={Cartimage} alt="" width="100%" height="100%" />
                                                            </div>
                                                            <div className="p-c-text" style={{width: '300px'}}>
                                                                <p className="mb-1">	ELF BAR BC5000, PEACH MANGO WATERMELON | DISPOSABLE VAPE</p>
                                                                <span>SKU: ELF06-50mg</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>BDT 2,290</td>
                                                <td>
                                                    <div className="row">
                                                        <div className="col d-flex gap-1">
                                                            <input type="number" className="form-control" style={{width: '50px'}} value="1" />
                                                            <button className="btn btn-primary">Update</button>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>BDT 2,290</td>
                                                <td><i style={{cursor: 'pointer'}} className="fa-solid fa-trash"></i></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-lg-6 col-12 d-flex gap-2">
                                    <span>DISCOUNT CODES</span>
                                    <div className="input-group mb-3" style={{width: '200px',height: '40px'}} >
                                        <input type="text" className="form-control" aria-label="coupon code" aria-describedby="basic-addon2" />
                                        <span className="input-group-text" style={{cursor: 'pointer'}} id="basic-addon2">APPLY</span>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-12">
                                    <div className="row">
                                        <div className="col-8 text-end d-flex flex-column gap-2">
                                            <span>Subtotal Incl. Tax</span>
                                            {/* <span>Shipping "Flat Rate For Orders < BDT 3000 - Fixed " </span> */}
                                            <span><b>Grand Total</b></span>
                                        </div>
                                        <div className="col-4 d-flex flex-column gap-2 text-end">
                                            <span>BDT 2,290</span>
                                            <span>BDT 50</span>
                                            <span><b>BDT 2,340</b></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col text-end">
                                    <a href="">
                                        PROCEED TO CHECKOUT
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart
