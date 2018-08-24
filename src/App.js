import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Header from "./Header";
import MovieList from "./MovieList";
import PlayReact from "./PlayReact";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMovie: "",
      buttons: []
    };
  }

  // componentWillMount(){
  //   axios.get("http://localhost:5000/movies").then.(response =>{
  // this.setState({
  //   buttons: response.data
  // });
  //   }
  // }

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
