import React, { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { nanoid } from "nanoid";
import * as S from "@StyledComponents/ExpendiDetail.jsx";
import { useDispatch, useSelector } from "react-redux";
import { handleUpdate, handleDelete } from "../redux/slices/expensesSlice";

const ExpendiDetail = () => {
  const expenses = useSelector((state) => state.expenses);
  const categoryList = useSelector((state) => state.categoryList);
  const navigate = useNavigate();
  const { id } = useParams();
  const dateRef = useRef();
  const categoryRef = useRef();
  const contentRef = useRef();
  const amountRef = useRef();
  const expense = expenses.find((item) => item.id === id);
  const dispatch = useDispatch();
  const handleUpdateBtn = () => {
    if (isNaN(amountRef.current.value)) {
      alert("금액은 숫자으로만 수정가능합니다.");
      return;
    }
    const updateExpense = {
      date: dateRef.current.value || expense.date,
      category: categoryRef.current.value || expense.category,
      amount: amountRef.current.value || expense.amount,
      content: contentRef.current.value || expense.content,
    };
    dispatch(handleUpdate({ id, updatedExpense: updateExpense }));
    navigate("/");
  };

  return (
    <S.DetailDiv>
      <>
        <h2>상세 정보</h2>
        {Object.entries(expense)
          .filter(([item]) => item !== "id")
          .map(([item, value]) => (
            <div className="detail-input" key={nanoid()}>
              <label htmlFor={item}>{categoryList[item].label}</label>
              <input
                type={categoryList[item].type}
                name={item}
                ref={(() => {
                  switch (item) {
                    case "date":
                      return dateRef;
                    case "amount":
                      return amountRef;
                    case "content":
                      return contentRef;
                    case "category":
                      return categoryRef;
                    default:
                      return "";
                  }
                })()}
                defaultValue={value}
                autoComplete="off"
              />
            </div>
          ))}
        <div className="UDB-btnbox">
          <button
            onClick={() => {
              handleUpdateBtn();
            }}
          >
            수정
          </button>
          <button
            onClick={() => {
              dispatch(handleDelete(id));
              navigate("/");
            }}
          >
            삭제
          </button>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            뒤로 가기
          </button>
        </div>
      </>
    </S.DetailDiv>
  );
};

export default ExpendiDetail;
