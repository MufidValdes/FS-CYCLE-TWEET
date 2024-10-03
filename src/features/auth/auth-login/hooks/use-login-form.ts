import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch } from "../../../../app/hooks/use-store";
import { useNavigate } from "react-router-dom";
import { setAuthData } from "../../../../app/store/store-auth-slice";
import { login } from "../../../../api/api-auth";
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
            const { user, tokens } = await login(data);
            if (tokens.accessToken) {
                localStorage.setItem("accessToken", tokens.accessToken);
                localStorage.setItem("refreshToken", tokens.refreshToken);
            }
            if (user) {
                dispatch(setAuthData({ user, tokens }));
                toast({
                    title: "Login success!",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                });
                navigate("/");
            } else {
                toast({
                    title: 'Login failed!',
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                });
            }
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                const { response: { data } } = error;
                setError(data.details[0].path[0], {
                    message: data.details[0].message,
                });
            }
        }
    }
    return {
      register,
      handleSubmit,
      errors,
      isSubmitting,
      onSubmit
    }
     
}

export default useLoginForm;