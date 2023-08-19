import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const COHORT_NAME = "2306-GHP-ET-WEB-FT-SF";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

export default function Signup({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    console.log({ username, password });
    setUsername("");
    setUsername("");

    try {
      const response = await fetch(`${BASE_URL}/users/register`, {
        method: "POST",
        body: JSON.stringify({
            user: {
                username: 'superman27',
                password: 'krypt0n0rbust'
              }
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
      console.log(result);
      setToken(result.token);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div className="signup">
      <h1>Create an account</h1>
      {error && <p>{error}</p>}
      <form className="signupForm" onSubmit={handleSubmit}>
        <label>
          <b>Username: </b>
          {""}
        </label>
        <input
          type="text"
          name="username"
          id="username"
          required
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <br />

        <label>
          {" "}
          <b>Password: </b>
          {""}{" "}
        </label>
        <input
          type="password"
          name="password"
          id="password"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
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
