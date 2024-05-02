import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';
import { clearToken } from '../auth/authenticationSlice';

const USERS_URL = 'https://itransition-task4-qieg.onrender.com/api/v1/users';

export const getUsers = createAsyncThunk(
  'users/getUsers',
  async (token, { rejectWithValue, dispatch }) => {
    try {
      const resp = await axios.get(USERS_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return resp.data;
    } catch (error) {
      if (error.response.status === 401) {
        dispatch(clearToken());
        Cookies.remove('token', { path: '' });
        Cookies.remove('username', { path: '' });
      }
      return rejectWithValue(error.response.data);
    }
  },
);

export const deleteUsers = createAsyncThunk(
  'users/deleteUsers',
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const { users, token } = data;
      const resp = await axios.patch(`${USERS_URL}/delete`, { users }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return resp.data;
    } catch (error) {
      if (error.response.status === 401) {
        dispatch(clearToken());
        Cookies.remove('token', { path: '' });
        Cookies.remove('username', { path: '' });
      }
      return rejectWithValue(error.response.data);
    }
  },
);

export const blockUsers = createAsyncThunk(
  'users/blockUsers',
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const { users, token } = data;
      const resp = await axios.patch(`${USERS_URL}/block`, { users }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return resp.data;
    } catch (error) {
      if (error.response.status === 401) {
        dispatch(clearToken());
        Cookies.remove('token', { path: '' });
        Cookies.remove('username', { path: '' });
      }
      return rejectWithValue(error.response.data);
    }
  },
);

export const unblockUsers = createAsyncThunk(
  'users/unblockUsers',
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const { users, token } = data;
      const resp = await axios.patch(`${USERS_URL}/unblock`, { users }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return resp.data;
    } catch (error) {
      if (error.response.status === 401) {
        dispatch(clearToken());
        Cookies.remove('token', { path: '' });
        Cookies.remove('username', { path: '' });
      }
      return rejectWithValue(error.response.data);
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
      const temp = state;
      temp.users = temp.users.map((user) => {
        if (user.id === action.payload) {
          return {
            ...user,
            checked: !user.checked,
          };
        }
        return user;
      });
      return temp;
    },
    selectAll: (state) => {
      const temp = state;
      temp.users = temp.users.map((user) => ({
        ...user,
        checked: !user.checked,
      }));
      return temp;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getUsers.pending, (state) => {
        const temp = state;
        temp.isLoading = true;
        temp.users = null;
        return temp;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        const temp = state;
        temp.isLoading = false;
        temp.error = undefined;
        const users = action.payload.map((user) => ({
          ...user,
          checked: false,
        }));
        temp.users = users;
        return temp;
      })
      .addCase(getUsers.rejected, (state, action) => {
        const temp = state;
        temp.isLoading = false;
        temp.error = action.payload.errors;
        return temp;
      })
      .addCase(deleteUsers.pending, (state) => {
        const temp = state;
        temp.isLoading = true;
        return temp;
      })
      .addCase(deleteUsers.fulfilled, (state) => {
        const temp = state;
        temp.error = undefined;
        temp.isLoading = false;
        return temp;
      })
      .addCase(deleteUsers.rejected, (state, action) => {
        const temp = state;
        temp.isLoading = false;
        temp.error = action.payload.errors;
        return temp;
      })
      .addCase(blockUsers.pending, (state) => {
        const temp = state;
        temp.isLoading = true;
        return temp;
      })
      .addCase(blockUsers.fulfilled, (state) => {
        const temp = state;
        temp.error = undefined;
        temp.isLoading = false;
        return temp;
      })
      .addCase(blockUsers.rejected, (state, action) => {
        const temp = state;
        temp.isLoading = false;
        temp.error = action.payload.errors;
        return temp;
      })
      .addCase(unblockUsers.pending, (state) => {
        const temp = state;
        temp.isLoading = true;
        return temp;
      })
      .addCase(unblockUsers.fulfilled, (state) => {
        const temp = state;
        temp.error = undefined;
        temp.isLoading = false;
        return temp;
      })
      .addCase(unblockUsers.rejected, (state, action) => {
        const temp = state;
        temp.isLoading = false;
        temp.error = action.payload.errors;
        return temp;
      });
  },
});

export const { select, selectAll } = usersSlice.actions;
export default usersSlice.reducer;
