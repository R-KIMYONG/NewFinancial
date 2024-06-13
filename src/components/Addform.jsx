import React, { useState } from "react";
import * as S from "../StyledComponents/Formstyle";
import { v4 as uuidv4 } from "uuid";
import Monthlist from "./../components/Monthlist.jsx";
import AddInputs from "./AddInputs.jsx";
import { useSelector } from "react-redux";
import { addExpense, getExpenseList } from "./../axios/expenseApi.js";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { getUserInfo } from "./../axios/authApi.js";
import { notifyError, notifySuccess } from "./../util/toast.js";
const Addform = () => {
  const activeIndex = useSelector((state) => state.activeIndex);
  const [inputs, setInputs] = useState({
    id: "",
    date: `2024-${String(Number(activeIndex) + 1).padStart(2, "0")}-01`,
    category: "",
    amount: "",
    content: "",
  });
  const [error, setError] = useState({});
  const queryClient = useQueryClient();

  const { refetch } = useQuery({
    queryKey: ["expenses"],
    queryFn: getExpenseList,
    cachetime: 30000,
    staleTime: 100000,
  });
  const { mutate } = useMutation({
    mutationFn: addExpense,
    onSuccess: () => {
      queryClient.invalidateQueries(["expenses"]);
      refetch();
    },
  });

  const handleAddForm = async (e) => {
    e.preventDefault();
    if (checkInput()) {
      resetAddform();
      return;
    }
    try {
      const sessions = await getUserInfo();
      if (sessions.success) {
        // dispatch(setUserInfo(sessions));
        const newExpenses = {
          id: uuidv4(),
          date: inputs.date,
          category: inputs.category,
          amount: Number(inputs.amount),
          content: inputs.content,
          createdBy: sessions.id,
        };
        mutate(newExpenses);
        resetAddform();
        notifySuccess("지출 추가 완료");
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  const checkInput = () => {
    const newError = {};
    if (inputs.date.slice(-1) === "") newError["date"] = "날짜를 입력하세요.";

    if (!inputs.category.trim()) {
      newError["category"] = "항목을 입력하세요.";
    } else if (!isNaN(inputs.category.trim())) {
      newError["category"] = "항목은 문자여야합니다.";
    }
    if (!inputs.amount.trim()) {
      newError["amount"] = "금액을 입력하세요.";
    } else if (isNaN(inputs.amount.trim())) {
      newError["amount"] = "금액은 숫자여야 합니다.";
    }
    if (!inputs.content.trim()) newError["content"] = "내용을 입력하세요.";
    setError(newError);

    if (Object.keys(newError).length > 0) {
      const errorMessage = Object.values(newError);
      notifyError(errorMessage);
      return true;
    }

    return false;
  };

  const resetAddform = () => {
    setInputs((prev) => {
      return {
        date: `2024-${String(activeIndex + 1).padStart(2, "0")}-01`,
        category: "",
        amount: "",
        content: "",
      };
    });
    setError({});
  };

  return (
    <>
      <div id="main">
        <S.Fromsubmit onSubmit={handleAddForm}>
          {[...Object.entries(inputs)]
            .filter(([key]) => key !== "id")
            .map(([item, value], index) => (
              <AddInputs
                key={index}
                item={item}
                value={value}
                setInputs={setInputs}
              />
            ))}
          <S.FormSaveBtn>저장</S.FormSaveBtn>
        </S.Fromsubmit>
        <Monthlist setInputs={setInputs} />
      </div>
    </>
  );
};

export default React.memo(Addform);
