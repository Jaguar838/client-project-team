import { createSlice } from '@reduxjs/toolkit';
import {getTransactionOperation, addTransaction} from './transactions-operations';

const initialState = {
  finance: [],
  years: [],
  operations: [],
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
      state.years = [...state.years];
      state.isLoading = false;
      state.error = action.payload;
    },
    [getTransactionOperation.fulfilled](state, action) {
      state.finance = [...action.payload.transactions];
      state.years = [...action.payload.years];
      state.isLoading = false;
    },
    [addTransaction.pending](state, action) {
      state.isLoading = true;
    },
    [addTransaction.rejected](state, action) {
      state.operations = [...state.operations];
      state.isLoading = false;
      state.error = action.payload;
    },
    [addTransaction.fulfilled](state, action) {
      state.operations = [action.payload, ...state.operations];
      state.isLoading = false;
    },
  },
});

export default transactionsSlice.reducer;
