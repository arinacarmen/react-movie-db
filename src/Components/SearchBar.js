import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import "./SearchBar.css";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import SearchResults from "./SearchResults";
import { searchMovies } from "./Api";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      searchTerm: ""
    };
  }
  onInputChange = event => {
    const { value } = event.target;
    event.preventDefault();
    this.setState({
      searchTerm: value
    });
  };

  addMovie = movie => {
    this.props.addMovie(movie);
  };

  search = event => {
    event.preventDefault();
    this.setState({ results: [] });
    searchMovies(this.state.searchTerm).then(response => {
      this.setState({
        results: [response.data]
      });
    });
  };
  render() {
    const { results, searchTerm } = this.state;

    return (
      <div className="search-component">
        <TextField
          label="Find Movies, TV Shows and more..."
          className="search"
          value={searchTerm}
          onChange={this.onInputChange}
        />

        <IconButton className="icon-search" onClick={this.search}>
          <Icon> search </Icon>
        </IconButton>

        <div className="search-results">
          {results.length > 0
            ? results.map(movie => (
                <SearchResults
                  key={movie.imdb_id}
                  movie={movie}
                  addMovie={this.addMovie}
                />
              ))
            : ""}
        </div>
      </div>
    );
  }
}
export default SearchBar;
