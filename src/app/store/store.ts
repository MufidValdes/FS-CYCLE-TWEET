import { configureStore } from "@reduxjs/toolkit";
import authReducer from './store-auth-slice';
import threadReducer from './store-thread-slice'
import likeReducer from './store-like-slice'
import followerReducer from './store-follower-slice'
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
