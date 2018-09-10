import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
// import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import "./MovieItem.css";

const Placeholder = () => {
  return (
    <div className="placeholder">
      <span>No Image Found</span>
    </div>
  );
};

const MovieItem = props => {
  const { title, year, plot, url = "", addMovie, deleteMovie, id } = props;

  return (
    <Card className="movie-item">
      <CardContent className="card-content">
        {url.length > 0 ? (
          <CardMedia
            className="cover"
            image={url}
            title="Fancy Description"
            component="img"
          />
        ) : (
          <Placeholder />
        )}
        <Typography variant="headline" component="h3">
          {title}
        </Typography>
        <Typography color="textSecondary">{year}</Typography>
        <Typography component="p">{plot}</Typography>
      </CardContent>
      <CardActions className="card-btn">
        {/* <Button
          className="icon-add"
          variant="fab"
          mini
          aria-label="Add"
          onClick={() => alert("Movie should be added on a list now..")}
        >
          <AddIcon />
        </Button> */}
        <Button
          className="icon-del"
          variant="fab"
          mini
          aria-label="delete"
          onClick={() => deleteMovie(id)}
        >
          <DeleteIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

export default MovieItem;
