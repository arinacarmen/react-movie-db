import React, { Component } from "react";
import "./PlayReact.css";

class PlayReact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTitle: ""
    };
  }
  render() {
    return <div>{this.SelectedTitle}</div>;
  }
}

export default PlayReact;
