import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';
import Posts from './components/Posts';
import Newpost from './components/Newpost';

function App() {
  const [token, setToken] = useState("");
  const isAuthenticated = !!token;

  return (
    <div>
      <BrowserRouter>
      <div id="navbar">
          <Navbar isAuthenticated={isAuthenticated }/>
        </div>

      <Routes>
        <Route path='/signup' element={<Signup token={token} setToken={setToken} />} />
        <Route path='/login' element={<Login token={token} setToken={setToken} />} />
        <Route path='/posts' element={<Posts />} />
        {isAuthenticated && <Route path="/newpost" element={<Newpost token={token} />} />}
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App