import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getGreeting = createAsyncThunk('greeting/getGreeting', async () => {
  try {
    const response = await axios.get('/api/greetings');
    return response.data;
  } catch (error) {
    return error;
  }
});

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {
    greeting: [],
    isLoading: false,
    hasErrors: false,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getGreeting.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getGreeting.fulfilled, (state, action) => {
        state.greeting = action.payload;
        state.isLoading = false;
        state.hasErrors = false;
      })
      .addCase(getGreeting.rejected, (state) => {
        state.isLoading = false;
        state.hasErrors = true;
      });
  }
});

export default greetingSlice.reducer;