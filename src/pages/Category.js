import React, {useContext, useEffect, useState} from "react";
import { useParams } from "react-router-dom";

import Header from "../components/Header";
import BannerLayout from "../layout/BannerLayout";
import Box from "@mui/material/Box";
import ProductCard from "../components/ProductCard";
import CategoryCard from "../components/CategoryCard";
import Footer from "../components/Footer";

import {AppContext} from "../context/AppDataContext";

const Category = () => {
    const params = useParams();
    const {categories, products} = useContext(AppContext);

    const cat = categories.find(cat => (cat.categorySlug === params.slug))
    const prod = products.filter(prod => {
        if (prod.categories.includes(cat.categoryId)) {
            console.log('===== DEBUG =====')
            console.log('we in if',)
            return prod
        }
    })
    console.log('===== DEBUG =====')
    console.log('prod',prod)

    return (
        <div className="page">
            <Header />
            <BannerLayout>
                <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={2} sx={{width: '100%', marginBottom: '20px'}}>
                    {
                        prod && prod.length > 0 && prod.map((product, index) => (
                            <ProductCard key={index} id={product.productId} data={product}/>
                        ))
                    }
                </Box>
                <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={2} sx={{width: '100%', justifyItems: 'center', marginBottom: '20px'}}>
                    {cat.subCategories.map((sub, index) => (
                        <CategoryCard id={sub.subCategoryId} key={index}/>
                    ))}
                </Box>
                <Footer/>
            </BannerLayout>
        </div>
    )
}

export default Category