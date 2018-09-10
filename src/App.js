import React, { Component } from "react";
import "./App.css";
import axios from "axios";

import Header from "./Header";
import SearchBar2 from "./SearchBars/SearchBar2";
import MovieListClass, { MovieList } from "./MovieList";
import { getMovies, createMovie, deleteMovie } from "./Components/Api";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {
          id: 1,
          title: "test movie",
          year: 2000,
          description: "fancy description"
        }
      ]
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/movies").then(response => {
      this.setState({
        movies: response.data
      });
    });
  }
  deleteMovie = id => {
    deleteMovie(id).then(() => {
      const { movies } = this.state;
      const filtered = movies.filter(m => m.id !== id);
      this.setState({
        movies: filtered
      });
    });
  };

  addMovie = movie => {
    const newMovie = {
      ...movie,
      id: movie.imdb_id,
      name: movie.title
    };
    createMovie(newMovie).then(() => {
      this.setState({
        movie: [newMovie, ...this.state.movies]
      });
    });
  };

  render() {
    const { movies } = this.state;
    return (
      <div>
        <Header />
        <SearchBar2 />
        <MovieList
          movies={this.state.movies}
          addMovie={this.addMovie}
          deleteMovie={this.deleteMovie}
        />
        <MovieListClass movies={movies} deleteMovie={this.deleteMovie} />
        <Footer />
      </div>
    );
  }
}

const Footer = () => (
  <footer>
    <p>© React Movie DB Footer</p>
  </footer>
);

export default App;
