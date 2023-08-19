import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Signup from "./Signup";
import Login from "./Login";
import Posts from "./Posts";
import Newpost from "./Newpost";

export default function Mainroutes() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/newpost" element={<Newpost />} />
    </Routes>
    </BrowserRouter>
  );
}
