import { createSlice } from '@reduxjs/toolkit';
import { getCurrencyRate } from '../operation/CurrencyOperation';

const getCurrencyRateFulfilled = (state, { payload }) => {
  state.currency = payload;
};

const CurrencySlice = createSlice({
  name: 'currency',
  initialState: {
    currency: [],
  },
  extraReducers: build =>
    build.addCase(getCurrencyRate.fulfilled, getCurrencyRateFulfilled),
});
export default CurrencySlice.reducer;
