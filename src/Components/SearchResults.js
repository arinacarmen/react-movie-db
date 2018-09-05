import React from "react";
import Card from "@material-ui/core/Card";
import { CardContent, Typography, IconButton } from "@material-ui/core";
import "./SearchBar.css";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import "./SearchBar.css";

export default function SearchResults(props) {
  const { movie, addMovie } = props;
  return (
    <div className="result-container">
      <Card>
        <CardContent>
          <Typography>
            {movie.title} ({movie.year})
          </Typography>
        </CardContent>
        <CardActions>
          <Button className="btn-results" onClick={() => addMovie(movie)}>
            <Icon>add</Icon> Add Movie
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
