import React from 'react'
import {Routes, Route} from "react-router-dom";

import Main from './pages/Main'
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import BackOffice from "./pages/backOffice/BackOffice"
import Category from "./pages/Category";
import Product from "./pages/Product";
import SubCategory from "./pages/SubCategory";

const AppRouter = () => {
    return (
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="dashboard" element={ <BackOffice /> } />
        <Route path="c-:slug" element={<Category />} />
        <Route path="s-:slug" element={<SubCategory />} />
        <Route path="p-:productId" element={<Product />} />
      </Routes>
    );
};

export default AppRouter