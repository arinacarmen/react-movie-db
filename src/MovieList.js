import React from "react";
import Button from "@material-ui/core/Button";
import { InputLabel } from "../node_modules/@material-ui/core";

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
    </div>
  );
}

export default MovieList;
