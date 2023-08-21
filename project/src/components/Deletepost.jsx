import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deletePost } from "../API";

const Deletepost = async (req, res) => {
    const postId = req.params.id;

    const result = await deletePost
}

export default Deletepost

// export default function Deletepost({ id, token, postAuthor, loggedIn }) {
//     const navigate = useNavigate();

//     async function handleDelete(event) {
//         event.preventDefault();

//         try {
//             if (loggedIn === postAuthor ) {
//                 const result = await deletePost(id, token)
//                 console.log(result);
//                 navigate("/posts")
//             } else {
//                 alert("You can't delete this post!")
//             }
//         } catch (error) {
//             console.error(error);
//         }
//     }

//     return (
//         <div className="delete">
//             <button onClick={handleDelete}>Delete</button>
//         </div>
//     )
// }