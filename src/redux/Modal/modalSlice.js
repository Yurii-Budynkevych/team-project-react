const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  isModalLogoutOpen: false,
};
const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    togleModal: state => {
      state.isModalLogoutOpen = !state.isModalLogoutOpen;
    },
  },
});

export default modalSlice.reducer;
export const { togleModal } = modalSlice.actions;
