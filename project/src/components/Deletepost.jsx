import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deletePost } from "../API";

const Deletepost = async (req, res) => {
    const postId = req.params.id;

    const result = await deletePost
}

export default Deletepost