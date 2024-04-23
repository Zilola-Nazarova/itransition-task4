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
  async (ids, thunkAPI) => {
    try {
      const resp = await axios.post(`${USERS_URL}/delete`, ids);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const blockUsers = createAsyncThunk(
  'users/blockUsers',
  async (ids, thunkAPI) => {
    try {
      const resp = await axios.patch(`${USERS_URL}/block`, ids);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const unblockUsers = createAsyncThunk(
  'users/unblockUsers',
  async (ids, thunkAPI) => {
    try {
      const resp = await axios.delete(`${USERS_URL}/unblock`, ids);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const initialState = {
  users: '',
  isLoading: false,
  error: undefined,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    select: (state, action) => {
      const temp = state.users.map((user) => {
        if (user.id == action.payload) {
          return {
            ...user,
            checked: !user.checked,
          };
        }
        return user;
      });
      state.users = temp;
    }
  },
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
        const users = action.payload.map((user) => {
          return { ...user, checked: false }
        })
        temp.users = users;
        return temp;
      })
      .addCase(getUsers.rejected, (state, action) => {
        const temp = state;
        temp.isLoading = false;
        temp.error = action.payload.users;
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
        temp.error = action.payload.users;
        return temp;
      })
      .addCase(blockUsers.pending, (state) => {
        const temp = state;
        temp.isLoading = true;
        return temp;
      })
      .addCase(blockUsers.fulfilled, (state) => {
        const temp = state;
        temp.isLoading = false;
        return temp;
      })
      .addCase(blockUsers.rejected, (state, action) => {
        const temp = state;
        temp.isLoading = false;
        temp.error = action.payload.users;
        return temp;
      })
      .addCase(unblockUsers.pending, (state) => {
        const temp = state;
        temp.isLoading = true;
        return temp;
      })
      .addCase(unblockUsers.fulfilled, (state) => {
        const temp = state;
        temp.isLoading = false;
        return temp;
      })
      .addCase(unblockUsers.rejected, (state, action) => {
        const temp = state;
        temp.isLoading = false;
        temp.error = action.payload.users;
        return temp;
      });
  },
});

export const { select } = usersSlice.actions;
export default usersSlice.reducer;
