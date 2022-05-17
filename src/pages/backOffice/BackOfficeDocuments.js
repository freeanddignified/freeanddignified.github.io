import React from "react";
import Box from "@mui/material/Box";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import {NavLink} from "react-router-dom";

const BackOfficeDocuments = () => {
   return (
      <Box
          display="grid"
          gridTemplateColumns="1fr"
          gap={2}
          sx={{ width: "100%", padding: "20px", backgroundColor: "#1976d2" }}
      >
         
          <MenuList>
              <MenuItem className="list list--dev">
                  <NavLink to="#" className="adminNav adminNav--dev">
                      Документ 1
                  </NavLink>
              </MenuItem>
              <MenuItem className="list list--dev">
                  <NavLink to="#" className="adminNav adminNav--dev">
                      Документ 2
                  </NavLink>
              </MenuItem>
              <MenuItem className="list list--dev">
                  <NavLink to="#" className="adminNav adminNav--dev">
                      Документ 3
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

export default BackOfficeDocuments
