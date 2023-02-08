import { Alert } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Alerts = ({ error }) => {
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
      {error.message === "searchTerm is empty" ? (
        <Alert severity="info">
          please type book's title or author name in the search bar
        </Alert>
      ) : (
        <Alert severity="error">{error.message}</Alert>
      )}
    </Box>
  );
};

export default Alerts;
