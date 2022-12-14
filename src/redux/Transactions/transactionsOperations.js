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

export const getTransactions = createAsyncThunk(
  'transactions/getTransactions',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/api/transactions');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const showModalToggle = createAsyncThunk(
  'transactions/showModalToggle',
  async (_, thunkAPI) => {
    try {
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
