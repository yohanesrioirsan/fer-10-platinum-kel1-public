import { configureStore, combineReducers } from "@reduxjs/toolkit";
import carSlice from "./Car/carSlice";
import signupReducer from "./SignUp/slice";

const rootReducer = combineReducers({
  signup: signupReducer,
  car: carSlice
});

export default configureStore({
  reducer: rootReducer,
});
