import { createSlice } from '@reduxjs/toolkit';
import {
  getTransactionOperation,
  addTransaction,
  deleteTransaction,
  editTransaction,
} from './transactions-operations';

const initialState = {
  finance: [],
  years: [],
  page: 1,
  totalPages: '',
  isLoading: false,
  error: false,
};


const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    paginationTransaction: (state, action) => {
      state.page = action.payload
    },
  },
  extraReducers: {
    [getTransactionOperation.pending](state, action) {
      state.isLoading = true;
      state.error = false;
    },
    [getTransactionOperation.rejected](state, action) {
      state.finance = [...state.finance];
      state.years = [...state.years];
      state.isLoading = false;
      state.error = true;
    },
    [getTransactionOperation.fulfilled](state, action) {
      state.finance = [...action.payload.transactions];
      state.years = [...action.payload.years];
      state.totalPages = action.payload.pageInfo.totalPages;
      state.isLoading = false;
    },
    [addTransaction.pending](state, action) {
      state.isLoading = true;
      state.error = false;
    },
    [addTransaction.rejected](state, action) {
      state.isLoading = false;
      state.error = true;
    },
    [addTransaction.fulfilled](state, action) {
      state.finance = [...action.payload.transactions];
      state.isLoading = false;
    },
    [editTransaction.pending](state, action) {
      state.isLoading = true;
      state.error = false;
    },
    [editTransaction.rejected](state, action) {
      state.isLoading = false;
      state.error = true;
    },
    [editTransaction.fulfilled](state, action) {
      state.finance = [...action.payload.transactions];
      state.isLoading = false;
    },
    [deleteTransaction.pending](state, action) {
      state.isLoading = true;
      state.error = false;
    },
    [deleteTransaction.rejected](state, action) {
      state.isLoading = false;
      state.error = true;
    },
    [deleteTransaction.fulfilled](state, action) {
      state.finance = [...action.payload.transactions];
      state.isLoading = false;
    },
  },
});

export const {paginationTransaction} = transactionsSlice.actions;
export default transactionsSlice.reducer;
