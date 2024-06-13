import { createSlice } from "@reduxjs/toolkit";

const userInfo = JSON.parse(localStorage.getItem("userInfo")) || {};

const initialState = {
  avatar: userInfo?.avatar,
  id: userInfo?.userId,
  nickname: userInfo?.nickname,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo(state, action) {
      const { avatar, userId, nickname } = action.payload;
      const updatedUserInfo = { avatar, userId, nickname };
      localStorage.setItem("userInfo", JSON.stringify(updatedUserInfo));
      return updatedUserInfo;
    },
    updateUserInfo(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export const { setUserInfo, updateUserInfo } = userSlice.actions;

export default userSlice.reducer;
