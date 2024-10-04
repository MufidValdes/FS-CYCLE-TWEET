import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { ThreadEntity } from '../types/thread-dto';
import { createRepliesThread, createThread, deleteThread, getAllThreads, getThreadById, updateThread } from '../../api/api-thread';
import { CreateThreadDTO, threadInputs } from '../../features/home/schemas/thread-schemas';
import { useToast } from '@chakra-ui/react';


// Toast function
const showToast = (toast: ReturnType<typeof useToast>, title: string, status: 'success' | 'error') => {
    toast({
      title,
      status,
      duration: 3000,
      isClosable: true,
    });
  };
// Fetch all threads
export const useThreads = () => {
  return useQuery<ThreadEntity[]>({
    queryKey: ['threads'],
    queryFn: getAllThreads,
  });
};

// Fetch thread by ID
export const useThreadById = (id: number) => {
  return useQuery<ThreadEntity>({
    queryKey: ['thread', id],
    queryFn: () => getThreadById(id),
    enabled: !!id, // Only fetch if id exists
    
  });
};

// Create new thread
export const useCreateThread = () => {
  const queryClient = useQueryClient();
  const toast = useToast()
  return useMutation({
    mutationFn: (data: CreateThreadDTO) => createThread(data),
    onSuccess: () => {
        queryClient.invalidateQueries({queryKey:['threads']}); // Refresh thread list after new thread is created
        showToast(toast,  "Thread created successfully", "success")
        
    },
  });
};
// Create new thread
export const useCreateRepliesThread = () => {
  const queryClient = useQueryClient();
  const toast = useToast()
  return useMutation({
    mutationFn:  ({ id, data }: { id: number; data: threadInputs })=> createRepliesThread(id, data),
    onSuccess: () => {
        queryClient.invalidateQueries({queryKey:['replies']}); // Refresh thread list after new thread is created
        showToast(toast,  "Thread created successfully", "success")
        
    },
  });
};

// Update thread
export const useUpdateThread = () => {
  const queryClient = useQueryClient();
  const toast = useToast()
  return useMutation({
      mutationFn: ({ id, data }: { id: number; data: threadInputs }) => updateThread(id, data),
      onSuccess: () => {
        queryClient.invalidateQueries({queryKey:['threads']});
        showToast(toast, "Thread updated successfully", "success");
    
    },
  });
};

// Delete thread
export const useDeleteThread = () => {
  const queryClient = useQueryClient();
  const toast = useToast();
  return useMutation({
    mutationFn: (id: number) => deleteThread(id),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey:['threads']});
      showToast(toast, "Thread deleted successfully", "success");
    },
  });
};
