import React, {useContext} from "react";
import './Product.css'
import Header from "../components/Header";
import OneBannerLayout from "../layout/OneBannerLayout";
import {useParams} from "react-router-dom";
import {AppContext} from "../context/AppDataContext";
import Paper from '@mui/material/Paper';
import ProductSlider from "../components/ProductSlider";
import ProductData from "../components/ProductData";
import ProductDescription from "../components/ProductDescription";

const Product = () => {
    const params = useParams();
    const {products} = useContext(AppContext);

    const productData = products.find(product => (product.productId == params.productId))

    return (
        <div className="page">
            <Header />
            <OneBannerLayout>
                <Paper
                    elevation={6}
                    sx={{
                        width: '100%',
                        height: '100%',
                        display: 'grid',
                        gridTemplateColumns: '50% 50%',
                        gridTemplateRows: '1fr 1fr',
                        gridGap: '20px',
                        padding: '20px'
                    }}
                >
                    <ProductSlider style={{gridArea: '1 / 1 / 2 / 2'}} images={productData.imagesId}/>
                    <ProductData style={{gridArea: '1 / 2 / 3 / 3'}} data={productData}/>
                    <ProductDescription style={{gridArea: '2 / 1 / 3 / 2'}} description={productData.productDescription}/>
                </Paper>
            </OneBannerLayout>
        </div>
    )
}

export default Product