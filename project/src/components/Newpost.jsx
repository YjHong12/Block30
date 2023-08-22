import React, { useState } from "react";
import { newPost } from "../API";
import { useNavigate } from "react-router-dom";

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
      alert("Created a new post!")
      navigate("/posts");
    } catch (error) {
      console.error(error);
      setError("Failed to create a new post");
    }
  }

  return (
    <>
      <div className="newpost">
        <h1 className="postTitle">Create a Post</h1>
        <form className="postForm" onSubmit={handleSubmit}>
          {error && <p>{error}</p>}
          <div>
            <label>
              <b>Title: </b>
            </label>
            <input
              type="text"
              name="title"
              required
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
            <br />
            <label className="description">
              <b>Description: </b>
            </label>
            <input
              type="text"
              name="description"
              required
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
            <br />
            <label>
              <b>Price: </b>
            </label>
            <input
              type="text"
              name="price"
              required
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            />
            <br />
            <br />
          </div>
          <button className="newPostButton">CREATE POST</button>
        </form>
      </div>
    </>
  );
}
