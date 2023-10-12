import React from 'react'

const ComboPack = () => {
  return (
    <section className="combo">
            <div className="container text-center">
                <h2>CURATED COMBOS</h2>
                <div className="row row-cols-4 ">
                    <div className="col-lg-3 col-6 p-2 list-item combo-item">
                        <a href="#">
                            <img src="./assets/combo/Classic-quitter-elfbar.jpg" alt="" width="100%" height="100%"/>
                        </a>
                        <div className="combo-name">
                            <span>REFINED TRENDSETTER</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6 p-2 list-item combo-item">
                        <a href="#">
                            <img src="./assets/combo/Progressive-Adopter-Juul.jpg" alt="" width="100%" height="100%"/>
                        </a>
                        <div className="combo-name">
                            <span>CLASSIC COLLECTOR</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6 p-2 list-item combo-item">
                        <a href="#">
                            <img src="./assets/combo/refined.webp" alt="" width="100%" height="100%"/>
                        </a>
                        <div className="combo-name">
                            <span>SAVVY ENTHUSIAST</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6 p-2 list-item combo-item">
                        <a href="#">
                            <img src="./assets/combo/savvy-collector-smok.jpg" alt="" width="100%" height="100%"/>
                        </a>
                        <div className="combo-name">
                            <span>RECENT SWITCHER</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default ComboPack
