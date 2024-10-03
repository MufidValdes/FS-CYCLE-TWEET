
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FollowerState {
  followers: Record<number, any[]>;
  following: Record<number, any[]>;
  loading: boolean;
  error: string | null;
}

const initialState: FollowerState = {
  followers: {},
  following: {},
  loading: false,
  error: null,
};

const followerSlice = createSlice({
  name: 'follower',
  initialState,
  reducers: {
    setFollowers: (state, action: PayloadAction<{ userId: number; followers: any[] }>) => {
      state.followers[action.payload.userId] = action.payload.followers;
    },
    setFollowing: (state, action: PayloadAction<{ userId: number; following: any[] }>) => {
      state.following[action.payload.userId] = action.payload.following;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setFollowers, setFollowing, setLoading, setError } = followerSlice.actions;
export default followerSlice.reducer;
