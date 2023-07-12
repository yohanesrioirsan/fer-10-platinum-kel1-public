import { configureStore, combineReducers } from "@reduxjs/toolkit";
import carSlice from "./Car/carSlice";
import signupReducer from "./SignUp/slice";
import authSlice from "./SignIn/authSlice";

const rootReducer = combineReducers({
  signup: signupReducer,
  car: carSlice,
  signin: authSlice,
});

export default configureStore({
  reducer: rootReducer,
});
