import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  num: 0,
  isOpen: false,
  tempId: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state) => {
      state.items.push(state.tempId);
      state.num = state.items.length;
    },
    openModal: (state, action) => {
      state.isOpen = true;
      state.tempId = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.tempId = 0;
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((id) => id !== action.payload);
      state.num = state.items.length;
    },
    clearCart: (state) => {
      state.items = [];
      state.num = 0;
    },
  },
});

export const { addToCart, openModal, closeModal, removeItem, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
