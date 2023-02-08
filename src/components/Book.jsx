import { Grid } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import BookCover from "../assets/Book_Cover_NotAvailable.png";

const Book = ({ book, isPreviousData }) => {
  const bookImg = book.volumeInfo.imageLinks?.smallThumbnail
    ? book.volumeInfo.imageLinks.smallThumbnail
    : BookCover;

  return (
    <Grid item xs={1} sm={1} md={1}>
      <Card
        sx={{
          xs: { width: "100%" },
          sm: { maxWidth: 245, height: 320 },
        }}
      >
        <CardActionArea>
          <a href={book.volumeInfo.previewLink} target="_black">
            <CardMedia
              component="img"
              height="max-content"
              image={bookImg}
              alt="book cover"
              sx={{
                "&:hover": { borderBottom: "6px solid #428bdf" },
                filter: isPreviousData && "grayscale(100%)",
              }}
            />
          </a>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default Book;
