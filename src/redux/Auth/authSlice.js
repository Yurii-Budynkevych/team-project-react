import { logIn, logout, refresh, register } from './authOperations';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  user: { id: null, username: null, email: null, balance: 0 },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isSaveRoute: true,
};
const loginOrRegisterFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};

const logOutFulfilled = state => {
  state.user = { id: null, username: null, email: null, balance: 0 };
  state.token = null;
  state.isLoggedIn = false;
};
const refreshFulfilled = (state, { payload }) => {
  state.user = payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};
const refreshPending = state => {
  state.isRefreshing = true;
};

const refreshRejected = state => {
  state.isRefreshing = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    createSaveRoute: (state, { payload }) => {
      state.isSaveRoute = payload.save;
    },
  },
  extraReducers: build =>
    build
      .addCase(register.fulfilled, loginOrRegisterFulfilled)
      .addCase(logIn.fulfilled, loginOrRegisterFulfilled)
      .addCase(logout.fulfilled, logOutFulfilled)
      .addCase(refresh.fulfilled, refreshFulfilled)
      .addCase(refresh.pending, refreshPending)
      .addCase(refresh.rejected, refreshRejected),
});

export default authSlice.reducer;
export const { createSaveRoute } = authSlice.actions;
