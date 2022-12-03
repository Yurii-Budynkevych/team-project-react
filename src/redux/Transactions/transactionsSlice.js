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
const getCategoriesFulfilled = (state, action) => {
  state.categories = action.payload;
};

const addTransactionFulfilled = (state, action) => {
  state.transactions.push(action.payload);
};

const getTransactionsFulfilled = (state, action) => {
  const { payload } = action;
  state.transactions = payload.sort((firstTransaction, secondTransaction) => {
    return (
      new Date(secondTransaction.transactionDate) -
      new Date(firstTransaction.transactionDate)
    );
  });
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  extraReducers: build =>
    build
      .addCase(getCategories.fulfilled, getCategoriesFulfilled)
      .addCase(addTransaction.fulfilled, addTransactionFulfilled)
      .addCase(getTransactions.fulfilled, getTransactionsFulfilled),
});

export default transactionsSlice.reducer;
