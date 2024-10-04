import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserStoreDTO } from '../../features/auth/types/dto';
import { apiV1 } from '../../api/api-config';


export const getUserLogged = createAsyncThunk("users/getUserLogged", async () => {
  const response = await apiV1.get<null, { data: UserStoreDTO }>("/user/me");
  return response.data;
});

// const initialState: UserStoreDTO = {} as UserStoreDTO;
interface AuthState {
  user: UserStoreDTO ;
  accessToken: string | null;
  refreshToken: string | null;
  loading: "idle" | "pending" | "succeeded" | "failed";
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
  user: {} as UserStoreDTO,
  accessToken,
  refreshToken,
  loading: "idle",
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthData(state, { payload }: { payload: { user: UserStoreDTO ; tokens: { accessToken: string; refreshToken: string } } }) {
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
  extraReducers: (builder) => {
    builder.addCase(getUserLogged.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = "succeeded";
    });
    builder.addCase(getUserLogged.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getUserLogged.rejected, (state) => {
      state.loading = "failed";
    });
  },
});

export const { setAuthData, clearAuthData } = authSlice.actions;
export default authSlice.reducer;
