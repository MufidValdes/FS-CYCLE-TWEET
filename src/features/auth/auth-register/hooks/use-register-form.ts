import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch } from "../../../../app/hooks/use-store";
import { useNavigate } from "react-router-dom";
import { setAuthData } from "../../../../app/store/store-auth-slice";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { RegisterFormInputs, registerSchema } from "../schemas/register-schema";
import { registerData } from "../../../../api/api-auth";

function useRegisterForm() {
    const {
        register,
        handleSubmit,
        formState: { errors,isSubmitting},
        setError,
      } = useForm<RegisterFormInputs>({
        resolver: zodResolver(registerSchema),
      });
      const toast = useToast();
      const navigate = useNavigate();
      const dispatch = useAppDispatch();
      
      async function onSubmit(data: RegisterFormInputs) {
        try {
          const user = await registerData(data);
          if (user) {
            dispatch(setAuthData(user));
            toast({
              title: "register success!",
              status: "success",
              duration: 3000,
              isClosable: true,
            });
            navigate("/login");
          }else {
            toast({
              title: 'Login failed!',
              status: 'error',
              duration: 3000,
              isClosable: true,
            });
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

export default useRegisterForm;