import {
  getCategories,
  addTransaction,
  getTransactions,
} from './transactionsOperations';

import { createSlice } from '@reduxjs/toolkit';

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
    [getTransactions.fulfilled](state, action) {
      const { payload } = action;
      state.transactions = payload.sort(
        (firstTransaction, secondTransaction) => {
          return (
            new Date(secondTransaction.transactionDate) -
            new Date(firstTransaction.transactionDate)
          );
        }
      );
    },
  },
});

export default transactionsSlice.reducer;
