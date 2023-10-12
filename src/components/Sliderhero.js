import React from "react";
import Slider from "react-slick";

const Sliderhero = () => {

    const settings = {
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        focusOnSelect: false,
        pauseOnHover: true
    };

    return (
        <section className="slider mt-0">
            <Slider {...settings}>
                <div className="slider-item">
                    <img src="./assets/slider/flavour-banner-bangladesh.jpg" alt="" width="100%" />
                </div>
                <div className="slider-item">
                    <img src="./assets/slider/bangladesh_banner.jpg" alt="" width="100%" />
                </div>
            </Slider>
        </section>
    )
}

export default Sliderhero;
