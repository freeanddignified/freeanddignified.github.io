import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";

const Register = () => {

    return (
        <div>
            <Header/>
            <h1>
                here will be a Register form
            </h1>
            <Link to="/auth/login">Login</Link>
        </div>
    )
}

export default Register