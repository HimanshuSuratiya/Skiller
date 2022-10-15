import React from "react";
import Images from "../../Images/Image";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Categories = () => {
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
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <a href="#!" class="teamImg">
                                                <img src={Images.one} />
                                            </a>
                                            <div class="member-info">
                                                <h3>Food & Drink</h3>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <a href="#!" class="teamImg">
                                                <img src={Images.two} />
                                            </a>
                                            <div class="member-info">
                                                <h3>Plumber</h3>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <a href="#!" class="teamImg">
                                                <img src={Images.three} />
                                            </a>
                                            <div class="member-info">
                                                <h3>Cleaning Services</h3>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <a href="#!" class="teamImg">
                                                <img src={Images.four} />
                                            </a>
                                            <div class="member-info">
                                                <h3>Yoga Classes</h3>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <a href="#!" class="teamImg">
                                                <img src={Images.five} />
                                            </a>
                                            <div class="member-info">
                                                <h3>Salon & Spa</h3>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <a href="#!" class="teamImg">
                                                <img src={Images.six} />
                                            </a>
                                            <div class="member-info">
                                                <h3>Gym</h3>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <a href="#!" class="teamImg">
                                                <img src={Images.seven} />
                                            </a>
                                            <div class="member-info">
                                                <h3>Transport</h3>
                                            </div>
                                        </div>

                                    </div>
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