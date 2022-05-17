import React from "react";
import { NavLink } from "react-router-dom";

import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";

import "./AdminLayout.css";
import Banner from "../components/Banner";

const AdminLayout = (props) => {

  return (
    <div className="admin-layout">
      <Paper className="menu">
        <MenuList>
          <Typography variant="h6" component="h1">
            Мій кабінет
          </Typography>
          <MenuItem className="list">
            <NavLink to="main" className="adminNav">
              Головна
            </NavLink>
          </MenuItem>
          <MenuItem className="list">
            <NavLink to="shop" className="adminNav">
              Мій магазин
            </NavLink>
          </MenuItem>
          <MenuItem className="list">
            <NavLink to="development" className="adminNav">
              Розвиток
            </NavLink>
          </MenuItem>
          <MenuItem className="list">
            <NavLink to="needs" className="adminNav">
              Вікно потреб
            </NavLink>
          </MenuItem>
          <MenuItem className="list">
            <NavLink to="opportunities" className="adminNav">
              Вікно можливостей
            </NavLink>
          </MenuItem>
          <MenuItem className="list">
            <NavLink to="documents" className="adminNav">
              Документи
            </NavLink>
          </MenuItem>
        </MenuList>
      </Paper>
      { !props.bannerOff &&
      <Banner />
      }
      <div className="admin-layout-content">{props.children}</div>
    </div>
  );
};

export default AdminLayout;
