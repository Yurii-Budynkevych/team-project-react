import { getCategories, addTransaction } from './transactionsOperations';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  transactions: [],
  categories: [],
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  extraReducers: {
    [getCategories.fulfilled](state, action) {
      state.categories = action.payload;
    },
    [addTransaction.fulfilled](state, action) {
      // state.transactions.push(action.payload);
    },
  },
});

export default transactionsSlice.reducer;
