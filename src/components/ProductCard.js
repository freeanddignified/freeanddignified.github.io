import React, {useContext} from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {useNavigate} from "react-router-dom";
import Rating from "@mui/material/Rating";

const ProductCard = ({id, data}) => {
    const navigate = useNavigate();

    return (
        <Card sx={{ width: '100%' }}
              onClick={() => {
                  navigate(`/p-${id}`)
              }}
        >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="200"
                    image={`https://picsum.photos/200/200?random=${id}`}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {data.productName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {data.producer}
                    </Typography>
                    <Rating name="read-only" value={data.rating} readOnly />
                    <Typography variant="body2" color="text.secondary">
                        {data.currency} {data.price}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default ProductCard