import axios from "axios";

const API = axios.create({
  baseURL: "https://portfolio-backend-i1c6.onrender.com/api"
});

export default API;