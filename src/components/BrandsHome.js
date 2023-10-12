import React from 'react'
import { Link } from "react-router-dom";

const BrandsHome = () => {
  return (
    <section className="brands my-3">
            <div className="container text-center">
                <h2>BRANDS</h2>
                <div className="row row-cols-4 ">
                    <div className="col-lg-3 col-6 p-2 list-item">
                        <Link to="/brands">
                            <img src="./assets/brands/iget.jpg" alt="" width="100%" height="100%"/>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-6 p-2 list-item">
                        <Link to="/brands">
                            <img src="./assets/brands/elf_bar_copy.jpg" alt="" width="100%" height="100%"/>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-6 p-2 list-item">
                        <Link to="/brands">
                            <img src="./assets/brands/iqos.jpg" alt="" width="100%" height="100%"/>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-6 p-2 list-item">
                        <Link to="/brands">
                            <img src="./assets/brands/juul.jpg" alt="" width="100%" height="100%"/>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-6 p-2 list-item">
                        <Link to="/brands">
                            <img src="./assets/brands/nasty-min.jpg" alt="" width="100%" height="100%"/>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-6 p-2 list-item">
                        <Link to="/brands">
                            <img src="./assets/brands/yuoto.jpg" alt="" width="100%" height="100%"/>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-6 p-2 list-item">
                        <Link to="/brands">
                            <img src="./assets/brands/smokkk.jpg" alt="" width="100%" height="100%"/>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-6 p-2 list-item">
                        <Link to="/brands">
                            <img src="./assets/brands/vgod-re-copy.jpg" alt="" width="100%" height="100%"/>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
  )
}

export default BrandsHome
