import React from "react";
import './BannerLayout.css'
import Banner from "../components/Banner";

const BannerLayout = (props) => {

    return (
        <div className="banner-layout">
            <Banner/>
            <div className="banner-layout-content">
                {props.children}
            </div>
            <Banner/>
        </div>
    )
}

export default BannerLayout