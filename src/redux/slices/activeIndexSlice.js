import { createSlice } from "@reduxjs/toolkit";

const activeIndexSlice = createSlice({
  name: "activeIndex",
  initialState:
    JSON.parse(localStorage.getItem("monthIndex")) || new Date().getMonth() ,
  reducers: {
    setActiveIndex(state, action) {
      // console.log(action.payload)
      return action.payload;
    },
  },
});
export const { setActiveIndex } = activeIndexSlice.actions;

export default activeIndexSlice.reducer;
