import { apiV1 } from "../api/api";

interface LoginData {
  email: string;
  password: string;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export const login = async (data: LoginData) => {
  const response = await apiV1.post('/auth/login', data);
  return response.data;
};

export const registerData = async (data: RegisterData) => {
  const response = await apiV1.post('/auth/register', data);
  return response.data;
};

