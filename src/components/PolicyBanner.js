import React from 'react'

const PolicyBanner = () => {
  return (
    <section className="policy-banner">
            <div className="container p-2">
                <div className="inner-container p-2">
                    <div className="wrapper-border p-4 policy-row">
                        <div className="row">
                            <div className="col">
                                <div className="blockWidth d-flex justify-content-center align-items-center">
                                    <div className="oneSec"><img src="./assets/policy/icon.webp" width="98.6"/></div>
                                    <div className="oneSec pl-3">
                                        <h3>SEAMLESS AGE VERIFICATION</h3>
                                        <a href=""> <img src="./assets/read-more.png" width="130"/> </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="blockWidthtwo d-flex justify-content-center align-items-center">
                                    <div className="oneSec"><img src="./assets/policy/icon-2.webp" width="98.6"/></div>
                                    <div className="oneSec pl-3">
                                        <h3>COMMUNICATION POLICY</h3>
                                        <a href=""> <img src="./assets/read-more.png" width="130"/> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default PolicyBanner
