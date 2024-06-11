import { createSlice } from "@reduxjs/toolkit";
import fakeData from "@/fakeData.json";

const expensesSlice = createSlice({
  name: "expenses",
  initialState: JSON.parse(localStorage.getItem("mylocalData")) || fakeData,
  reducers: {
    setExpenses(state, action) {
      const newState = [...state, action.payload]; //기존데이터랑 추가한데이터를 가져와서!
      localStorage.setItem("mylocalData", JSON.stringify(newState)); //로컬스토리지에 저장해야한다.
      return newState;
    },
    handleUpdate(state, action) {
      const { id, updatedExpense } = action.payload;
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

export const { setExpenses, handleUpdate, handleDelete } =
  expensesSlice.actions;

export default expensesSlice.reducer;
``