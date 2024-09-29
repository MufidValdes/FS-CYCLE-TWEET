import { apiV1 } from "./api";

interface LoginData {
  email: string;
  password: string;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
}
interface ForgetPasswordData {
  email: string;
}
interface ResetPasswordData {
  token: string, 
  password: string
}

export const login = async (data: LoginData) => {
  const response = await apiV1.post('/auth/login', data);
  return response.data;
};

export const registerData = async (data: RegisterData) => {
  const response = await apiV1.post('/auth/register', data);
  return response.data;
};

export const resetPassword = async (data: ResetPasswordData) => {
  const response = await apiV1.post('/auth/reset-password', data);
  return response.data;
};

export const forgetPassword = async (data: ForgetPasswordData) => {
  const response = await apiV1.post('/auth/forget-password', data);
  return response.data;
};
