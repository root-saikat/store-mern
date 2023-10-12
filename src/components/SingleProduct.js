import React from 'react'
import { Link } from 'react-router-dom'

const SingleProduct = () => {
    return (
        <>
            <div class="breadcrumb-links mt-5">
                <div class="container">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link style={{ color: 'black', textDecoration: 'none' }} to="/">Home</Link></li>
                            <li class="breadcrumb-item"><Link style={{ color: 'black', textDecoration: 'none' }} to="/products">Products</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">Single Product</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <section class="product-showcase">
                <div class="container my-5">
                    <div class="row">
                        <div class="col col-lg-6 col-md-12 col-12 p-slider">
                            <div class="row">
                                <div class="col">
                                    <div id="robotcarousel" class="carousel slide" data-bs-ride="carousel">
                                        <div class="carousel-inner">
                                            <div class="carousel-item">
                                                <img class="d-block w-100" src="./assets/products/peach_mango_watermelon.jpg" alt="swamp" />
                                            </div>
                                            <div class="carousel-item active">
                                                <img class="d-block w-100" src="./assets/products/peach_mango_watermelon.jpg" alt="flight" />
                                            </div>
                                        </div>

                                        <button class="carousel-control-prev" type="button" data-bs-target="#robotcarousel" data-bs-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Previous</span>
                                        </button>
                                        <button class="carousel-control-next" type="button" data-bs-target="#robotcarousel" data-bs-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-3"><div class="thumb-img"><img src="./assets/products/strawberry_mango.jpg" alt="" /></div></div>
                                        <div class="col-3"><div class="thumb-img"><img src="./assets/products/strawberry_mango.jpg" alt="" /></div></div>
                                        <div class="col-3"><div class="thumb-img"><img src="./assets/products/strawberry_mango.jpg" alt="" /></div></div>
                                        <div class="col-3"><div class="thumb-img"><img src="./assets/products/strawberry_mango.jpg" alt="" /></div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col col-lg-6 col-md-12 col-12 p-texts d-flex flex-column mt-lg-0 mt-5">
                            <h3>ELF BAR</h3>
                            <h5>ELF BAR BC5000, PEACH MANGO WATERMELON | DISPOSABLE VAPE</h5>
                            <span>( CODE : ELF06 )</span>
                            <br />
                            <a class="mb-2" href="">BE THE FIRST TO REVIEW THIS PRODUCT</a>
                            <p>BC5000 is a known variant by Elf Bar and is widely popular across countries. The Peach Mango Watermelon flavour has a complex taste of juicy peaches, ripe mangoes, and fresh watermelons. This disposable vape comes with a preinstalled battery and prefilled e liquid of 50mg or 5% nicotine strength, and delivers up to 5,000 puffs. Rechargeable via a standard USB C Type cable.</p>
                            <h4 class="mb-4">BDT 2,290</h4>
                            <form action="" class="form">
                                <div class="input-group row">
                                    <p class="mb-1">STRENGTH LEVEL <span style={{ color: 'red' }}>*</span></p>
                                    <button type="button" id="str-l" style={{ width: 'fit-content', marginLeft: '12px', borderColor: '#ba9d4d' }}>50mg</button>
                                </div>
                                <div class="input-group row mt-3 mx-0">
                                    <p class="mb-1 p-0">QUANTITY</p>
                                    <select name="" id="" style={{ width: '100px', borderRadius: '8px', height: '40px' }}>
                                        <option value="1" selected>1</option>
                                        <option value="">1</option>
                                        <option value="">2</option>
                                        <option value="">3</option>
                                        <option value="">4</option>
                                        <option value="">5</option>
                                        <option value="">6</option>
                                    </select>
                                </div>
                                <button type="button" class="btn btn-primary my-4" >ADD TO CART</button>
                            </form>
                        </div>
                    </div>
                    <div class="row my-5 ">
                        <div class="col">
                            <ul class="nav nav-tabs justify-content-center" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" data-bs-toggle="tab" href="#home" role="tab">
                                        <i class="now-ui-icons objects_umbrella-13"></i> What's Included
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-bs-toggle="tab" href="#profile" role="tab">
                                        <i class="now-ui-icons shopping_cart-simple"></i> Product Features
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-bs-toggle="tab" href="#messages" role="tab">
                                        <i class="now-ui-icons shopping_shop"></i> Delivery
                                    </a>
                                </li>
                            </ul>
                            <div class="tab-content py-3 px-4" style={{ border: '1px solid #DDDDDD' }}>
                                <div class="tab-pane active" id="home" role="tabpanel">
                                    <li>1 x Elf Bar BC5000 Disposable Vape of Peach Mango Watermelon flavour</li>
                                    <li>Prefilled with 13ml E liquid</li>
                                    <li>Preinstalled battery of 650 mAh capacity</li>
                                    <li>50mg Nicotine Strength</li>
                                </div>
                                <div class="tab-pane" id="profile" role="tabpanel">
                                    <li>100% Original</li>
                                    <li>Number of Puffs: 5,000</li>
                                    <li>Coil Resistance: 0.8 Ω</li>
                                    <li>Adjustable Airflow: Standard</li>
                                    <li>Rechargeable: Yes, with a standard USB C type cable</li>
                                    <li>Use-and-throw vape kit with preinstalled battery and prefilled</li>
                                </div>
                                <div class="tab-pane" id="messages" role="tabpanel">
                                    <li>Free delivery on orders above the combined value of BDT 3,000</li>
                                    <li>For orders less than BDT 3,000 combined value, a shipping charge of BDT 75</li>
                                    <li>Same day delivery in Dhaka if ordered on a working day before 12pm</li>
                                    <li>For more details on deliveries, please <a href="">click here</a></li>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div class="row">
                        <div class="col">
                            <h3 class="text-center">Similer Products</h3>
                            <div class="row row-cols-4">
                                <div class="col-lg-3 col-6">
                                    <div class="card">
                                        <img src="./assets/products/strawberry_mango.jpg" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">Some quick example text to build on the card title .</p>
                                            <h5 class="card-title">Price</h5>
                                        </div>
                                        <div class="view-buy-hover gap-2">
                                            <a href="./single-product.html"><button>VIEW</button></a>
                                            <button>BUY</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-6">
                                    <div class="card">
                                        <img src="./assets/products/strawberry_mango.jpg" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">Some quick example text to build on the card title .</p>
                                            <h5 class="card-title">Price</h5>
                                        </div>
                                        <div class="view-buy-hover gap-2">
                                            <a href="./single-product.html"><button>VIEW</button></a>
                                            <button>BUY</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-6">
                                    <div class="card">
                                        <img src="./assets/products/strawberry_mango.jpg" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">Some quick example text to build on the card title .</p>
                                            <h5 class="card-title">Price</h5>
                                        </div>
                                        <div class="view-buy-hover gap-2">
                                            <a href="./single-product.html"><button>VIEW</button></a>
                                            <button>BUY</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-6">
                                    <div class="card">
                                        <img src="./assets/products/strawberry_mango.jpg" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">Some quick example text to build on the card title .</p>
                                            <h5 class="card-title">Price</h5>
                                        </div>
                                        <div class="view-buy-hover gap-2">
                                            <a href="./single-product.html"><button>VIEW</button></a>
                                            <button>BUY</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section >
        </>
    )
}

export default SingleProduct
