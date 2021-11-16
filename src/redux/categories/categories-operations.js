import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../../assets/constants';
axios.defaults.baseURL = BASE_URL;

const setToken = token => {
  if (!axios.defaults.headers.common.Authorization)
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const getCategories = createAsyncThunk(
  'categories/getCategories',
  async (token, thunkAPI) => {
    try {
      setToken(token);
      const { data } = await axios.get('categories');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  },
);

const getTransactionStats = createAsyncThunk(
  'categories/getStats',
  async (params, thunkAPI) => {
    const { token, year, month } = params;

    try {
      setToken(token);
      console.log(token);
      const { data } = await axios.get('transactions/stats', {
        params: {
          year,
          month,
        },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  },
);

const apiOperations = {
  getCategories,
  getTransactionStats,
};
export default apiOperations;
