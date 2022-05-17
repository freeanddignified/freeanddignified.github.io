import React from 'react';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardContent from "@mui/material/CardContent";
import {useNavigate} from "react-router-dom";

const CategoryCard = ({data}) => {
    const navigate = useNavigate();

    return (
        <Card sx={{ width: '200px', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#1976d2', color: '#fff', textAlign: 'center' }}>
            <CardActionArea sx={{ width: '200px', height: '200px' }} onClick={() => {
                navigate(`${data.categorySlug ? '/c-' + data.categorySlug : '/s-' + data.subCategorySubSlug}`)
            }}>
                <CardContent>
                    {data.categoryName ? data.categoryName : data.subCategoryName}
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default CategoryCard