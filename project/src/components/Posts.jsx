import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FetchPosts from "../API";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const postsData = await FetchPosts();
        setPosts(postsData.data.posts);
      } catch (error) {
        console.error("Error fetching posts", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="posts">
      {posts.map((posts) => {
        return (
          <li key={posts._id}>
            <h4>{posts.title}</h4>
            <p>{posts.description}</p>
            <p>{posts.price}</p>
          </li>
        );
      })}
    </div>
  );
}
