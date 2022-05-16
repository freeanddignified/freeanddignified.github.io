import React from 'react'
import {Routes, Route} from "react-router-dom";

import Main from './pages/Main'
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import BackOffice from "./pages/backOffice/BackOffice"

const AppRouter = () => {

    return (
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="dashboard" element={ <BackOffice /> } />
      </Routes>
    );
};

export default AppRouter