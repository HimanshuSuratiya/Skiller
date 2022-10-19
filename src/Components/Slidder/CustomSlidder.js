import React from "react";
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

const CustomSlidder = ({ Categories, CategoriesData }) => {

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
            <Slider {...settings}>
                {Categories &&
                    CategoriesData.map((item) => {
                        return (
                            <div class="swiper-slide">
                                <a href="#!" class="teamImg" style={{ height: '228px', width: '226px', display: 'inline-block' }}>
                                    <img src={item.imgSource} style={{ height: '100%', width: '100%' }} />
                                </a>
                                <div class="member-info">
                                    <h3>Food & Drink</h3>
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