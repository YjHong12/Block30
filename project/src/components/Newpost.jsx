import React, { useState } from "react";
import { newPost } from "../API";
import { useNavigate } from "react-router-dom";

const COHORT_NAME = "2306-GHP-ET-WEB-FT-SF";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

export default function Newpost({ token }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [submitData, setSubmitData] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const newData = await newPost(title, description, price, token);
      setSubmitData(newData);
      console.log({ title });
      setTitle("");
      navigate("/posts")
    } catch (error) {
      console.error(error);
      setError("Failed to create a new post")
    }
  }

  return (
    <>
      <div className="newpost">
        <h2 className="postTitle">Create a Post</h2>
        <form className="postForm" onSubmit={handleSubmit}>
          {error && <p>{error}</p>}
          <div>
            <label>Title</label>
            <input
              type="text"
              name="title"
              required
              value={title}
              onChange={(event) => setTitle(event.target.value)}
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
