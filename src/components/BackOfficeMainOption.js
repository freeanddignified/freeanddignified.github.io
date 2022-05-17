import React from "react";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import { CardHeader } from "@mui/material";

const BackOfficeMainOption = (props) => {
  return (
    <Card sx={{ width: "100%", height: "100%" }}>
      <CardActionArea>
        <CardHeader
          title={props.children}
          titleTypographyProps={{
            display: "inline-flex",
            alignItems: "center",
            textTransform: "uppercase",
            height: "15rem",
            textAlign: "center",
          }}
        />
      </CardActionArea>
    </Card>
  );
};

export default BackOfficeMainOption;
