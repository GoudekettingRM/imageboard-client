import React, { Component } from "react";
import { connect } from "react-redux";
import ImagesList from "./ImagesList";
import { getAllImages } from "../../store/Image/actions";
import AddNewImageContainer from "../AddNewImage/AddNewImageContainer";
import LoginFormContainer from "../Login/LoginFormContainer";

class ImagesListContainer extends Component {
  componentDidMount = () => {
    this.props.getAllImages();
  };

  render() {
    return (
      <div>
        {this.props.loggedIn && <AddNewImageContainer />}
        {!this.props.loggedIn && <LoginFormContainer />}
        <ImagesList images={this.props.images} />
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    images: reduxState.images,
    loggedIn: reduxState.user.jwt
  };
}

const mapDispatchToProps = {
  getAllImages
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImagesListContainer);
