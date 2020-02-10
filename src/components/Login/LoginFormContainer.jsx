import React, { Component } from "react";
import LoginForm from "./LoginForm";

export default class LoginFormContainer extends Component {
  state = {
    email: "",
    password: ""
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    console.log("Submitting login");
    console.log("password test after submitting", this.state.password);
    console.log("email test after submitting", this.state.email);

    // actually send stuff to the api to login

    this.setState({
      email: "",
      password: ""
    });
  };
  render() {
    return (
      <div>
        <LoginForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
        />
      </div>
    );
  }
}
