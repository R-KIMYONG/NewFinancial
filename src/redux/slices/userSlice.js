import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isAuthenticated: !!localStorage.getItem("accessToken"),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogin(state, action) {
      const token = action.payload;

      localStorage.setItem("accessToken", token);
      state.isAuthenticated = true;
    },
    userLogout(state, action) {
      localStorage.removeItem("accessToken");
      state.isAuthenticated = false;
    },
  },
});

export const { userLogin, userLogout } = userSlice.actions;

export default userSlice.reducer;
