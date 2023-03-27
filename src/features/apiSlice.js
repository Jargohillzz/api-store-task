import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: true,
  data: [],
};

export const fetchData = createAsyncThunk("api/fetchData", async () => {
  const resp = await axios.get("https://dummyjson.com/products?limit=20");
  const data = await resp.data.products;
  for (let i = 0; i < data.length; i++) {
    data[i].quantity = 0;
  }
  return data;
});

const apiSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    increase: (state, action) => {
      const cartItem = state.data.find((item) => item.id === action.payload.id);
      cartItem.quantity == 0
        ? (cartItem.quantity = action.payload.qty + 1)
        : (cartItem.quantity = cartItem.quantity + 1);
    },
    decrease: (state, action) => {
      const cartItem = state.data.find((item) => item.id === action.payload.id);
      cartItem.quantity == 0
        ? (cartItem.quantity = action.payload.qty - 1)
        : (cartItem.quantity = cartItem.quantity - 1);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchData.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { increase, decrease } = apiSlice.actions;
export default apiSlice.reducer;
