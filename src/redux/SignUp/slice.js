import { createSlice } from "@reduxjs/toolkit";

const signupSlice = createSlice({
  name: "signup",
  initialState: {
    user: null,
    loading: false,
  },

  reducers: {
    signupStart(state) {
      state.loading = true;
      state.user = null;
    },
    signupSuccess(state, action) {
      state.loading = false;
      state.user = action.payload;
    },
    signupFailure(state) {
      state.loading = false;
      state.user = null;
    },
  },
});

export const { signupStart, signupSuccess, signupFailure } =
  signupSlice.actions;

export default signupSlice.reducer;
