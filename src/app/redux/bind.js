import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slices/authReducer";
import userReducer from "./slices/userReducer";
import collegeReducer from "./slices/collegeReducer";

/* SET BLACKLIST */
export const blacklist = ["userReducer", "collegeReducer"];

/* combine reducers */
export const slices = combineReducers({
  authReducer,
  userReducer,
  collegeReducer,
});
