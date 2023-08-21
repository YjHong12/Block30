import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { logOut } from "../authentication/AuthSlice";
// import { useAuthApi } from "../authentication/authAPI";

export default function Navbar({ isAuthenticated }) {
  const navigate = useNavigate();

  const signOut = () => {
    alert("Signed out!");
    navigate("/login");
  };
  // const dispatch = useDispatch();
  // const authService = useAuthApi();

  // const handleLogout = async () => {
  //   try {
  //     await authService.logout();
  //     dispatch(logOut());
  //     alert("Signed out!");
  //     navigate("/login");
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

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
