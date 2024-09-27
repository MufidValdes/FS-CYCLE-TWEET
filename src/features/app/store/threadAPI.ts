import { apiV1 } from "../api/api";

interface threadData {
    content: string; 
    imageUrl?: string 
  }
  
export const createThread = async (data: threadData) => {
    const response = await apiV1.post('/threads', data);
    return response.data;
  }
export const deleteThread = async (id: number) => {
    const response = await apiV1.delete(`/threads/${id}`);
    return response.data;
  }
export const getAllThread = async () => {
    const response = await apiV1.get('/threads');
    return response.data;
  }
  