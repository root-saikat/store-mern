import React from 'react'

const Review = () => {
  return (
    <section className="review-banner my-3">
            <div className="container p-2">
                <div className="inner-container p-2">
                    <div className="wrapper-border">
                        <div className="r_r2 py-3">
                            <div className="review-left text-center text-white">
                                <p className="loyal">50,000+ LOYAL CUSTOMER BASE</p>
                                <div className="rating-stars"><img
                                        src="https://vapestopglobal.com/pub/media/rating-stars.png" alt="Rating-Stars"/>
                                    <div className="outer_p">
                                        <p>4.7/5 from 700+ reviews</p>
                                    </div>
                                    <img src="https://vapestopglobal.com/pub/media/rating-stars.png" alt="Rating-Stars"/>
                                </div>
                            </div>
                            <div className="review-right text-center text-white">
                                <h2>Our customers Love us!</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Review
