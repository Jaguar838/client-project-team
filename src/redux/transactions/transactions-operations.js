import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../../assets/constants';
axios.defaults.baseURL = BASE_URL;

const setToken = token => {
  if (!axios.defaults.headers.common.Authorization)
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const getTransactionOperation = createAsyncThunk(
  'transactions/getFinance',
  async (token, thunkAPI) => {
    try {
      setToken(token);
      const { data } = await axios.get('api/transactions');
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  },
);

const addTransaction = createAsyncThunk(
  'transactions/addTransaction',
  async (transaction, thunkAPI) => {
    try {
      const { data } = await axios.post('api/transactions', transaction);
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  },
);

const deleteTransaction = createAsyncThunk(
  'transactions/deleteContact',
  async (transactionId, thunkAPI) => {
    try {
      await axios.delete(`api/transactions/${transactionId}`);
      return transactionId;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  });

const editTransaction = createAsyncThunk(
  'transactions/editContact',
  async ({operationId, values, thunkAPI}) => {
    try {
      const {data} = await axios.patch(`api/transactions/${operationId}`, values);
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  });

export { getTransactionOperation, addTransaction, editTransaction, deleteTransaction };