import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import fetchPosts from "../API";
import Deletepost from "./Deletepost";
import { deletePost } from "../API";

const COHORT_NAME = "2306-GHP-ET-WEB-FT-SF";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

export default function Posts() {
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
      await deletePost(id);
      const posts = await fetchPosts();
      setPosts(posts.data.posts);
      console.log("DELETED");

      //   const token = localStorage.getItem("token");
      //   const response = await fetch(`${BASE_URL}/posts/${postId}`, {
      //     method: "GET",
      //     headers: {
      //       "Content-Type": "application/json",
      //       Authorization: `Bearer ${token}`,
      //     },
      //   });
      //   const postData = await response.json();

      //   if (postData.data.author._id === localStorage.getItem("_id")) {
      //     await deletePost(postId);
      //     const newPostData = await fetchPosts();
      //     setPosts(newPostData.data.posts);
      //     console.log("DELETED");
      //   } else {
      //     console.log("Failed to delete post");
      //   }
    } catch (error) {
      console.error(error);
    }
  };

  const isAuthenticated = localStorage.getItem("token");
  // const userId = localStorage.getItem("_id");
  // console.log(userId)
  // console.log(isAuthenticated)

  return (
    <div className="posts">
      {posts.map((post) => (
        <li key={post._id}>
          <h4>{post.title}</h4>
          <p>{post.description}</p>
          <p>{post.price}</p>

          {post.isAuthenticated &&
            isAuthor(
              <button onClick={() => handleDelete(post._id)}>Delete</button>
            )}

          {/* {post.author._id === userId && isAuthenticated && (
              <button onClick={() => handleDelete(post._id)}>Delete</button>
            )} */}
        </li>
      ))}
    </div>
  );
}
