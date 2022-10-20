import React from "react";
import Slider from "react-slick";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarRateIcon from '@mui/icons-material/StarRate';

function SampleNextArrow(props) {
    const { classNameName, style, onClick } = props;
    return (
        <div
            classNameName={classNameName}
            style={{ ...style, background: "red", borderRadius: '5px', height: '25px', width: '30px', alignItems: 'center', justifyContent: 'center', display: 'flex' }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { classNameName, style, onClick } = props;
    return (
        <div
            classNameName={classNameName}
            style={{ ...style, background: "green", borderRadius: '5px', height: '25px', width: '30px', alignItems: 'center', justifyContent: 'center', display: 'flex' }}
            onClick={onClick}
        />
    );
}

const CustomSlidder = ({ Categories, CategoriesData, Vendor }) => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: Categories ? 5 : 3,
        spaceBetween: 90,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <>
            <Slider {...settings}>
                {Categories &&
                    CategoriesData.map((item) => {
                        return (
                            <div className="swiper-slide">
                                <a href="#!" className="teamImg" style={{ height: '228px', width: '226px', display: 'inline-block' }}>
                                    <img src={item.imgSource} style={{ height: '100%', width: '100%' }} />
                                </a>
                                <div className="member-info">
                                    <h3>Food & Drink</h3>
                                </div>
                            </div>
                        )
                    })
                }
                {Vendor &&
                    CategoriesData.map((item) => {
                        return (
                            <div className="aon-ow-provider-wrap" >
                                <div className="aon-ow-provider shine-hover">
                                    <div className="aon-ow-top">
                                        <div className="aon-pro-check"><span><i className="fa fa-check"></i></span></div>
                                        <div className="aon-pro-favorite"><a href="#"><FavoriteBorderIcon /></a></div>
                                        <div className="aon-ow-info">
                                            <h4 className="aon-title"><a href="#!">Mila Kunis</a></h4>
                                            <span>Queens, United States</span>
                                        </div>
                                    </div>
                                    <div className="aon-ow-mid">
                                        <div className="aon-ow-media media-bg-animate">
                                            <a className="shine-box" href="#!">
                                                <img src={item.imgSource} alt="" /></a>
                                        </div>
                                        <p>Through our expertise, technological knowledge, global presence and bespoke.</p>
                                        <div className="aon-ow-pro-rating">
                                            <StarRateIcon />
                                            <StarRateIcon />
                                            <StarRateIcon />
                                            <StarRateIcon />
                                            <StarRateIcon />
                                        </div>
                                    </div>
                                </div>
                                <div className="aon-ow-bottom">
                                    <a href="profile-full.html">Request A Quote</a>
                                </div>
                            </div>
                        )
                    })

                }
            </Slider>
        </>
    );
};

export default CustomSlidder;