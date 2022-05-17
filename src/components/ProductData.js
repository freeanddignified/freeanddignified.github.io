import React from "react";
import Typography from "@mui/material/Typography";
import Rating from '@mui/material/Rating';

const ProductData = ({style, data}) => {

    return (
        <div style={style}>
            <Typography variant="h5" gutterBottom component="div">
                {data.productName}
            </Typography>
            <Typography variant="h6" gutterBottom component="div">
                {data.productId}
            </Typography>
            <Rating name="read-only" value={data.rating} readOnly />
            <Typography variant="body1" gutterBottom>
                {data.productShortDescription}
            </Typography>
            {
                Object.keys(data.properties).map((prop, index) =>
                    <React.Fragment key={index}>
                        <Typography variant="h6" gutterBottom component="div">
                            {data.properties[prop].title}
                        </Typography>
                        {(() => {
                            if (prop === 'colors') {
                                return (
                                    <ul className="colors-list">
                                        {
                                            data.properties[prop].value.map((color, index) => (
                                                <li key={index} style={{backgroundColor: color}} />
                                            ))
                                        }
                                    </ul>
                                )
                            } else if (prop === 'techParameters') {
                                return (
                                    <ul className="data-list">
                                        {
                                            data.properties[prop].value.map((data, index) => (
                                                <li key={index} >
                                                    {data}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                )
                            } else {
                                return (
                                    <Typography variant="body1" gutterBottom>
                                        {data.properties[prop].value}
                                    </Typography>
                                )
                            }
                        })()}
                    </React.Fragment>
                )
            }
        </div>
    )
}
export default ProductData