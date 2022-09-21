import { createSlice } from "@reduxjs/toolkit";

const initialState = { isAuth: false, username: "" };

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.isAuth = true;
      state.username = action.payload.username;
    },
    signOut: (state) => {
      state.isAuth = false;
      state.username = "";
    },
  },
});

export const { signIn, signOut } = authSlice.actions;
export default authSlice.reducer;
