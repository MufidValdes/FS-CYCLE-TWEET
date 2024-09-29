// src/features/like/likeSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LikeState {
  likes: Record<number, number>; // { threadId: likeCount }
  loading: boolean;
  error: string | null;
}

const initialState: LikeState = {
  likes: {},
  loading: false,
  error: null,
};

const likeSlice = createSlice({
  name: 'like',
  initialState,
  reducers: {
    setLikes: (state, action: PayloadAction<{ threadId: number; likeCount: number }>) => {
      state.likes[action.payload.threadId] = action.payload.likeCount;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setLikes, setLoading, setError } = likeSlice.actions;
export default likeSlice.reducer;
