import { threadInputs } from "../features/home/schemas/thread-schemas";
import { Thread } from "../features/home/types/thread-type";
import { apiV1 } from "./api";

// Create a new thread
export const createThread = async (data: threadInputs) => {
  const response = await apiV1.post("/threads", data);
  return response.data;
};
// Delete a thread by ID 
export const deleteThread = async (id: number) => {
  const response = await apiV1.delete(`/threads/${id}`);
  return response.data;
};
// Update a thread by ID
export const updateThread = async (id: number, data: threadInputs): Promise<Thread> => {
  const response = await apiV1.put(`/threads/${id}`, data);
  return response.data;
};
// Get all threads
export const getAllThread = async (): Promise<Thread[]>  => {
  const response = await apiV1.get("/threads");
  return response.data;
};
// Get threads by id
export const getThreadById = async (id: number) => {
  const response = await apiV1.get(`/threads/${id}`);
  return response.data;
};