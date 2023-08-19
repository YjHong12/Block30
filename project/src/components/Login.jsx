import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({ username, password });
        setUsername("");
        setPassword("");
    };
    
    return (
        <div className="login">
            <h1>Log into your account</h1>
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
                <button className="loginButton">SIGN IN</button>
                <p>
                    Don't have an account? <Link to='/signup'>Sign Up</Link>
                </p>
            </form>
        </div>
    )
}