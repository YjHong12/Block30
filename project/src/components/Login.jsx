import React, { useState } from "react";
import { Link } from "react-router-dom";

const COHORT_NAME = "2306-GHP-ET-WEB-FT-SF";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

export default function Login({ token, setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`${BASE_URL}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username: `${username}`,
            password: `${password}`,
          },
        }),
      });

      const result = await response.json();
      console.log(result);
      console.log("Token", result.data.token)
      setToken(result.data.token);
    } catch (error) {
      console.error(error);
      setError("Failed to log in")
    }
    setUsername("");
    setPassword("");
  };

  return (
    <div className="login">
      <h1>Log into your account</h1>
      {error && <p>{error}</p>}
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button className="loginButton" type="submit">
          SIGN IN
        </button>
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
}
