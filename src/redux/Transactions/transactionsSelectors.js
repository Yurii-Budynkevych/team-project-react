export const selectCategories = state => state.transactions.categories;
export const selectTransactions = state => state.transactions.transactions;
export const selectBalanceAfter = state => state.transactions.balanceAfter;
export const selectIsModalAddTransactionOpen = state =>
  state.transactions.isModalAddTransactionOpen;
