// src/api/userApi.ts
import axios from "axios";

export const searchUsers = async (query: string) => {
  const response = await axios.get(`/api/users/search`, {
    params: { query },
  });
  return response.data;
};
