import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from './pages/Main'
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"

const AppRouter = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Main/> }>
                    <Route path="auth" >
                        <Route path="login" element={ <Login/> }/>
                        <Route path="register" element={ <Register/> }/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter