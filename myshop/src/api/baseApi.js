import axios from "axios";

const axiosClient = axios.create({
  baseURL: `http://localhost:6868/api/v1`,
});

export default axiosClient;
