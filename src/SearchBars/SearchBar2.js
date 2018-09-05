import React from "react";
import Button from "@material-ui/core/Button";
import "./SearchBar2.css";

function SearchBar2() {
  return (
    <div className="s2-container">
      <input
        className="search-bar"
        placeholder="See if SearchBar2 is Working..."
      />
      <Button
        className="btn-search2"
        variant="contain"
        color="secondary"
        onClick={() => alert("Yeyyy!! It's Working :D ")}
      >
        Search Movie
      </Button>
    </div>
  );
}

export default SearchBar2;
