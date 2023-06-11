import { configureStore, combineReducers } from "@reduxjs/toolkit";
import signupReducer from "./SignUp/slice";

const rootReducer = combineReducers({
  signup: signupReducer,
});

export default configureStore({
  reducer: rootReducer,
});
