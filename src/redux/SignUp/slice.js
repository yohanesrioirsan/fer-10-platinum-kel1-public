import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

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
      toast.error("Gagal Melakukan Pendaftaran", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    },
  },
});

export const { signupStart, signupSuccess, signupFailure } = signupSlice.actions;

export default signupSlice.reducer;
