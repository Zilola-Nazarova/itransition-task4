import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const USERS_URL = 'http://127.0.0.1:3000/api/v1/users';

export const getUsers = createAsyncThunk(
  'users/getUsers',
  async (_, thunkAPI) => {
    try {
      const resp = await axios.get(USERS_URL);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const deleteUsers = createAsyncThunk(
  'users/deleteUsers',
  async (id, thunkAPI) => {
    try {
      const resp = await axios.delete(`${USERS_URL}/${id}`, id);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const updateUsers = createAsyncThunk(
  'users/updateUsers',
  async (id, thunkAPI) => {
    try {
      const resp = await axios.patch(`${USERS_URL}/${id}`, id);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const initialState = {
  message: '',
  isLoading: false,
  error: undefined,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: { },
  extraReducers(builder) {
    builder
      .addCase(getUsers.pending, (state) => {
        const temp = state;
        temp.isLoading = true;
        return temp;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        const temp = state;
        temp.isLoading = false;
        temp.message = action.payload;
        return temp;
      })
      .addCase(getUsers.rejected, (state, action) => {
        const temp = state;
        temp.isLoading = false;
        temp.error = action.payload.message;
        return temp;
      })
      .addCase(deleteUsers.pending, (state) => {
        const temp = state;
        temp.isLoading = true;
        return temp;
      })
      .addCase(deleteUsers.fulfilled, (state) => {
        const temp = state;
        temp.isLoading = false;
        return temp;
      })
      .addCase(deleteUsers.rejected, (state, action) => {
        const temp = state;
        temp.isLoading = false;
        temp.error = action.payload.message;
        return temp;
      })
      .addCase(updateUsers.pending, (state) => {
        const temp = state;
        temp.isLoading = true;
        return temp;
      })
      .addCase(updateUsers.fulfilled, (state) => {
        const temp = state;
        temp.isLoading = false;
        return temp;
      })
      .addCase(updateUsers.rejected, (state, action) => {
        const temp = state;
        temp.isLoading = false;
        temp.error = action.payload.message;
        return temp;
      });
  },
});

export default usersSlice.reducer;
