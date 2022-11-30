import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getCategories = createAsyncThunk(
  'transactions/categories',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/api/transaction-categories');

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTransaction = createAsyncThunk(
  'transactions/addTransaction',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/api/transactions', credentials);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
