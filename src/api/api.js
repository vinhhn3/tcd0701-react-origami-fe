import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:9999/api", // Replace with your actual API base URL
});

// Get request - 'localhost:9999/api/origami/all'
const getAllOrigami = () => {
  return axiosClient.get("/origami/all");
};

// Get request - 'localhost:9999/api/origami/mine'
const getMyOrigami = () => {
  return axiosClient.get("/origami/mine");
};

// Post request - 'localhost:9999/api/origami/'
const createOrigami = (origamiData) => {
  return axiosClient.post("/origami/", origamiData);
};

// Post request - 'localhost:9999/api/user/register'
const registerUser = (userData) => {
  return axiosClient.post("/user/register", userData);
};

// Post request - 'localhost:9999/api/user/login'
const loginUser = (loginData) => {
  return axiosClient.post("/user/login", loginData);
};

// Post request - 'localhost:9999/api/user/logout'
const logoutUser = () => {
  return axiosClient.post("/user/logout");
};

export {
  createOrigami,
  getAllOrigami,
  getMyOrigami,
  loginUser,
  logoutUser,
  registerUser,
};
