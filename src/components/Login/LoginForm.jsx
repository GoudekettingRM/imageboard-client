import React from "react";

export default function LoginForm(props) {
  const { onChange, onSubmit } = props;
  const { email, password } = props.values;
  return (
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
  );
}
