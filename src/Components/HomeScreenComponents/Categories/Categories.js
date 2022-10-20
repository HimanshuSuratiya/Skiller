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
            <section className="categoriesSection aon-categories-area">
                <div className="container">
                    <div className="section-head">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <span className="aon-sub-title">categories</span>
                                <h2 className="aon-title">Popular Categories</h2>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do usmod tempor incididunt ut labore et dolore magna aliqua.sed do usmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="p-t80">
                                <div className="swiper categories">
                                    <CustomSlidder Categories={true} CategoriesData={CategoriesData} />
                                    <div className="categoriesControler">
                                        <div className="swiper-button-next"><ArrowBackIcon style={{ cursor: 'pointer' }} /></div>
                                        <div className="swiper-button-prev"><ArrowForwardIcon style={{ cursor: 'pointer' }} /></div>
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