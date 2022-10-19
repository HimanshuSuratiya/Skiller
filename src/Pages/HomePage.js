import React from "react";
import Banner from "../Components/HomeScreenComponents/Banner/Banner";
import Categories from "../Components/HomeScreenComponents/Categories/Categories";
import Menu from "../Components/Menu/Menu";
import HowItWork from "../Components/HomeScreenComponents/HowItWork/HowItWork";

const HomePage = () => {
    return (
        <>
            <div class="page-wraper">
                <Menu />
                <Banner />
                <Categories />
                <HowItWork />
            </div>
        </>
    )
}

export default HomePage;