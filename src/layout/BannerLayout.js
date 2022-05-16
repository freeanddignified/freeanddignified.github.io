import React from "react";
import './BannerLayout.css'
import Banner from "../components/Banner";

const BannerLayout = (props) => {

    return (
        <div className="banner-layout">
            <Banner/>
            <Banner/>
            <div className="banner-layout-content">
                {props.children}
            </div>
        </div>
    )
}

export default BannerLayout