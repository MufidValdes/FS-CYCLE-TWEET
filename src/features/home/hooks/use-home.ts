import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { threadInputs, threadSchema } from "../schemas/thread-schemas";
import { createThread } from "../../../api/api-thread"; // Pastikan path ini benar
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@chakra-ui/react";


function useHome() {
  const queryClient = useQueryClient();
  const toast = useToast();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<threadInputs>({
    resolver: zodResolver(threadSchema),
  });

  const mutation = useMutation({
    mutationFn: createThread,
    onSuccess: () => {
      toast({
        title: "Thread created.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      reset();
      // Use the defined query key here
      queryClient.invalidateQueries({queryKey: ['threads']}); // Invalidate the threads query
    },
    onError: (error) => {
      toast({
        title: "Error creating thread.",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    },
  });

  const onSubmit = (data: threadInputs) => {
    mutation.mutate(data); // Call the mutate function to create the thread
  };

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting: mutation.isPending, // Update loading state based on the mutation
    onSubmit,
  };
}

export default useHome;
