import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import Header from "../../components/Header";

const MerchCabinet = () => {
  let activeStyle = {
    textDecoration: "underline",
  };
  let inActiveStyle = {
    textDecoration: "none",
  };

  return (
    <div>
      <Header />
      <nav>
        <ul>
          <li>
            <NavLink
              to="main"
              style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}
            >
              Головна
            </NavLink>
          </li>
          <li>
            <NavLink
              to="shop"
              style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}
            >
              Мій магазин
            </NavLink>
          </li>
          <li>
            <NavLink
              to="development"
              style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}
            >
              Розвиток
            </NavLink>
          </li>
          <li>
            <NavLink
              to="needs"
              style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}
            >
              Вікно потреб
            </NavLink>
          </li>
          <li>
            <NavLink
              to="opportunities"
              style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}
            >
              Вікно можливостей
            </NavLink>
          </li>
          <li>
            <NavLink
              to="documents"
              style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}
            >
              Документи
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default MerchCabinet;
