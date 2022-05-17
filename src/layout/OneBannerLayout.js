import React from "react";
import './OneBannerLayout.css'
import Banner from "../components/Banner";

const OneBannerLayout = (props) => {

    return (
        <div className="one-banner-layout">
            <Banner/>
            <div className="one-banner-layout-content">
                {props.children}
            </div>
        </div>
    )
}

export default OneBannerLayout