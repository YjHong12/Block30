import React, { useState } from "react";
import { Link } from "react-router-dom";

const COHORT_NAME = "2306-GHP-ET-WEB-FT-SF";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

export default function Signup({ token, setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    console.log({ username, password });
    setUsername("");
    setPassword("");

    try {
      const response = await fetch(`${BASE_URL}/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username: "superman27",
            password: "krypt0n0rbust",
          },
        }),
      });

      const result = await response.json();
      console.log(result);
      setToken(result.data.token);
      console.log(token);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="signup">
      <h1>Create an account</h1>
      {error && <p>{error}</p>}
      <form className="signupForm" onSubmit={handleSubmit}>
        <label>
          <b>Username: </b>
          <input
            type="text"
            name="username"
            id="username"
            required
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <br />

        <label>
          <b>Password: </b>
          <input
            type="password"
            name="password"
            id="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <br />
        <br />

        <button className="signup">REGISTER</button>
        <p>
          Have an account? <Link to="/login">Sign in</Link>
        </p>
      </form>
    </div>
  );
}
