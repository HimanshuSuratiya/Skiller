import React from "react"
import Images from "../../../Images/Image";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CustomSlidder from "../../Slidder/CustomSlidder";

const CategoriesData = [
    { imgSource: Images.providerOne },
    { imgSource: Images.providerTwo },
    { imgSource: Images.providerThree },
    { imgSource: Images.providerFour },
    { imgSource: Images.providerFive },
    { imgSource: Images.providerSix },
    { imgSource: Images.providerSeven },
    { imgSource: Images.providerEight },
    { imgSource: Images.providerNine },
]

const Vendor = () => {
    return (
        <>
            <section className="site-bg-gray aon-feature-provider-area sf-curve-pos">
                <div className="container">
                    <div className="section-head">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <span className="aon-sub-title">VENDOR</span>
                                <h2 className="aon-title">Featured Providers</h2>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do usmod tempor incididunt ut labore et dolore magna aliqua.sed do usmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                    <div className="service-slider-one swiper-container style2 swiper-initialized swiper-horizontal swiper-pointer-events swiper-free-mode">
                        <div className="swiper-wrapper" id="swiper-wrapper-service" aria-live="off" style={{ transitionDuration: "0ms" }}>
                            <div className="swiper-slide swiper-slide-visible swiper-slide-active" data-swiper-slide-index="0" role="group" aria-label="1 / 4">
                                <CustomSlidder Vendor={true} CategoriesData={CategoriesData} />
                            </div>
                        </div>
                        <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                    </div>
                    <div className="slider-btn-wrap">
                        <div className="service-prev slider-btn style2" tabindex="0" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-service">
                            <ArrowBackIcon style={{ cursor: 'pointer' }} />
                        </div>
                        <div className="service-next slider-btn style2" tabindex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-service">
                            <ArrowForwardIcon style={{ cursor: 'pointer' }} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Vendor;