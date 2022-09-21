import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const chatSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    addNewChat: (state, action) => {
      state.push(action.payload);
    },
    loadInitialChats: (state, action) => {
      state = action.payload.chats;
    },
  },
});

export const { loadInitialChats, addNewChat } = chatSlice.actions;

export default chatSlice.reducer;
