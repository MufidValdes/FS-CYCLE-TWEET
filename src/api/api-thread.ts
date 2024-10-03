
import { ThreadEntity } from "../app/types/thread-dto";
import { CreateThreadDTO, threadInputs } from "../features/home/schemas/thread-schemas";
import { apiV1 } from "./api-config";

// Create a new thread
export const createThread = async (data: CreateThreadDTO): Promise<ThreadEntity> => {
  const formData = new FormData();
  formData.append("content", data.content);
  if (data.imageUrl instanceof File) {
    formData.append("imageUrl", data.imageUrl);
  }

  const response = await apiV1.post("/threads", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

// Get all threads
export const getAllThreads = async (): Promise<ThreadEntity[]> => {
  const response = await apiV1.get("/threads");
  return response.data;
};

// Delete a thread by ID
export const deleteThread = async (id: number): Promise<void> => {
  await apiV1.delete(`/threads/${id}`);
};

// Update a thread by ID
export const updateThread = async (id: number, data: threadInputs): Promise<ThreadEntity> => {
  const formData = new FormData();
  formData.append("content", data.content);
  if (data.imageUrl instanceof File) {
    formData.append("imageUrl", data.imageUrl);
  }
  const response = await apiV1.put(`/threads/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

// Get thread by ID
export const getThreadById = async (id: number): Promise<ThreadEntity> => {
  const response = await apiV1.get(`/threads/${id}`);
  return response.data;
};
