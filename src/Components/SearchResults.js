import React from "react";
import Card from "@material-ui/core/Card";
import { CardContent, Typography, IconButton } from "@material-ui/core";
import "./SearchBar.css";
import Icon from "@material-ui/core/Icon";

export default function SearchResults(props) {
  const { movie, addMovie } = props;
  return (
    <div>
      <CardContent>
        <Typography>
          {movie.title} ({movie.year}){" "}
        </Typography>
      </CardContent>
      <IconButton onClick={addMovie(movie)}>
        <Icon>Add</Icon>
      </IconButton>
    </div>
  );
}
