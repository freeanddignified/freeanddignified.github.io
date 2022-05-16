import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProductSlider.css"
import Slider from "react-slick";

const ProductSlider = ({style, images}) => {

    const settings = {
        customPaging: function(i) {
            return (
                <a>
                    <img src={`https://picsum.photos/400/300?random=${images[i]}`} />
                </a>
            );
        },
        arrows: false,
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div style={style} className="product-slider">
            <Slider {...settings}>
                {
                    images.map((imageId, index) => (
                        <div key={index}>
                            <img src={`https://picsum.photos/400/300?random=${imageId}`} />
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}

export default ProductSlider