import { apiV1 } from "./api-config";

// like a thread
export const addLikeThread = async (threadId: number) => {
  const response = await apiV1.post('/likes', { threadId });
  return response.data;
};

// unlike a thread
export const unlikeThread = async (threadId: number) => {
  const response = await apiV1.delete(`/likes/${threadId}`);
  return response.data;
};

// Get likes of a thread
export const getlikesThread = async (threadId: number) => {
  const response = await apiV1.get(`/likes/thread/${threadId}`);
  return response.data;
};
