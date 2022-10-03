import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialStateObject = {
  todo: {
    loading: false,
    error: '',
    data: [
      {
        userId: 0,
        id: 0,
        title: '',
        completed: false,
      },
    ],
  },
};

export const fetchAllTodos = createAsyncThunk(
  'supplier/fetchAllSupplierRawMaterial',
  () => {
    return axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.data);
  }
);

const homeSlice = createSlice({
  name: 'home',
  initialState: initialStateObject,
  extraReducers: (builder) => {
    builder.addCase(fetchAllTodos.pending, (state) => {
      state.todo.loading = true;
    });
    builder.addCase(fetchAllTodos.fulfilled, (state, action) => {
      state.todo.loading = false;
      state.todo.data = action.payload;
      state.todo.error = '';
    });
    builder.addCase(fetchAllTodos.rejected, (state, action) => {
      state.todo.loading = false;
      state.todo.error = action.error.message;
    });
  },
});

export default homeSlice.reducer;
