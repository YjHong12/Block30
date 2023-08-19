import React, { useEffect, useState } from "react";

const COHORT_NAME = "2306-GHP-ET-WEB-FT-SF";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

async function FetchPosts() {
    try {
        const response = await fetch(`${BASE_URL}/posts`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Trouble fetching posts", error);
    }
    return;
}
 export default FetchPosts
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
