import React, { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { nanoid } from "nanoid";
import * as S from "@/styledComponents/ExpendiDetail.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import {
  updatedExpense,
  getExpenseById,
  deleteExpense,
} from "../axios/expenseApi";
import { useMutation } from "@tanstack/react-query";
import { getUserInfo } from "../axios/authApi";
import { setUserInfo } from "../redux/slices/userSlice";

const ExpendiDetail = () => {
  // const expenses = useSelector((state) => state.expenses);
  const categoryList = useSelector((state) => state.categoryList);
  const navigate = useNavigate();
  const { id } = useParams();
  const dateRef = useRef();
  const categoryRef = useRef();
  const contentRef = useRef();
  const amountRef = useRef();
  const dispatch = useDispatch();
  const {
    data: selectedExpenses,
    isLoading,
    Error,
  } = useQuery({
    queryKey: ["expenses", id],
    queryFn: getExpenseById,
  });

  const mutationEdit = useMutation({
    mutationFn: updatedExpense,
    onSuccess: () => {
      navigate("/");
      queryClient.invalidateQueries([`expenses`]);
    },
  });

  const mutationDelete = useMutation({
    mutationFn: deleteExpense,
    onSuccess: () => {
      navigate("/");
      queryClient.invalidateQueries([`expenses`]);
    },
  });

  const handleUpdateBtn = async () => {
    try {
      const sessions = await getUserInfo();
      if (sessions.success) {
        dispatch(setUserInfo(sessions));
        if (isNaN(amountRef.current.value)) {
          alert("금액은 숫자으로만 수정가능합니다.");
          return;
        }
        const updateExpense = {
          id,
          date: dateRef.current.value,
          category: categoryRef.current.value,
          amount: amountRef.current.value,
          content: contentRef.current.value,
        };

        mutationEdit.mutate(updateExpense);
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  const handleDeleteBtn = async () => {
    try {
      const sessions = await getUserInfo();
      if (sessions.success) {
        dispatch(setUserInfo(sessions));
        mutationDelete.mutate(id);
      }
    } catch (error) {
      console.log("error", error);
      navigate("/login");
    }
  };

  if (isLoading) {
    return <div>데이터를 불러오는 중입니다...</div>;
  }

  if (Error) {
    return <div>데이터를 불러오는데 실패했습니다.</div>;
  }
  return (
    <S.DetailDiv>
      <>
        <h2>상세 정보</h2>
        {Object.entries(selectedExpenses)
          .filter(([item]) => item !== "id" && item !== "createdBy")
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
          <button onClick={handleUpdateBtn}>수정</button>
          <button onClick={handleDeleteBtn}>삭제</button>
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
