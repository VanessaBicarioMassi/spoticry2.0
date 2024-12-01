import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://github.com/VanessaBicarioMassi/spoticry2.0", 
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
