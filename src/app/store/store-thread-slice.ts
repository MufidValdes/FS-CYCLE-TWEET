import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThreadEntity } from '../types/thread-dto';


interface ThreadState {
  threads: ThreadEntity[];
}

const initialState: ThreadState = {
  threads: [],
};
// const initialState: ThreadStoreDTO = {} as ThreadStoreDTO;

const threadSlice = createSlice({
  name: 'thread',
  initialState,
  reducers: {
    setThreads(state, action: PayloadAction<ThreadEntity[]>)  {
        state.threads =action.payload;
    },
    addThread(state, action: PayloadAction<ThreadEntity>) {
      state.threads.push(action.payload);
    },
    removeThread(state, action: PayloadAction<number>) {
      state.threads = state.threads.filter((thread) => thread.id !== action.payload);
    },
  },
});


export const { setThreads, addThread , removeThread } = threadSlice.actions;
export default threadSlice.reducer;
