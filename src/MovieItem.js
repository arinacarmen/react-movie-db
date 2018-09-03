import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import "./MovieItem.css";

const MovieItem = props => {
  return (
    <Card className="movie-item">
      <CardMedia>
        {/* {props.image} */}
        <img
          src="https://cdn.flickeringmyth.com/wp-content/uploads/2018/03/independence-resurgence-600x337.jpg"
          alt="giikle"
          width="100%"
        />
      </CardMedia>
      <CardContent className="card-content">
        <Typography variant="headline" component="h3">
          {props.title}
        </Typography>
        <Typography color="textSecondary">{props.year}</Typography>
        <Typography component="p">{props.description}</Typography>
      </CardContent>
      <CardActions className="card-btn">
        <Button variant="fab" mini color="primary" aria-label="Add">
          <AddIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

export default MovieItem;
