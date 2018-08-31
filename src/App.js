import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Header from "./Header";
import MovieListClass, { MovieList } from "./MovieList";
import PlayReact from "./PlayReact";

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

  render() {
    const { movies } = this.state;
    return (
      <div>
        <Header />
        <MovieList />
        <MovieListClass movies={movies} />
        <PlayReact />
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
