import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Button } from "@mui/material";

const SearchForm = ({setSearchTerm}) => {

  const [searchInput, setSearchInput]= useState("");

  const handleChange = (e) =>{
    // console.log(e.target.value);
    setSearchInput(e.target.value);
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    setSearchTerm(searchInput);
    // console.log("search term: ", searchInput);
  }

  return (
    <Box
      bgcolor="background.paper"
      sx={{ p: 3, display: "flex", justifyContent: "center" }}
    >
      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 500 }}
        onSubmit={handleSubmit}
      >
        <SearchIcon sx={{p: "10px"}}/>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search for book title, author name..."
          type="search"
          name="search"
          autoFocus
          onChange={handleChange}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <Button variant="contained" type="submit" sx={{marginLeft: 2}}>Search</Button>
      </Paper>
    </Box>
  );
};

export default SearchForm;
