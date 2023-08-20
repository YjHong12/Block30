import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ isAuthenticated }) {
    const signOut = () => {
        alert("Signed out!");
    }
    // const user = useSelector((state) => user.id);

  return (
    <div className="navbar">
        <h2>Stranger's Things</h2>
          <Link to="/">Home </Link>
          <Link to="/posts">Posts</Link>
          {isAuthenticated && <Link to="/newpost">New Post</Link>}
          <Link to="/login">Login </Link>
          <Link to="/signup">Sign Up</Link>

          <div className="navbarRight">
            <button onClick={signOut}>Sign Out</button>
          </div>
    </div>
  );
}