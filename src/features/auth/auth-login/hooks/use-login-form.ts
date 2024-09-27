import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch } from "../../../app/hooks/use-store";
import { useNavigate } from "react-router-dom";
import { setAuthData } from "../../../app/store/auth-slice";
import { login } from "../../../app/store/authAPI";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { LoginFormInputs, loginSchema } from "../schemas/login-schema";

function useLoginForm() {
    const {
        register,
        handleSubmit,
        formState: { errors,isSubmitting},
        setError,
      } = useForm<LoginFormInputs>({
        resolver: zodResolver(loginSchema),
      });
      const toast = useToast();
      const navigate = useNavigate();
      const dispatch = useAppDispatch();
      
      async function onSubmit(data: LoginFormInputs) {
        try {
      //   const response = await apiV1.post<
      //   null,
      //   { data: LoginResponseDTO },
      //   LoginRequestDTO
      // >("/auth/login", {
      //   email: data.email,
      //   password: data.password,
      // });
          const { token, user } = await login(data);
          if (token) localStorage.setItem("token", token);
          if (user) {
            dispatch(setAuthData(user));
            toast({
              title: "Login success!",
              status: "success",
              duration: 3000,
              isClosable: true,
            });
            navigate("/");
          }

        } catch (error) {
          if (axios.isAxiosError(error) && error.response) {
            const {
              response: { data },
            } = error;
    
            setError(data.details[0].path[0], {
              message: data.details[0].message,
            });
          }
        }
      };
    return {
      register,
      handleSubmit,
      errors,
      isSubmitting,
      onSubmit
    }
     
}

export default useLoginForm;