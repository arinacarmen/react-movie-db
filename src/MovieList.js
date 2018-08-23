import React from "react";
import Button from "@material-ui/core/Button";
import { InputLabel } from "../node_modules/@material-ui/core";
import MovieItem from "./MovieItem";
import styles from "./MovieList.css";

function MovieList() {
  return (
    <div className="container">
      <input
        className="search-bar"
        placeholder="Find Movies, TV Shows and more..."
      />
      <Button className="search-btn" variant="contained" color="secondary">
        Search movie
      </Button>
      <div className="movies-container">
        <MovieItem
          title="Indepedence Day"
          year="1996"
          description="Fancy Description"
        />
      </div>
    </div>
  );
}

export default MovieList;
