import { Box, Grid } from "@mui/material";
import React from "react";
import useBooks from "../hooks/useBooks";
import Alerts from "./Alerts";
import Book from "./Book";
import Results from "./Results";
import Spinner from "./Spinner";

const BooksList = ({ searchTerm }) => {
  const { isSuccess, data, isLoading, isError, error, isPreviousData } = useBooks(searchTerm);
  // console.log(data);

  if(isLoading) return <Spinner/>

  if(isError) return <Alerts error={error}/>

  const booksList = data?.items.map((item, i) => <Book key={item.id} book={item} isPreviousData={isPreviousData} /> )
  return (
    <>
      {isSuccess && (
        <Box bgcolor="background.paper" sx={{ p: 6 }}>
          <Results searchTerm={searchTerm} />
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 1, sm: 4, md: 7 }}
          >
          {booksList}
          </Grid>
        </Box>
      )}
    </>
  );
};

export default BooksList;
