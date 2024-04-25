import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const AUTH_URL = 'http://127.0.0.1:3000/api/v1/auth';

export const signin = createAsyncThunk(
  'auth/signin',
  async (user, thunkAPI) => {
    try {
      const resp = await axios.post(`${AUTH_URL}/signin`, user);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const signup = createAsyncThunk(
  'auth/signup',
  async (user, thunkAPI) => {
    try {
      const resp = await axios.post(`${AUTH_URL}/signup`, user);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

const initialState = {
  user: {},
  message: null,
  isLoading: false,
  error: undefined,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.user.username = action.payload.username;
      state.user.token = action.payload.token;
      state.user.isAuthenticated = !!action.payload;
    },
    clearToken: (state) => {
      state.user.username = null;
      state.user.token = null;
      state.user.isAuthenticated = false;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(signin.pending, (state) => {
        const temp = state;
        temp.isLoading = true;
        return temp;
      })
      .addCase(signin.fulfilled, (state, action) => {
        const temp = state;
        temp.isLoading = false;
        temp.message = action.payload.message;
        temp.user = action.payload;
        return temp;
      })
      .addCase(signin.rejected, (state, action) => {
        const temp = state;
        temp.isLoading = false;
        temp.error = action.payload.errors;
        return temp;
      })
      .addCase(signup.pending, (state) => {
        const temp = state;
        temp.isLoading = true;
        return temp;
      })
      .addCase(signup.fulfilled, (state, action) => {
        const temp = state;
        temp.isLoading = false;
        temp.message = action.payload.message;
        return temp;
      })
      .addCase(signup.rejected, (state, action) => {
        const temp = state;
        temp.isLoading = false;
        temp.error = action.payload.errors;
        return temp;
      });
  },
});

export default authSlice.reducer;
export const { setToken, clearToken } = authSlice.actions;
