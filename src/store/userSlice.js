import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    token: null,
    id: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    logout: (state) => {
      state.token = null;
      state.id = null;
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export const selectUser = (state) => state.user;

export default userSlice.reducer;
