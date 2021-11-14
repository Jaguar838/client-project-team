import { createSlice } from '@reduxjs/toolkit';
// import * as transactionsOperations from './transactions-operations';

const initialState = {};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {},
  extraReducers: {},
});
export default transactionsSlice.reducer;
