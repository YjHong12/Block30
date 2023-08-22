import { Link, useNavigate } from "react-router-dom";

export default function Navbar({ isAuthenticated }) {
  const navigate = useNavigate();

  const signOut = () => {
    alert("Signed out!");
    navigate("/login");
    window.location.reload();
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
