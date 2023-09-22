import axios from "axios";

export const fetchUserData = () => {
  return axios.get("api/v1/users");
};

// export const fetchProductData = () => {
//   return fetch("https://api.example.com/products");
// };
