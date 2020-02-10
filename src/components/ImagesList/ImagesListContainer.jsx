import React, { Component } from "react";
import { connect } from "react-redux";
import ImagesList from "./ImagesList";
import { getAllImages } from "../../store/Image/actions";
import AddNewImageContainer from "../AddNewImage/AddNewImageContainer";

class ImagesListContainer extends Component {
  componentDidMount = () => {
    this.props.getAllImages();
  };

  render() {
    return (
      <div>
        <AddNewImageContainer />
        <ImagesList images={this.props.images} />
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    images: reduxState.images
  };
}

const mapDispatchToProps = {
  getAllImages
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImagesListContainer);
