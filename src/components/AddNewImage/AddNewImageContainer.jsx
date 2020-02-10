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
    console.log("I changed!", event.target.name, event.target.value);

    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    console.log("Form submitted!");
    const imgData = {
      title: this.state.title,
      url: this.state.url
    };
    this.props.addImage(imgData);

    this.setState({
      title: "",
      url: ""
    });
  };

  render() {
    console.log("render of add new image container", this.props);

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

const mapDispatchToProps = {
  addImage
};

export default connect(null, mapDispatchToProps)(AddNewImageContainer);
