import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar({ isAuthenticated, setToken }) {
  const navigate = useNavigate();

  const signOut = () => {
    alert("Signed out!");
    setToken(null);
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="navbar">
      {/* <h2>Stranger's Things</h2> */}
      <Link to="/">Home </Link>
      <Link to="/posts">Posts</Link>
      {isAuthenticated && <Link to="/newpost">New Post</Link>}
      <Link to="/login">Login </Link>
      <Link to="/register">Sign Up</Link>

      <div className="navbarRight">
        <button onClick={signOut}>Sign Out</button>
      </div>
    </div>
  );
}
