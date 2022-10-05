import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";

export const rootReducers = combineReducers({
    auth: authSlice,
})