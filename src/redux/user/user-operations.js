import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../../assets/constants';
axios.defaults.baseURL = BASE_URL;

const changeUserName = createAsyncThunk(
  'user/changeUserName',
  async (name, thunkAPI) => {
    try {
      const { data } = await axios.patch('api/users', { name });
      return data.data.name;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue();
    }
  },
);

const userOperations = {
  changeUserName,
};
export default userOperations;
