import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `http://localhost:8081`, // Replace with your backend server's base URL
});

export default axiosInstance;

