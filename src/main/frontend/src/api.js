import axios from "axios";

// @src/api.js
export const getPostById = async (postId) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  return await response.json();
};

export const getCommentsByPostId = async (postId) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  );
  return await response.json();
};

export const getUsers = async () => {
  try {
    const response = await axios.get("api/v1/users/");
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
