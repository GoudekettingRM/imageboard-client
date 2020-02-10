import React, { Component } from "react";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { login } from "../../store/Login/actions";

class LoginFormContainer extends Component {
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

    // actually send stuff to the api to login
    this.props.login(this.state.email, this.state.password);
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

const mapDispatchToProps = {
  login
};

export default connect(null, mapDispatchToProps)(LoginFormContainer);
