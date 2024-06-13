import React from "react";
import * as S from "../Styledcomponents/Totalamount.jsx";
const TotalGraph = ({ categoryItem, getCategoryTotal, totalAmount }) => {
  return (
    <>
      <S.TotalGraphUl>
        {categoryItem.map((item, index) => (
          <S.TotalGraphLi
            key={index}
            $activeColor={item}
            $activeWidth={(
              (getCategoryTotal(item) / totalAmount) *
              100
            ).toFixed(2)}
          ></S.TotalGraphLi>
        ))}
      </S.TotalGraphUl>
    </>
  );
};

export default React.memo(TotalGraph);
