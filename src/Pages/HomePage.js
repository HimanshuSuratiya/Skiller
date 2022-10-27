import React from "react";
import Banner from "../Components/HomeScreenComponents/Banner/Banner";
import Categories from "../Components/HomeScreenComponents/Categories/Categories";
import Menu from "../Components/Menu/Menu";
import HowItWork from "../Components/HomeScreenComponents/HowItWork/HowItWork";
import Vendor from "../Components/HomeScreenComponents/Vendor/Vendor";
import StaticsCount from "../Components/HomeScreenComponents/Statics-counter/StaticsCounter";
import Profile from "../Components/Profile/Profile";

const HomePage = () => {
    return (
        <>
            <div class="page-wraper">
                <Menu />
                <Banner />
                <Categories />
                <HowItWork />
                <Vendor />
                <StaticsCount />
                <Profile />
            </div>
        </>
    )
}

export default HomePage;