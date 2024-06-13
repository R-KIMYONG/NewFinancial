import { configureStore } from "@reduxjs/toolkit";
import activeIndexSlice from "./../slices/activeIndexSlice.js";
import authSlice from "./../slices/authSlice.js";
import categoryListSlice from "./../slices/categoryListSlice.js";
import userSlice from "./../slices/userSlice.js";

const store = configureStore({
  reducer: {
    activeIndex: activeIndexSlice,
    categoryList: categoryListSlice,
    auth: authSlice,
    user: userSlice,
  },
});

export default store;
