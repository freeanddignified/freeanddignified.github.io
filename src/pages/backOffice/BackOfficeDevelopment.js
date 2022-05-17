import React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import {NavLink} from "react-router-dom";
import MenuList from "@mui/material/MenuList";;

const BackOfficeDevelopment = () => {
  return (
      <Box
          display="grid"
          gridTemplateColumns="1fr"
          gap={2}
          sx={{ width: "100%", padding: "20px", backgroundColor: "#1976d2" }}
      >
          <Box display="flex" alignItems="center" justifyContent="center">
              <iframe style={{width: "100%", height: "400px"}} src="https://www.youtube.com/embed/nIDdgrp5IXM" title="YouTube video player"
                      frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen></iframe>
          </Box>
          <MenuList>
              <MenuItem className="list list--dev">
                  <NavLink to="#" className="adminNav adminNav--dev">
                      БРЕНД ВІЛЬНІ ТА ГІДНІ
                  </NavLink>
              </MenuItem>
              <MenuItem className="list list--dev">
                  <NavLink to="#" className="adminNav adminNav--dev">
                      ОСВІТНІ ЛЕКЦІЇ ТА ПРОГРАМИ
                  </NavLink>
              </MenuItem>
              <MenuItem className="list list--dev">
                  <NavLink to="#" className="adminNav adminNav--dev">
                      ПРОГРАМИ СЕРТИФІКАЦІЇ
                  </NavLink>
              </MenuItem>
              <MenuItem className="list list--dev">
                  <NavLink to="#" className="adminNav adminNav--dev">
                      інші відео
                  </NavLink>
              </MenuItem>
          </MenuList>
      </Box>
  )
};

export default BackOfficeDevelopment;