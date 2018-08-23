import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const MovieItem = props => {
  return (
    <Card className="movie-item">
      <CardContent>
        <Typography variant="headline" component="h3">
          {props.title}
        </Typography>
        <Typography color="textSecondary">{props.year}</Typography>
        <Typography component="p">{props.description}</Typography>
      </CardContent>
      <CardActions>
        <Button variant="fab" mini color="primary" aria-label="Add">
          <AddIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

export default MovieItem;
