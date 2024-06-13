import React, { useEffect } from "react";
import * as S from "../StyledComponents/Monthstyle.jsx";
import Totalex from "./Totalex.jsx";
import ExpenditureItem from "./ExpenditureItem.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setActiveIndex } from "./../redux/slices/activeIndexSlice.js";

const Monthlist = ({ setInputs }) => {
  const activeIndex = useSelector((state) => state.activeIndex);
  const dispatch = useDispatch();
  //안쓰는값은 _으로 대체함 1~12까지의 array를 생성함
  const months = Array.from({ length: 12 }, (_, index) => index + 1);

  const handleClickMonthTap = (index) => {
    const clickedMonth = `2024-${String(index + 1).padStart(2, "0")}-01`;
    setInputs((prev) => ({
      ...prev,
      date: clickedMonth,
    }));
    dispatch(setActiveIndex(index));
  };

  useEffect(() => {
    localStorage.setItem("monthIndex", JSON.stringify(activeIndex));
  }, [activeIndex]);
  return (
    <div>
      <S.MonthUl>
        {months.map((item, index) => (
          <S.MonthLi
            key={index}
            id={item.id}
            $active={activeIndex === index}
            onClick={() => {
              handleClickMonthTap(index);
            }}
          >
            {item}월
          </S.MonthLi>
        ))}
      </S.MonthUl>
      <Totalex />
      <ExpenditureItem />
    </div>
  );
};

export default React.memo(Monthlist);
