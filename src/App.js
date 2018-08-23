import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import MovieList from "./MovieList";
import PlayReact from "./PlayReact";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MovieList />
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
