import axios from "axios";
// https://dev.to/sarathadhithya/optimizing-api-requests-with-axios-interceptors-and-advanced-error-handling-43cb

const API_URL = import.meta.env.VITE_BACKEND_URL;

export const apiV1 = axios.create({
  baseURL: `${API_URL}/api/v1`,
  headers: {
   'Content-Type': 'application/json',
  }
});


apiV1.interceptors.request.use((config) => {
    const token = localStorage.getItem('accessToken');
  
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      // Handle the case where there is no token
      // You might want to redirect to the login page or take appropriate action
    }
  
    return config;
  });
  
  apiV1.interceptors.response.use(
    (response) => response,
    (error) => {
      // Error handling (e.g., redirect to login if token expired)
      if (error.response && error.response.status === 401) {
        localStorage.removeItem('accessToken');
        window.location.href = '/login';
      }
      return Promise.reject(error);
    }
  );