import { createSlice } from '@reduxjs/toolkit';
import getTransactionOperation from './transactions-operations';

const initialState = {
  finance: [],
  isLoading: false,
  error: null,
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {},
  extraReducers: {
    [getTransactionOperation.pending](state, action) {
      state.isLoading = true;
    },
    [getTransactionOperation.rejected](state, action) {
      state.finance = [...state.finance];
      state.isLoading = false;
      state.error = action.payload;
    },
    [getTransactionOperation.fulfilled](state, action) {
      state.finance = [...action.payload];
      state.isLoading = false;
    },
  },
});
export default transactionsSlice.reducer;
