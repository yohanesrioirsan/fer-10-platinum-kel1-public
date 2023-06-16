import { configureStore, combineReducers } from "@reduxjs/toolkit";
import signupReducer from "./SignUp/slice";
import authReducer from "./SignIn/authSlice";

const rootReducer = combineReducers({
  signup: signupReducer,
  signin: authReducer,
});

export default configureStore({
  reducer: rootReducer,
});
