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
      return data.data.transactions;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  },
);

export default getTransactionOperation;
