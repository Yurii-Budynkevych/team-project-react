import { logIn, logout, refresh, register } from './authOperations';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  user: { id: null, username: null, email: null, balance: 0 },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logout.fulfilled](state) {
      state.user = { id: null, username: null, email: null, balance: 0 };
      state.token = null;
      state.isLoggedIn = false;
    },
    [refresh.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
  },
});

export default authSlice.reducer;
