import React from "react";
import * as S from "../StyledComponents/Totalamount.jsx";

const TotalexLi = ({
  category,
  totalAmount,
  getCategoryTotal,
  activeColor,
}) => {
  const categoryTotal = getCategoryTotal(category);
  const percentage = totalAmount
    ? ((categoryTotal / totalAmount) * 100).toFixed(2)
    : 0;

  return (
    <S.TotalLi $activeColor={activeColor}>
      <div className="backcolor"></div>
      <div>
        <p>
          {category} : {Number(categoryTotal).toLocaleString()}원{" "}
          <span>
            ( {percentage}
            %)
          </span>
        </p>
      </div>
    </S.TotalLi>
  );
};

export default React.memo(TotalexLi);
