import React, {useContext} from "react";

import Header from "../components/Header";
import BannerLayout from "../layout/BannerLayout";
import ProductCard from "../components/ProductCard";
import Box from "@mui/material/Box";
import CategoryCard from "../components/CategoryCard";
import Footer from "../components/Footer";
import {AppContext} from "../context/AppDataContext";


const Main = () => {

    const {categories, products} = useContext(AppContext);

    const randomProducts = products.slice(0, 6)

  return (
    <div className="page">
        <Header />
        <BannerLayout>
            <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={2} sx={{width: '100%', marginBottom: '20px'}}>
                {
                    randomProducts.map((product, index) => (
                        <ProductCard key={index} id={product.productId} data={product}/>
                    ))
                }
            </Box>
            <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={2} sx={{width: '100%', justifyItems: 'center', marginBottom: '20px'}}>
                {categories.map((cat, index) => (
                    <CategoryCard key={index} data={cat}/>
                ))}
            </Box>
            <Footer/>
        </BannerLayout>
    </div>
  );
};

export default Main;
