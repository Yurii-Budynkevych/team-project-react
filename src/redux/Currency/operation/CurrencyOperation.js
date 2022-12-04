import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// const fetchCurrency = async () => {
//   try {
//     const { data } = await axios.get('https://api.monobank.ua/bank/currency');

//     return data;
//   } catch (error) {
//     throw error;
//   }
// };

export const getCurrencyRate = createAsyncThunk(
  'currency/getCurrency',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('https://api.monobank.ua/bank/currency');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// import axios from 'axios';

// axios.defaults.baseURL = 'https://api.monobank.ua'
