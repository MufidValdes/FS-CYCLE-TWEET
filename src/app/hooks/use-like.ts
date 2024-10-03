import { useMutation } from '@tanstack/react-query';
import { addLikeThread, unlikeThread } from '../../api/api-likes';

// Like a thread
export const useLikeThread = () => {
  return useMutation({
    mutationFn: (threadId: number) => addLikeThread(threadId),
  });
};

// Unlike a thread
export const useUnlikeThread = () => {
  return useMutation({
    mutationFn: (threadId: number) => unlikeThread(threadId),
  });
};
