import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "background.paper", p: 5 }}>
      <Typography variant="h6" align="center" color="text.primary">
        Books Finder
      </Typography>
      <Typography variant='subtitle1' align='center' color="text.secondary" component="p">
        Using Google Books API!
      </Typography>
    </Box>
  );
};

export default Footer;
