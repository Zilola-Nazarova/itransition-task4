import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const GREETINGS_URL = 'http://127.0.0.1:3000/api/v1/greeting';

export const getGreetings = createAsyncThunk(
  'greetings/getGreetings',
  async (_, thunkAPI) => {
    try {
      const resp = await axios.get(GREETINGS_URL);
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

export const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: { },
  extraReducers(builder) {
    builder
      .addCase(getGreetings.pending, (state) => {
        const temp = state;
        temp.isLoading = true;
        return temp;
      })
      .addCase(getGreetings.fulfilled, (state, action) => {
        const temp = state;
        temp.isLoading = false;
        temp.message = action.payload.message;
        return temp;
      })
      .addCase(getGreetings.rejected, (state, action) => {
        const temp = state;
        temp.isLoading = false;
        temp.error = action.payload.message;
        return temp;
      });
  },
});

export default greetingsSlice.reducer;
