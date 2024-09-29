import { createSlice } from '@reduxjs/toolkit';
import { UserStoreDTO } from '../features/auth/types/dto';

const initialState: UserStoreDTO = {} as UserStoreDTO;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthData(state, {payload}: {payload:UserStoreDTO})  {
      return {
        ...state,
        ...payload
      }
    },
    clearAuthData()  {
      return {} as UserStoreDTO;
    },
  },
});

export const { setAuthData, clearAuthData } = authSlice.actions;
export default authSlice.reducer;
