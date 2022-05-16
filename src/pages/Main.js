import React from "react";

import Header from "../components/Header";
import BannerLayout from "../layout/BannerLayout";
import ProductCard from "../components/ProductCard";
import Box from "@mui/material/Box";
import CategoryCard from "../components/CategoryCard";
import Footer from "../components/Footer";


const Main = () => {
  return (
    <div className="page">
        <Header />
        <BannerLayout>
            <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={2} sx={{width: '100%', marginBottom: '20px'}}>
                <ProductCard id={1}/>
                <ProductCard id={2}/>
                <ProductCard id={3}/>
                <ProductCard id={4}/>
                <ProductCard id={5}/>
                <ProductCard id={6}/>
            </Box>
            <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={2} sx={{width: '100%', justifyItems: 'center', marginBottom: '20px'}}>
                <CategoryCard id={1}/>
                <CategoryCard id={2}/>
                <CategoryCard id={3}/>
            </Box>
            <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={2} sx={{width: '100%', marginBottom: '20px'}}>
                <ProductCard id={1}/>
                <ProductCard id={2}/>
                <ProductCard id={3}/>
                <ProductCard id={4}/>
                <ProductCard id={5}/>
                <ProductCard id={6}/>
            </Box>
            <Footer/>
        </BannerLayout>
    </div>
  );
};

export default Main;
