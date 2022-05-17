import React from "react";

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
          
      </Box>
  )
};

export default BackOfficeNeeds;
