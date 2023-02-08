import { Box } from "@mui/material";
import React from "react";
import { ThreeDots } from "react-loader-spinner";

const Spinner = () => {
  return (
    <Box
      sx={{
        height: "65vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      bgcolor="background.paper"
    >
      <ThreeDots color="#428bdf"/> 
    </Box>
  );
};

export default Spinner;
