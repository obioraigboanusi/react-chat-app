import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addNewChat: (state, action) => {
      state.push(action.payload.chat);
    },
    loadInitialChats: (state, action) => {
      state = action.payload.chats;
    },
  },
});

export const { loadInitialChats, addNewChat } = chatSlice.actions;

export default chatSlice.reducer;
