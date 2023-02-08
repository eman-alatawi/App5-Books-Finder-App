import { Box } from "@mui/material";
import { useState } from "react";
import "./App.css";
import BooksList from "./components/BooksList";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import SearchForm from "./components/SearchForm";
import ToggleColorMode from "./context/ColorModeContext";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

function App() {
  const [searchTerm, setSearchTerm] = useState("React Js");
  
  return (
    <ToggleColorMode>
      <Box sx={{ textAlign: "center" }}>
        <NavBar />
        <SearchForm setSearchTerm={setSearchTerm} />
        <BooksList searchTerm={searchTerm} />
        <Footer />
      </Box>
      <ReactQueryDevtools />
    </ToggleColorMode>
  );
}

export default App;
