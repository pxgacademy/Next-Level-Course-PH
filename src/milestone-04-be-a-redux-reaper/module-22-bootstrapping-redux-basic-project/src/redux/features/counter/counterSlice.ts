import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.count += action.payload;
    },
    decrement: (state) => {
      if (state.count < 1) return;
      state.count--;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export const counterReducer = counterSlice.reducer;
