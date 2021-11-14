// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { BASE_URL } from '../../assets/constants';

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

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

// const authOperations = {
//   refreshCurrentUser,
// };

// export default authOperations;