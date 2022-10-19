import React from "react";
import Images from "../../../Images/Image";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CustomSlidder from "../../Slidder/CustomSlidder";

const CategoriesData = [
    { imgSource: Images.one },
    { imgSource: Images.two },
    { imgSource: Images.three },
    { imgSource: Images.four },
    { imgSource: Images.five },
    { imgSource: Images.six },
    { imgSource: Images.seven },
]

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
                                    <CustomSlidder Categories={true} CategoriesData={CategoriesData} />
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