import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { resetPassword, forgetPassword } from "../../api/api-auth";
import { useToast } from "@chakra-ui/react";
import { createUser, deleteUser, getUserById, getUsers, updateUser } from "../../api/api-user";
import { UserEntity } from "../types/auth-dto";

export const useResetPassword = () => {
  const toast = useToast();
  return useMutation({
    mutationFn: resetPassword,
    onSuccess: () => {
      toast({
        title: "Password reset successfully.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    },
  });
};

export const useForgetPassword = () => {
  const toast = useToast();
  return useMutation({
    mutationFn: forgetPassword,
    onSuccess: () => {
      toast({
        title: "Reset link sent to your email.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    },
  });
};


// Get all users (Admin only)
export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });
};

// Get user by ID
export const useUserById = (id: number) => {
  return useQuery({
    queryKey: ["user", id],
    queryFn: () => getUserById(id),
    enabled: !!id,
  });
};

// Create user
export const useCreateUser = () => {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      toast({
        title: "User created successfully.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    },
  });
};

// Update user
export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: UserEntity }) => updateUser(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      toast({
        title: "User updated successfully.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    },
  });
};

// Delete user (Admin only)
export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation({
    mutationFn: (id: number) => deleteUser(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      toast({
        title: "User deleted successfully.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    },
  });
};
