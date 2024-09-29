import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch } from "../../../hooks/use-store";
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
      const dispatch = useAppDispatch();
      
      const onSubmit = (data: threadInputs) => {
        dispatch(createThreadThunk(data));
        alert("Thread berhasil dibuat!");
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