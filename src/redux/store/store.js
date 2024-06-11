import { configureStore } from "@reduxjs/toolkit";
import activeIndexSlice from "../slices/activeIndexSlice";
import authSlice from "../slices/authSlice";
import categoryListSlice from "../slices/categoryListSlice";
import expensesSlice from "../slices/expensesSlice";
import userSlice from "../slices/userSlice";

const store = configureStore({
  reducer: {
    expenses: expensesSlice,
    activeIndex: activeIndexSlice,
    categoryList: categoryListSlice,
    auth: authSlice,
    user: userSlice,
  },
});

export default store;
