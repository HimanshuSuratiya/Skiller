import React from "react";
import Images from "../../Images/Image";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Slider from "react-slick";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, background: "red", borderRadius: '5px', height: '25px', width: '30px', alignItems: 'center', justifyContent: 'center', display: 'flex' }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, background: "green", borderRadius: '5px', height: '25px', width: '30px', alignItems: 'center', justifyContent: 'center', display: 'flex' }}
            onClick={onClick}
        />
    );
}

const Categories = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        spaceBetween: 90,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <>
            <section class="categoriesSection aon-categories-area">
                <div class="container">
                    <div class="section-head">
                        <div class="row">
                            <div class="col-lg-6 col-md-12">
                                <span class="aon-sub-title">categories</span>
                                <h2 class="aon-title">Popular Categories</h2>
                            </div>
                            <div class="col-lg-6 col-md-12">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do usmod tempor incididunt ut labore et dolore magna aliqua.sed do usmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="p-t80">
                                <div class="swiper categories">
                                    <Slider {...settings}>
                                        <div class="swiper-slide">
                                            <a href="#!" class="teamImg" style={{ height: '228px', width: '226px', display: 'inline-block' }}>
                                                <img src={Images.one} style={{ height: '100%', width: '100%' }} />
                                            </a>
                                            <div class="member-info">
                                                <h3>Food & Drink</h3>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <a href="#!" class="teamImg" style={{ height: '228px', width: '226px', display: 'inline-block' }}>
                                                <img src={Images.two} style={{ height: '100%', width: '100%' }} />
                                            </a>
                                            <div class="member-info">
                                                <h3>Plumber</h3>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <a href="#!" class="teamImg" style={{ height: '228px', width: '226px', display: 'inline-block' }}>
                                                <img src={Images.three} style={{ height: '100%', width: '100%' }} />
                                            </a>
                                            <div class="member-info">
                                                <h3>Cleaning Services</h3>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <a href="#!" class="teamImg" style={{ height: '228px', width: '226px', display: 'inline-block' }}>
                                                <img src={Images.four} style={{ height: '100%', width: '100%' }} />
                                            </a>
                                            <div class="member-info">
                                                <h3>Cleaning Services</h3>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <a href="#!" class="teamImg" style={{ height: '228px', width: '226px', display: 'inline-block' }}>
                                                <img src={Images.five} style={{ height: '100%', width: '100%' }} />
                                            </a>
                                            <div class="member-info">
                                                <h3>Cleaning Services</h3>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <a href="#!" class="teamImg" style={{ height: '228px', width: '226px', display: 'inline-block' }}>
                                                <img src={Images.six} style={{ height: '100%', width: '100%' }} />
                                            </a>
                                            <div class="member-info">
                                                <h3>Cleaning Services</h3>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <a href="#!" class="teamImg" style={{ height: '228px', width: '226px', display: 'inline-block' }}>
                                                <img src={Images.seven} style={{ height: '100%', width: '100%' }} />
                                            </a>
                                            <div class="member-info">
                                                <h3>Cleaning Services</h3>
                                            </div>
                                        </div>
                                    </Slider>
                                    <div class="categoriesControler">
                                        <div class="swiper-button-next"><ArrowBackIcon style={{ cursor: 'pointer' }} /></div>
                                        <div class="swiper-button-prev"><ArrowForwardIcon style={{ cursor: 'pointer' }} /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Categories;