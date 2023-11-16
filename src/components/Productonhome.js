import React from 'react'
import { Link } from "react-router-dom";

const Productonhome = () => {
  return (
    <>
      <section className="products my-3">
            <div className="container text-center">
                <h2>PRODUCTS</h2>
                <div className="row row-cols-2 ">
                    <div className="col-lg-6 col-12 p-2 list-item">
                        <Link to="/disposable">
                            <img src="./assets/product/product-new.jpg" alt="" width="100%" height="100%"/>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-12 p-2 list-item">
                        <Link to="/box-mods">
                            <img src="./assets/product/product-2.webp" alt="" width="100%" height="100%"/>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-12 p-2 list-item">
                        <Link to="/e-liquid-pods">
                            <img src="./assets/product/product-3.webp" alt="" width="100%" height="100%"/>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-12 p-2 list-item">
                        <Link to="/e-liquid">
                            <img src="./assets/product/product-4.webp" alt="" width="100%" height="100%"/>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Productonhome
