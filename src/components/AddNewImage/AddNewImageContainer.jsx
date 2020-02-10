import React, { Component } from "react";
import AddNewImageForm from "./AddNewImageForm";
import { connect } from "react-redux";
import { addImage } from "../../store/Image/actions";

class AddNewImageContainer extends Component {
  state = {
    title: "",
    url: ""
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    const imgData = {
      title: this.state.title,
      url: this.state.url
    };
    this.props.addImage(imgData, this.props.token);

    this.setState({
      title: "",
      url: ""
    });
  };

  render() {
    // console.log("render of add new image container", this.props);

    return (
      <div>
        <AddNewImageForm
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          values={this.state}
        />
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    token: reduxState.user.jwt
  };
}

const mapDispatchToProps = {
  addImage
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddNewImageContainer);
