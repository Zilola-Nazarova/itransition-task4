import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
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
      const temp = state;
      temp.user.username = action.payload.username;
      temp.user.token = action.payload.token;
      temp.user.isAuthenticated = !!action.payload;
      return temp;
    },
    clearToken: (state) => {
      const temp = state;
      temp.user.username = null;
      temp.user.token = null;
      temp.user.isAuthenticated = false;
      return temp;
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
        temp.error = undefined;
        temp.isLoading = false;
        temp.user = action.payload;
        temp.message = action.payload.message;
        temp.user.isAuthenticated = true;
        Cookies.set('token', action.payload.token, { expires: 1, secure: true });
        Cookies.set('username', action.payload.username, { expires: 1, secure: true });
        return temp;
      })
      .addCase(signin.rejected, (state, action) => {
        const temp = state;
        temp.user = {};
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
        temp.error = undefined;
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
