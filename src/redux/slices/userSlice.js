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
      const { newAvatar, nickname } = action.payload;

      const updatedState = { ...state };
      if (newAvatar) updatedState.avatar = newAvatar;
      if (nickname) updatedState.nickname = nickname;
      const updatedUserInfo = {
        ...userInfo,
        avatar: newAvatar || userInfo.avatar,
        nickname: nickname || userInfo.nickname,
      };
      localStorage.setItem("userInfo", JSON.stringify(updatedUserInfo));

      return updatedState;
    },
  },
});

export const { setUserInfo, updateUserInfo } = userSlice.actions;

export default userSlice.reducer;
