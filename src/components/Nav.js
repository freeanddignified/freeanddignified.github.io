import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  let activeStyle = {
    fontWeight: "bold",
  };

  let inActiveStyle = {
    textDecoration: "underline dotted",
  };

  return (
    <nav>
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}
      >
        Main
      </NavLink>
      <NavLink
        to="/auth/login"
        style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}
      >
        Login
      </NavLink>
      <NavLink
        to="/auth/register"
        style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}
      >
        Register
      </NavLink>
    </nav>
  );
};

export default Nav;
