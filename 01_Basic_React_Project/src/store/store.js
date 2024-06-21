import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";

const store = configureStore({
  reducer: authSlice,
  /**
   * @TODO : Add the reducer for the postSlice
   */
});

export default store;