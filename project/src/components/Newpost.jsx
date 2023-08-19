import React, { useState } from "react";
import Navbar from "./Navbar";

const COHORT_NAME = "2306-GHP-ET-WEB-FT-SF";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

export default function Newpost() {
  const [post, setPost] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ post });
    setPost("");
  };

  const makePost = async () => {
    try {
      const response = await fetch(`${BASE_URL}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN_STRING_HERE}`,
        },
        body: JSON.stringify({
          post: {
            title: "My favorite stuffed animal",
            description:
              "This is a pooh doll from 1973. It has been carefully taken care of since I first got it.",
            price: "$480.00",
            willDeliver: true,
          },
        }),
      });
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="newpost">
        <h2 className="postTitle">Create a Post</h2>
        <form className="postForm" onSubmit={handleSubmit}>
          <div>
            <label>Title</label>
            <input
              type="text"
              name="post"
              required
              value={post}
              onChange={(event) => setPost(event.target.value)}
            />
            <br />
            <label>Description</label>
            <input
              type="text"
              name="description"
              required
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
            <br />
            <label>Price</label>
            <input
              type="text"
              name="price"
              required
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            />
          </div>
          <button className="newPostButton">CREATE POST</button>
        </form>
      </div>
    </>
  );
}
