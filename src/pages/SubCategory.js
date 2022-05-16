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
    const {products} = useContext(AppContext);

    return (
        <div className="page">
            <Header />
            <BannerLayout>
                <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={2} sx={{width: '100%', marginBottom: '20px'}}>
                    <ProductCard id={1}/>
                    <ProductCard id={2}/>
                    <ProductCard id={3}/>
                    <ProductCard id={21}/>
                    <ProductCard id={22}/>
                    <ProductCard id={23}/>
                    <ProductCard id={31}/>
                    <ProductCard id={32}/>
                    <ProductCard id={33}/>
                    <ProductCard id={41}/>
                    <ProductCard id={42}/>
                    <ProductCard id={43}/>
                </Box>
                <Footer/>
            </BannerLayout>
        </div>
    )
}

export default SubCategory