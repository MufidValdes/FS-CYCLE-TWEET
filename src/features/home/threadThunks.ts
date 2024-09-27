import { createAsyncThunk } from '@reduxjs/toolkit';
import { createThread, getAllThread } from '../app/store/threadAPI';

export const fetchThreadsThunk = createAsyncThunk('threads/fetch', async () => {
  const response = await getAllThread();
  return response;
});

export const createThreadThunk = createAsyncThunk('threads/create', async (data: { content: string; imageUrl?: string }) => {
  const response = await createThread(data);
  return response;
});
