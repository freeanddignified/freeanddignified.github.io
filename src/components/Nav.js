import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <Link to="/">Main</Link>
            <Link to="/auth/login">Login</Link>
            <Link to="/auth/register">Register</Link>
        </nav>
    )
}

export default Nav