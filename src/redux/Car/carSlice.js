import { createSlice } from "@reduxjs/toolkit";

const carSlice = createSlice({
  name: "car",
  initialState: {
    car: {},
  },

  reducers: {
    setCar(state, action) {
        state.car = action.payload
    },
  
  },
});

export const { setCar } = carSlice.actions;

export default carSlice.reducer;
export const selectCar = (state) => state.car.car;
