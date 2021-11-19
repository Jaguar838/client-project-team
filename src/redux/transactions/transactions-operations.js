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
      const { data } = await axios.get('transactions');
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  },
);

const addTransaction = createAsyncThunk('transactions/addTransaction',
  async (transaction, thunkAPI) => {
    // setToken(token);
    try {
      const operation = await axios.post('transactions', transaction);
      return operation;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export {getTransactionOperation,addTransaction};
