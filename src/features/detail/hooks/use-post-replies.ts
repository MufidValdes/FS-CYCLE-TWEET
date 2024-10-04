import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { threadInputs, threadSchema } from "../../home/schemas/thread-schemas";

export function usePostReply() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<threadInputs>({
    resolver: zodResolver(threadSchema),
  });

  async function onSubmit(){}

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmit
  };
}
