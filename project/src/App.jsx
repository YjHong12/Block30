import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';
import Posts from './components/Posts';
import Newpost from './components/Newpost';
import Authenticate from './components/Authenticate';
import Home from './components/Home';

function App() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  return (
    <div>
      <BrowserRouter>
      <div id="navbar">
          <Navbar />
        </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/newpost' element={<Newpost />} />
      </Routes>
      
      </BrowserRouter>
{/* 
      <Authenticate token={token} setToken={setToken} />
      <Signup token={token} setToken={setToken} /> */}
      
    </div>
  )
}

export default App
