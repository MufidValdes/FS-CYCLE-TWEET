import axios from "axios";
// https://dev.to/sarathadhithya/optimizing-api-requests-with-axios-interceptors-and-advanced-error-handling-43cb

const API_URL = import.meta.env.VITE_BACKEND_URL;

export const apiV1 = axios.create({
  baseURL: `${API_URL}/api/v1`,
  headers: {
   'Content-Type': 'application/json',
  }
});


axios.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
  
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      // Handle the case where there is no token
      // You might want to redirect to the login page or take appropriate action
    }
  
    return config;
  });
  