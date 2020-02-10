import React from "react";
import { connect } from "react-redux";

function LoginForm(props) {
  // console.log("render of login form test", this.props);

  const { onChange, onSubmit } = props;
  const { email, password } = props.values;
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">E-mail</label>
        <input type="email" name="email" onChange={onChange} value={email} />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          onChange={onChange}
          value={password}
        />
        <button type="submit">Login</button>
      </form>
      <div>
        {props.message && <p style={{ color: "red" }}>{props.message}</p>}
      </div>
    </div>
  );
}

function mapStateToProps(reduxState) {
  return {
    message: reduxState.user.message
  };
}

export default connect(mapStateToProps)(LoginForm);
