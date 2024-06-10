import React, { useState, useContext, useCallback } from "react";
import * as S from "@StyledComponents/Formstyle.jsx";
import { v4 as uuidv4 } from "uuid";
import AddInputs from "@components/AddInputs.jsx";
import Monthlist from "@components/Monthlist.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setExpenses } from "../store/config/configStore";

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

  const dispatch = useDispatch();

  const handleAddForm = useCallback((e) => {
    e.preventDefault();

    if (checkInput()) {
      resetAddform();
      return;
    }
    const newExpenses = {
      id: uuidv4(),
      date: inputs.date,
      category: inputs.category,
      amount: inputs.amount,
      content: inputs.content,
    };

    dispatch(setExpenses(newExpenses));
    resetAddform();
  });

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
      alert(Object.values(newError).join("\n"));
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
