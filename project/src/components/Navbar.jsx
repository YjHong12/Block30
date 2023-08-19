import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const signOut = () => {
        alert("Signed out!");
    }
    // const user = useSelector((state) => user.id);

  return (
    <div className="navbar">
        <h2>Stranger's Things</h2>
          <Link to="/">Home </Link>
          <Link to="/posts">Posts</Link>
          <Link to="/newpost">New Post</Link>
          {/* <button className="logout" type="button" onClick={handleLogout}>
            Logout
          </button> */}
          <Link to="/login">Login </Link>
          <Link to="/signup">Sign Up</Link>

          <div className="navbarRight">
            <button onClick={signOut}>Sign Out</button>
          </div>
    </div>
  );
}

// return (
//     <div className="navbar">
//       {user ? (
//         <div>
//           <Link to="/">Home </Link>
//           <Link to="/posts">Posts</Link>
//           <Link to="/newpost">New Post</Link>
//           {/* <button className="logout" type="button" onClick={handleLogout}>
//             Logout
//           </button> */}
//         </div>
//       ) : (
//         <div>
//           <Link to="/">Home </Link>
//           <Link to="/posts">Posts</Link>
//           <Link to="/login">Login </Link>
//           <Link to="/signup">Sign Up</Link>
//         </div>
//       )}
//     </div>
//   );
// }