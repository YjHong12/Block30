import React, { useEffect, useState } from "react";

const COHORT_NAME = "2306-GHP-ET-WEB-FT-SF";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

export default async function fetchPosts() {
  try {
    const response = await fetch(`${BASE_URL}/posts`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Trouble fetching posts", error);
  }
}

export async function newPost(title, description, price, token) {
  try {
    const response = await fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        post: {
          title: title,
          description: description,
          price: price
        }
      })
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function deletePost(id, token) {
  try {
    const response = await fetch(`${BASE_URL}/posts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

// export async function signUpURL() {
//   try {
//     const response = await fetch(`${BASE_URL}/signup`);
//     const result = await response.json();
//     return result;
//   } catch (error) {
//     console.error(error);
//   }
// }

// export async function loginURL(username, password) {
//   try {
//     const response = await fetch(`${BASE_URL}/login`);
//     const result = await response.json();
//     return result;
//   } catch (error) {
//     console.error(error);
//   }
// }
