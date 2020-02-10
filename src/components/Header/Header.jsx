import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div>
        <Link to="/images">Images</Link>
        <Link to="/upload">Add image to board!</Link>
      </div>
    );
  }
}
