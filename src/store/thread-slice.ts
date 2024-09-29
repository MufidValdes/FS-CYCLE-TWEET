import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Thread } from '../features/home/types/thread-type';


interface ThreadState {
  threads: Thread[];
}

const initialState: ThreadState = {
  threads: [],
};
// const initialState: ThreadStoreDTO = {} as ThreadStoreDTO;

const threadSlice = createSlice({
  name: 'thread',
  initialState,
  reducers: {
    setThreads(state, action: PayloadAction<Thread[]>)  {
        state.threads =action.payload;
    },
    addThread(state, action: PayloadAction<Thread>) {
      state.threads.push(action.payload);
    },
    removeThread(state, action: PayloadAction<number>) {
      state.threads = state.threads.filter((thread) => thread.id !== action.payload);
    },
  },
});


export const { setThreads, addThread , removeThread } = threadSlice.actions;
export default threadSlice.reducer;
