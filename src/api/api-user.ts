// src/api/userApi.ts
import axios from "axios";

export const searchUsers = async (id: string) => {
  const response = await axios.get(`/users/{id}`, {
    params: { id },
  });
  return response.data;
};

// Get All Users (Admin Only)
export const getUsers = async () => {
  const response = await axios.get("/users", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`, // Include Bearer token if needed
    },
  });
  return response.data;
};

// Get User by ID
export const getUserById = async (id: number) => {
  const response = await axios.get(`/users/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};

// Create User
export const createUser = async (data: { name: string; email: string; password: string }) => {
  const response = await axios.post("/users", data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};

// Update User
export const updateUser = async (id: number, data: { name?: string; email?: string; password?: string }) => {
  const response = await axios.put(`/users/${id}`, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};

// Delete User
export const deleteUser = async (id: number) => {
  const response = await axios.delete(`/users/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};


// Get All Users for Admin
export const getAdminUsers = async () => {
  const response = await axios.get("/admin/users", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};
