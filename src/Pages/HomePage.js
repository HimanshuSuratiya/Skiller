import React from "react";
import Banner from "../Components/Banner/Banner";
import Categories from "../Components/Categories/Categories";
import Menu from "../Components/Menu/Menu";

const HomePage = () => {
    return (
        <>
            <div class="page-wraper">
                <Menu />
                <Banner />
                <Categories />
            </div>
        </>
    )
}

export default HomePage;