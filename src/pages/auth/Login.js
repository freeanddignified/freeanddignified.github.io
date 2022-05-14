import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";

const Login = () => {

    return (
        <div>
            <Header/>
            <h1>
                here will be a login form
            </h1>
            <Link to="/auth/register">Register</Link>
        </div>
    )
}

export default Login