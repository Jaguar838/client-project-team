import { createSlice } from '@reduxjs/toolkit';
import apiOperations from './categories-operations';

const initialState = {
  data: [],
  isLoading: false,
  error: false,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: {
    [apiOperations.getCategories.pending](state, action) {
      state.isLoading = true;
      state.error = false;
    },
    [apiOperations.getCategories.rejected](state, action) {
      state.data = [...state.data];
      state.isLoading = false;
      state.error = true;
    },
    [apiOperations.getCategories.fulfilled](state, action) {
      state.data = [...action.payload.data];
      state.isLoading = false;
    },
    [apiOperations.getCategoriesWithParams.pending](state, action) {
      state.isLoading = true;
      state.error = false;
    },
    [apiOperations.getCategoriesWithParams.rejected](state, action) {
      state.data = [...state.data];
      state.isLoading = false;
      state.error = true;
    },
    [apiOperations.getCategoriesWithParams.fulfilled](state, action) {
      state.data = [...action.payload.data];
      state.isLoading = false;
    },
  },
});
export default categoriesSlice.reducer;
