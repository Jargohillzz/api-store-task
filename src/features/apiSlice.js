import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: true,
  data: [],
};

export const fetchData = createAsyncThunk("api/fetchData", async () => {
  const resp = await axios.get("https://dummyjson.com/products?limit=20");
  return resp.data.products;
});

const apiSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
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

export default apiSlice.reducer;
