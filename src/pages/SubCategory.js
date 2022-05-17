import React, {useContext} from "react";
import { useParams } from "react-router-dom";

import Header from "../components/Header";
import BannerLayout from "../layout/BannerLayout";
import Box from "@mui/material/Box";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

import {AppContext} from "../context/AppDataContext";

const SubCategory = () => {
    const params = useParams();
    const {categories, products} = useContext(AppContext);


    return (
        <div className="page">
            <Header />
            <BannerLayout>
                <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={2} sx={{width: '100%', marginBottom: '20px'}}>
                    {
                        products.map((product, index) => (
                            <ProductCard key={index} id={product.productId} data={product}/>
                        ))
                    }
                </Box>
                <Footer/>
            </BannerLayout>
        </div>
    )
}

export default SubCategory