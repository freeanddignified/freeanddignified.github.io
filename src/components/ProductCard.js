import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {useNavigate} from "react-router-dom";

const ProductCard = ({id}) => {
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
                    height="140"
                    image={`https://picsum.photos/200/140?random=${id}`}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default ProductCard