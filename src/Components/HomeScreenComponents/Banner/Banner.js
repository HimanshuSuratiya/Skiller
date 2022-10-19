import React from "react";
import Images from "../../../Images/Image";
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import CategoryIcon from '@mui/icons-material/Category';
import PublicIcon from '@mui/icons-material/Public';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';

const Banner = () => {
    return (
        <>
            <section className="aon-banner-wrap">
                <div className="aon-banner-outer sf-overlay-wrapper">
                    <div className="aon-banner-pic">
                        <div className="aon-curve-area"></div>
                        <div className="aon-overlay-main" style={{ opacity: '0.8', backgroundColor: '#31708f' }}></div>
                        <img src={Images.bnrPic} width="1919" height="976" alt="" />
                    </div>
                    <div className="aon-banner-text">
                        <div className="container">
                            <div className="aon-bnr-write">
                                <h2 className="text-top-line">Skiller <span className="text-secondry">Services</span> & </h2>
                                <h2 className="text-bot-line">Get home maintenance done.</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="aon-find-bar aon-findBar-vertical">
                    <div className="container">
                        <div className="search-form ">
                            <form className="clearfix search-providers" method="get">
                                <input type="hidden" name="s" value="" />
                                <div className="aon-searchbar-table">
                                    <div className="aon-searchbar-left">
                                        <ul className="clearfix sf-searchfileds-count-5">
                                            <li>
                                                <label>Keyword</label>
                                                <input type="text" value="" placeholder="Enter Keyword" id="keyword" name="keyword" className="form-control sf-form-control" />
                                                <span className="sf-search-icon"> <TravelExploreIcon /> </span>
                                            </li>
                                            <li>
                                                <label>Category</label>
                                                <select id="categorysrh" name="catid" className="form-control sf-form-control aon-categories-select sf-select-box" title="Select Category">
                                                    <option className="bs-title-option" value="">Select a Category</option>
                                                    <option value="17">Cab Service</option>
                                                    <option value="17">Car Dealers</option>
                                                    <option value="17">Food & Drink</option>
                                                    <option value="17">Plumber</option>
                                                    <option value="17">Electrician</option>
                                                </select>
                                                <span className="sf-search-icon"><CategoryIcon /></span>
                                            </li>
                                            <li>
                                                <label>Country</label>
                                                <select className="sf-select-box form-control sf-form-control bs-select-hidden" data-live-search="true" name="country" id="country" title="Country" data-header="Select a Country">
                                                    <option className="bs-title-option" value="">Select Country</option>
                                                    <option value="">Select Country</option>
                                                    <option value="Turkey">Turkey</option>
                                                    <option value="United States">United States</option>
                                                </select>
                                                <span className="sf-search-icon"><PublicIcon /></span>
                                            </li>
                                            <li>
                                                <label>City</label>
                                                <select className="sf-select-box form-control sf-form-control bs-select-hidden" data-live-search="true" name="city" id="city" title="City" data-header="Select a City">
                                                    <option className="bs-title-option" value="">Select City</option>
                                                    <option value="">Select City</option>
                                                    <option value="">London</option>
                                                    <option value="">Japan</option>
                                                    <option value="">US</option>
                                                </select>
                                                <span className="sf-search-icon"><LocationCityIcon /></span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="aon-searchbar-right">
                                        <button type="button" className="site-button"><YoutubeSearchedForIcon /> Find Provider</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Banner;