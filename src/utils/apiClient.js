import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://spoticry-api-url.com", 
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
