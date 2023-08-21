import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Deletepost from "./Deletepost";
import fetchPosts from "../API";
import { deletePost } from "../API";

const COHORT_NAME = "2306-GHP-ET-WEB-FT-SF";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

export default function Posts({ token }) {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const postsData = await fetchPosts();
        setPosts(postsData.data.posts);
      } catch (error) {
        console.error("Error fetching posts", error);
      }
    }
    fetchData();
  }, []);
  const handleDelete = async (id) => {
    try {
      await deletePost(id, token);
      const postsData = await fetchPosts();
      setPosts(postsData.data.posts);
      // console.log("DELETED");
    } catch (error) {
      console.error(error);
    }
  };

  // const isAuthenticated = localStorage.getItem("token");
  // console.log(isAuthenticated)

  return (
    <div className="posts">
      {posts.map((post) => (
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
