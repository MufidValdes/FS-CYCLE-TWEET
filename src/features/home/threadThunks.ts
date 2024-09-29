import { createAsyncThunk } from '@reduxjs/toolkit';
import { createThread } from '../../api/threadAPI';

export const createThreadThunk = createAsyncThunk('threads/create', async (data: { content: string; imageUrl?: string }) => {
  const response = await createThread(data);
  return response;
});
