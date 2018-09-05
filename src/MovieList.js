import React from "react";
import Button from "@material-ui/core/Button";
// import { InputLabel } from "../node_modules/@material-ui/core";
import MovieItem from "./MovieItem";
import "./MovieList.css";
import SearchBar from "./Components/SearchBar";

export function MovieList() {
  return (
    <div className="container">
      <input
        className="search-bar"
        placeholder="Find Movies, TV Shows and more..."
      />
      <Button
        className="search-btn"
        variant="contained"
        color="secondary"
        onClick={() => alert("click")}
      >
        Search movie
      </Button>

      <div className="search-container">
        <SearchBar />
      </div>

      <div className="movies-container">
        <MovieItem
          title="Indepedence Day"
          year="1996"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        />
      </div>
    </div>
  );
}
function MovieListClass(props) {
  const { movies = [] } = props;
  return (
    <div className="container">
      <div className="movies-list">
        {movies.length > 0
          ? movies.map(movie => (
              <MovieItem
                image={movie.image}
                title={movie.title}
                year={movie.year}
                description={movie.description}
                key={movie.id}
              />
            ))
          : "Movie not Found. Perhaps add one? "}
      </div>
    </div>
  );
}

export default MovieListClass;
