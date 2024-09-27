import { createSlice } from '@reduxjs/toolkit';
import { ThreadStoreDTO } from '../../home/types/thread-type';


// interface ThreadState {
//     threads: any[];
//     loading: boolean;
//     error: string | null;
//   }
  
//   const initialState: ThreadState = {
//     threads: [],
//     loading: false,
//     error: null,
//   };
const initialState: ThreadStoreDTO = {} as ThreadStoreDTO;

const threadSlice = createSlice({
  name: 'threads',
  initialState,
  reducers: {},

});

export default threadSlice.reducer;
