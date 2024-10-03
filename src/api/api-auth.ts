import { LoginRequestDTO, LoginResponseDTO, RegisterRequestDTO, RegisterResponseDTO } from "../features/auth/types/dto";
import { apiV1 } from "./api-config";
import { apiRequest } from "./api-service";

// interface LoginData {
//   email: string;
//   password: string;
// }

// interface RegisterData {
//   name: string;
//   email: string;
//   password: string;
// }
interface ForgetPasswordData {
  email: string;
}
interface ResetPasswordData {
  token: string, 
  password: string
}

export const login = (data: LoginRequestDTO): Promise<LoginResponseDTO> => {
  return apiRequest<LoginResponseDTO>({
    method: 'POST',
    url: '/auth/login',
    data,
  });
};
export const registerData = (data: RegisterRequestDTO): Promise<RegisterResponseDTO> => {
  return apiRequest<RegisterResponseDTO>({
    method: 'POST',
    url: '/auth/register',
    data,
  });
};

export const resetPassword = async (data: ResetPasswordData) => {
  const response = await apiV1.post('/auth/reset-password', data);
  return response.data;
};

export const forgetPassword = async (data: ForgetPasswordData) => {
  const response = await apiV1.post('/auth/forget-password', data).then(res => res.data);
  return response.data;
};
