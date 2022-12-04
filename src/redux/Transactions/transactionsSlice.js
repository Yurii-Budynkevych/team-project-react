import {
  getCategories,
  addTransaction,
  getTransactions,
  showModalToggle,
} from './transactionsOperations';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  transactions: [],
  categories: [],
  isModalAddTransactionOpen: false,
  balanceAfter: null,
};
const getCategoriesFulfilled = (state, action) => {
  state.categories = action.payload;
};

const addTransactionFulfilled = (state, action) => {
  state.transactions.push(action.payload);
  state.balanceAfter = action.payload.balanceAfter;
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
const showModalToggleFulfilled = (state, action) => {
  state.isModalAddTransactionOpen = !state.isModalAddTransactionOpen;
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  extraReducers: build =>
    build
      .addCase(getCategories.fulfilled, getCategoriesFulfilled)
      .addCase(addTransaction.fulfilled, addTransactionFulfilled)
      .addCase(getTransactions.fulfilled, getTransactionsFulfilled)
      .addCase(showModalToggle.fulfilled, showModalToggleFulfilled),
});

export default transactionsSlice.reducer;
