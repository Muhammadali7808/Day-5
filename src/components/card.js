import { configureStore, createSlice } from "@reduxjs/toolkit";

// Slice yaratish
const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0, items: [] },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    postItem: (state, action) => {
      state.items.push({ id: Date.now(), value: action.payload });
    },
    editItem: (state, action) => {
      const { id, value } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.value = value;
      }
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { increment, decrement, postItem, editItem, deleteItem } = counterSlice.actions;

// Store yaratish
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export default store;
