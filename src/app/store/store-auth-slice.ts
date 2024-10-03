import { createSlice } from '@reduxjs/toolkit';
import { UserStoreDTO } from '../../features/auth/types/dto';

// const initialState: UserStoreDTO = {} as UserStoreDTO;
interface AuthState {
  user: UserStoreDTO | null;
  accessToken: string | null;
  refreshToken: string | null;
}
export const loadAuthData = () => {
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  if (accessToken && refreshToken) {
    return { accessToken, refreshToken };
  }

  return { accessToken: null, refreshToken: null };
};

// Saat aplikasi dimulai, Anda bisa memuat data dari localStorage
const { accessToken, refreshToken } = loadAuthData();
const initialState: AuthState = {
  user: null,
  accessToken,
  refreshToken,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthData(state, { payload }: { payload: { user: UserStoreDTO; tokens: { accessToken: string; refreshToken: string } } }) {
      state.user = payload.user;
      state.accessToken = payload.tokens.accessToken;
      state.refreshToken = payload.tokens.refreshToken;

       // Simpan token ke localStorage
       localStorage.setItem("accessToken", payload.tokens.accessToken);
       localStorage.setItem("refreshToken", payload.tokens.refreshToken);
    },
    clearAuthData()  {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      return initialState;
    },
  },
});

export const { setAuthData, clearAuthData } = authSlice.actions;
export default authSlice.reducer;
