import axios from "axios";

const api = axios.create({
  baseURL: "http://34.230.58.123:5000",
});

export default api;
