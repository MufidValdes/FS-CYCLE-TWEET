import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks/use-store";
import { threadInputs, threadSchema } from '../schemas/thread-schemas';
import { createThreadThunk } from "../threadThunks";

function useThread() {
    const {
        register,
        handleSubmit,
        formState: { errors,isSubmitting},
      } = useForm<threadInputs>({
        resolver: zodResolver(threadSchema),
      });
      const navigate = useNavigate();
      const dispatch = useAppDispatch();
      
      const onSubmit = (data: threadInputs) => {
        dispatch(createThreadThunk(data));
        navigate("/");
      };
    return {
      register,
      handleSubmit,
      errors,
      isSubmitting,
      onSubmit
    }
     
}

export default useThread;