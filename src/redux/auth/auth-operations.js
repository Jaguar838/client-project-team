import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../../assets/constants';
// axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

axios.defaults.baseURL = BASE_URL;

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const signUp = createAsyncThunk('auth/signup', async (credentials, thunkAPI) => {
  try {
    const {data} = await axios.post('/users/signup', credentials);
    token.set(data.token);
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue()
  }
});

const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const {data} = await axios.post('/users/login', credentials);
    token.set(data.data.token);  
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue();
  }
});

const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    return thunkAPI.rejectWithValue();
  }
});

const refreshCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    const res = await axios.get('/users/current');
    return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  },
);

const authOperations = {
  signUp,
  logIn,
  logOut,
  refreshCurrentUser,
};

export default authOperations;
