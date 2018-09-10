import React from "react";
import Card from "@material-ui/core/Card";
import { CardContent, Typography } from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import "./SearchBar.css";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
// import DeleteIcon from "@material-ui/icons/Delete";
import CardActions from "@material-ui/core/CardActions";
import "./SearchBar.css";

export default function SearchResults(props) {
  const { movie, addMovie, createMovie } = props;
  return (
    <div className="result-container">
      <Card>
        <CardMedia className="cover">{movie.poster} </CardMedia>
        <CardContent>
          <Typography>
            {movie.title} ({movie.year})<br /> {movie.released}
            <br /> {movie.production}
          </Typography>
        </CardContent>
        <CardActions className="card-btns">
          <Button
            className="icon-add"
            variant="fab"
            mini
            aria-label="Add"
            onClick={() => addMovie(movie)}
          >
            <Icon>add</Icon>
          </Button>
          {/* <Button
            className="icon-del"
            variant="fab"
            mini
            aria-label="Delete"
            onClick={() => alert("Movie should be deleted now...")}
          >
            <DeleteIcon />
          </Button> */}
        </CardActions>
      </Card>
    </div>
  );
}
