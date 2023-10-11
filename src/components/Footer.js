import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="py-5 py-md-0">
                <div className="container p-md-5 p-sm-2 ">
                    <div className="footer-inner-container">
                        <div className="row">
                            <div className="col">
                                <h3>Purchase Help</h3>
                                <ul>
                                    <li><a href="#">FAQs</a></li>
                                    <li><a href="#">Best Price Guarantee</a></li>
                                    <li><a href="#">60 Day Warranty</a></li>
                                    <li><a href="#">Terms & Conditions</a></li>
                                    <li><a href="#">Reviews</a></li>
                                </ul>
                            </div>
                            <div className="col">
                                <h3>ABOUT US</h3>
                                <ul>
                                    <li><a href="#">Introduction</a></li>
                                    <li><a href="#">Vape Stop Promise</a></li>
                                    <li><a href="#">Vape Guide</a></li>
                                    <li><a href="#">Vape Stop Global</a></li>
                                    <li><a href="#">Blog</a></li>
                                </ul>
                            </div>
                            <div className="col">
                                <h3>CONTACT US</h3>
                                <ul>
                                    <li><a href="#">Customer Service</a></li>
                                    <li><a href="#">Import Clearance</a></li>
                                    <li><a href="#">Wholesale Opportunity</a></li>
                                    <li><a href="#">Careers</a></li>
                                </ul>
                            </div>
                            <div className="col">
                                <h3>LEADING BRANDS</h3>
                                <ul className="lb">
                                    <li><a href="#">IGET</a></li>
                                    <li><a href="#">VGod</a></li>
                                    <li><a href="#">Elf Bar</a></li>
                                    <li><a href="#">Nasty Juice</a></li>
                                    <li><a href="#">Yuoto</a></li>
                                    <li><a href="#">JUUL</a></li>
                                </ul>
                            </div>
                            <div className="col">
                                <h3>NEWSLETTER & SPECIAL OFFERS:</h3>
                                <div className="newslatter-input-box d-flex mx-sm-auto" style={{borderBottom:'1px solid white'}}>
                                    <input type="email" id="inmail" placeholder="Email Address" className="form-control-sm"
                                        style={{background: '0 0',color: '#ba9d4d',border: 'none'}} />
                                    <button type="submit" style={{whiteSpace: 'nowrap',background: 'black',color: 'white',fontSize: '12px',background: '0 0',height: '35px',minWidth: '80px', border: '1px solid white'}}> Sign Up</button>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-between align-items-center my-md-0 my-4">
                            <div className="col-lg-5 col-12 img-sec-1 text-lg-left text-center py-lg-0 py-3">
                                <img src="./assets/footer/free-return-desktop.png" alt="" />
                                <img src="./assets/footer/100_-authentic-desktop-01.png" alt="" />
                                <img src="./assets/footer/checked-at-dispatch-desktop-01.png" alt="" />
                                <img src="./assets/footer/60_warranty.png" alt="" />
                            </div>
                            <div className="col-lg-3 col-12 img-sec-2 text-lg-left text-center py-lg-0 py-3">
                                <i className="fa-brands fa-facebook"></i>
                                <i className="fa-brands fa-instagram"></i>
                                <i className="fa-brands fa-youtube"></i>
                            </div>
                            <div className="col-lg-3 col-12 img-sec-3 d-flex flex-column text-lg-left text-center py-lg-0 py-3">
                                <div className="single-img">
                                    <img src="../assets/footer/fedex.png" alt="" />
                                </div>
                                <div className="all-img">
                                    <img src="../assets/footer/amex.png" alt="" />
                                    <img src="../assets/footer/master.png" alt="" />
                                    <img src="../assets/footer/cod-im.png" alt="" />
                                    <img src="../assets/footer/visa.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex flex-column">
                            <div className="col">
                                <div className="footer-bottom-links">
                                    <ul className="d-flex justify-content-center">
                                        <li><a href="https://vapestopglobal.com/bd/privacy-policy">Privacy Policy</a></li>
                                        <li><a href="https://vapestopglobal.com/bd/return-policy">Return Policy</a></li>
                                        <li><a href="https://vapestopglobal.com/bd/terms-conditions">Terms &amp; Conditions</a>
                                        </li>
                                        <li><a href="https://vapestopglobal.com/bd/cookies-policy">Cookies Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col">
                                <p className="mx-lg-5 mx-sm-0 px-lg-5 px-sm-0 text-center"
                                    style={{color: '#a3a3a3',fontSize: '12px',fontFamily: 'gothambook',lineHeight: '17px'}}>Vape Stop
                                    is trademarked, and has attained copyright as per the Berne Convention for the Protection of
                                    Literary and Artistic Works applicable in Bangladesh. This website is solely for adult users
                                    of tobacco products, and not for non-tobacco users. The products are not an alternative to
                                    quitting, and are not sold or marketed as cessation or medical tool. Not for use by people
                                    with heart conditions, diabetics, and pregnant or breast-feeding women. DISCLAIMER: All
                                    products and company names are trademarks or registered trademarks of their respective
                                    holders. Use of them by Vape Stop does not imply any affiliation/association with or
                                    endorsement by them.</p>
                            </div>
                            <div className="col">
                                <p style={{color: '#a3a3a3',fontFamily: 'gothambook',textAlign: 'center'}}>©2020 Vape
                                    Stop. All Rights Reserved. Global Head Office: Prime Tower, Business Bay, Dubai, UAE.
                                    Country Head Office: D Block, Road 140, Gulshan South Avenue, Gulshan-1, Dhaka, Bangladesh.
                                </p>
                            </div>
                            <div className="col">
                                <div className="warning-box"
                                    style={{border: '1px solid white',padding: '15px',textAlign: 'center',color: 'white'}}>
                                    <p>WARNING: CONTAINS NICOTINE, WHICH IS HIGHLY ADDICTIVE. FOR TOBACCO USERS 18+.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
