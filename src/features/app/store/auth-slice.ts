import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserStoreDTO } from '../../auth/types/dto';

// interface AuthState {
//   user:   UserEntity | null;
//   token: string | null;
// }

// const initialState: AuthState = {
//   user: null,
//   token: null,
// };
const initialState: UserStoreDTO = {} as UserStoreDTO;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthData(state, action: PayloadAction<UserStoreDTO>)  {
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
        role: action.payload.role,
      }
    },
    clearAuthData()  {
      return {} as UserStoreDTO;
    },
  },
});

export const { setAuthData, clearAuthData } = authSlice.actions;
export default authSlice.reducer;
