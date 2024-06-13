import { createSlice } from "@reduxjs/toolkit";

const categoryListSlice = createSlice({
  name: "categoryList",
  initialState: {
    date: { label: "날짜", type: "text", placeholder: "YYYY-MM-DD" },
    category: { label: "항목", type: "text", placeholder: "지출 항목" },
    amount: { label: "금액", type: "number", placeholder: "지출 금액" },
    content: { label: "내용", type: "text", placeholder: "지출 내용" },
    createdBy: { label: "작성자", type: "text", placeholder: "작성자" },
  },
});
export default categoryListSlice.reducer;
