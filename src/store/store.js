import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";
import apiReducer from "../features/apiSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    api: apiReducer,
  },
});
