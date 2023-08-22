import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import fetchPosts from "../API";
import { deletePost } from "../API";

export default function Posts({ token }) {
  const [posts, setPosts] = useState([]);
  const [searchParam, setSearchParam] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const postsData = await fetchPosts(token);
        setPosts(postsData.data.posts);
      } catch (error) {
        console.error("Error fetching posts", error);
      }
    }
    fetchData();
  }, [token]);

  const filteredPosts = searchParam
  ? posts.filter((post) =>
      post.title.toLowerCase().includes(searchParam)
    )
  : posts;

  const handleDelete = async (id) => {
    try {
      await deletePost(id, token);
      const postsData = await fetchPosts(token);
      setPosts(postsData.data.posts);
      alert("Deleted!")
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const isAuthenticated = localStorage.getItem("authToken");

  useEffect(() => {
    if (token) {
      localStorage.setItem("authToken", token);
    }
  }, [token]);

  return (
    <div className="posts">
      <div className="search">
        <label>
          Search:{" "}
          <input
            type="text"
            placeholder="search"
            value={searchParam}
            onChange={(event) => setSearchParam(event.target.value.toLowerCase())}
          />
        </label>
      </div>

      {filteredPosts.map((post) => (
        <li key={post._id}>
          <h4>{post.title}</h4>
          <p>{post.description}</p>
          <p>{post.price}</p>

          <button onClick={() => handleDelete(post._id)}>Delete</button>
        </li>
      ))}
    </div>
  );
}
