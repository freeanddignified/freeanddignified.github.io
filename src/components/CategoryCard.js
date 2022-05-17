import React from 'react';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardContent from "@mui/material/CardContent";
import {useNavigate} from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";

const CategoryCard = ({data}) => {
    const navigate = useNavigate();

    return (
        <Card sx={{ width: '200px', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#1976d2', color: '#fff', textAlign: 'center' }}>
            <CardActionArea sx={{ width: '200px', height: '200px' }} onClick={() => {
                navigate(`${data.categorySlug ? '/c-' + data.categorySlug : '/s-' + data.subCategorySubSlug}`)
            }}>
                <CardMedia
                    component="img"
                    width="100px"
                    height="100px"
                    image={`./img/category-image-${data.categoryId ? data.categoryId : data.subCategoryId}.png`}
                    alt=""
                    sx={{objectFit: "contain"}}
                />
                <CardContent>
                    {data.categoryName ? data.categoryName : data.subCategoryName}
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default CategoryCard