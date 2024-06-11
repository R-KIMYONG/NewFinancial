import React, { useEffect, useState, useContext } from "react";
import * as S from "@/styledComponents/Totalamount.jsx";
import TotalexLi from "@components/TotalexLi.jsx";
import TotalGraph from "@components/TotalGraph.jsx";
import { useSelector } from "react-redux";

const Totalex = () => {
  const activeIndex= useSelector(state=> state.activeIndex)
  const expenses  = useSelector(state => state.expenses)
  const [totalAmount, setTotalAmount] = useState(0);
  const categoryItem = ["여행", "미용", "식비", "도서", "기타"];

  useEffect(() => {
    let total = 0;
    expenses
      .filter(
        (item) =>
          item &&
          item.date &&
          Number(item.date.substring(5, 7)) === activeIndex + 1
      )
      .forEach((item) => {
        total += Number(item.amount);
      });
    setTotalAmount(total);
  }, [expenses, activeIndex]);

  const getCategoryTotal = (category) => {
    let total = 0;
    let otherAmount = 0;

    expenses
      .filter(
        (item) =>
          item &&
          item.date &&
          Number(item.date.substring(5, 7)) === activeIndex + 1
      )
      .forEach((item) => {
        if (item.category === category) {
          total += Number(item.amount);
        } else if (!categoryItem.includes(item.category)) {
          otherAmount += Number(item.amount);
        }
      });
    return category === "기타" ? otherAmount : total;
  };

  return (
    <>
      <S.TotalAmount>
        <h2>
          {activeIndex + 1}월 총 지출 : {totalAmount.toLocaleString()}원
        </h2>
        <TotalGraph
          categoryItem={categoryItem}
          getCategoryTotal={getCategoryTotal}
          totalAmount={totalAmount}
        />
        <S.TotalUl>
          {categoryItem.map((category, index) => (
            <TotalexLi
              key={index}
              category={category}
              totalAmount={totalAmount}
              getCategoryTotal={getCategoryTotal}
              activeColor={category}
            />
          ))}
        </S.TotalUl>
      </S.TotalAmount>
    </>
  );
};

export default React.memo(Totalex);
