import React from "react";
import Typography from "@mui/material/Typography";

const ProductDescription = ({style, description}) => {

    return (
        <div style={style}>
            <Typography variant="body1" gutterBottom>
                {description}
            </Typography>
        </div>
    )
}

export default ProductDescription