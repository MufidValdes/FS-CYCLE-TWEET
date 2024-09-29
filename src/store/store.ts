import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth-slice';
import threadReducer from './thread-slice'
import likeReducer from './like-slice'
import followerReducer from './follower-slice'
export const store = configureStore({
  reducer: {
    auth: authReducer,
    thread: threadReducer,
    like: likeReducer,
    follower: followerReducer,
  },
  
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
