import { configureStore, createSlice } from "@reduxjs/toolkit";
import fakeData from "@/fakeData.json";

const expenses = createSlice({
  name: "expenses",
  initialState: JSON.parse(localStorage.getItem("mylocalData")) || fakeData,
  reducers: {
    setExpenses(state, action) {
      //   console.log(action.payload);
      const newState = [...state, action.payload]; //기존데이터랑 추가한데이터를 가져와서!
      localStorage.setItem("mylocalData", JSON.stringify(newState)); //로컬스토리지에 저장해야한다.
      return newState;
    },
    handleUpdate(state, action) {
      const { id, updatedExpense } = action.payload;
      // console.log(action.payload);
      // console.log(id);
      // console.log(updatedExpense);
      const updatedState = state.map((item) =>
        item.id === id ? { ...item, ...updatedExpense } : item
      );
      localStorage.setItem("mylocalData", JSON.stringify(updatedState));
      return updatedState;
    },
    handleDelete(state, action) {
      if (confirm("정말로 삭제하시겠습니까?")) {
        const id = action.payload;
        const deletedState = state.filter((item) => item.id !== id);
        localStorage.setItem("mylocalData", JSON.stringify(deletedState));
        return deletedState;
      } else {
        return;
      }
    },
  },
});

export const { setExpenses, handleUpdate, handleDelete } = expenses.actions;

const activeIndex = createSlice({
  name: "activeIndex",
  initialState:
    JSON.parse(localStorage.getItem("monthIndex")) || new Date().getMonth() + 1,
  reducers: {
    setActiveIndex(state, action) {
      // console.log(action.payload)
      return action.payload;
    },
  },
});
export const { setActiveIndex } = activeIndex.actions;

const categoryList = createSlice({
  name: "categoryList",
  initialState: {
    date: { label: "날짜", type: "text", placeholder: "YYYY-MM-DD" },
    category: { label: "항목", type: "text", placeholder: "지출 항목" },
    amount: { label: "금액", type: "number", placeholder: "지출 금액" },
    content: { label: "내용", type: "text", placeholder: "지출 내용" },
  },
});

export default configureStore({
  reducer: {
    expenses: expenses.reducer,
    activeIndex: activeIndex.reducer,
    categoryList: categoryList.reducer,
  },
});
