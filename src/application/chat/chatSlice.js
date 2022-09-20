import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    message: " Lorem ipsum dolor sit amet.",
    isAuthor: false,
    author: "Obiora",
  },
  {
    id: 2,
    message: " Lorem ipsum dolor sit amet.",
    isAuthor: false,
    author: "Maureen",
  },
  {
    id: 3,
    message: " Lorem ipsum dolor sit amet.",
    isAuthor: true,
    author: "Chike",
  },
];

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
