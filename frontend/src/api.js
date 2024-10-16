import axios from "axios";
import { ACCESS_TOKEN } from "./constants";

const apiUrl = "https://1531917f-8811-4f82-a776-1e99d742cacf-dev.e1-us-east-azure.choreoapis.dev/djangoreacttask/backend/v1"

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : apiUrl,
});

api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem(ACCESS_TOKEN);
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  
  export default api;