import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

const CategoryCard = (props) => {
    return (
        <Card sx={{ width: '200px', height: '200px' }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="200"
                    image={`https://picsum.photos/200/140?random=${props.id}`}
                    alt="green iguana"
                />
            </CardActionArea>
        </Card>
    );
}

export default CategoryCard