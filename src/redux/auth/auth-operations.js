import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = process.env.REACT_APP_BASE_URL
// import { BASE_URL } from '../../assets/constants';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const signUp = createAsyncThunk('auth/signup', async credentials => {
  const res = await axios.post('/users/signup', credentials);
    token.set(res.data.token);
    console.log(res.data)
  return res.data;
});

const logIn = createAsyncThunk('auth/login', async credentials => {
  const res = await axios.post('/users/login', credentials);
    token.set(res.data.token);
    
  return res.data;
});

// const refreshCurrentUser = createAsyncThunk(
//   'auth/refresh',
//   async (_, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const persistedToken = state.auth.token;
//     if (persistedToken === null) {
//       return thunkAPI.rejectWithValue();
//     }
//     token.set(persistedToken);
//     const res = await axios.get('/users/current');
//     return res.data;
//   },
// );

const authOperations = {
    signUp,
  logIn,
};

export default authOperations;