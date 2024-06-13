import * as S from "../StyledComponents/Expenditurestyle.jsx";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getExpenseList } from "./../axios/expenseApi.js";

const ExpenditureItem = () => {
  const activeIndex = useSelector((state) => state.activeIndex);
  const navigate = useNavigate();
  const {
    data: expenses = [],
    isLoading,
    Error,
  } = useQuery({
    queryKey: ["expenses"],
    queryFn: getExpenseList,
  });

  const newExpenses = () => {
    return expenses
      .sort((a, b) => {
        //날짜기준 내림차순으로 정렬
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);

        if (dateA - dateB !== 0) {
          return dateB - dateA;
        } else {
          return b.amount - a.amount;
        }
      })
      .filter((item) => {
        //날짜만 뽑아서 현제 클릭된 월과 비교해서 동일한 데이터만 반환
        const itemMonth = (new Date(item.date).getMonth() + 1)
          .toString()
          .padStart(2, "0");
        const activeMonth = (activeIndex + 1).toString().padStart(2, "0");
        return itemMonth === activeMonth;
      });
  };
  const filteredExpenses = newExpenses();
  if (isLoading) {
    return <div>데이터를 불러오는 중입니다...</div>;
  }

  if (Error) {
    return <div>데이터를 불러오는데 실패했습니다.</div>;
  }
  return (
    <S.ExpenditureUl>
      {filteredExpenses.length > 0 ? (
        filteredExpenses.map((item) => (
          <S.ExpenditureLi
            key={item.id}
            id={item.id}
            onClick={() => {
              navigate(`/detail/${item.id}`);
            }}
          >
            <div className="detail-info">
              <p>{item.date}</p>
              <br />
              <p className="light-blue">
                {item.category} - {item.content} - ( 작성자 :{" "}
                {item.createdBy || "unknow"} )
              </p>
            </div>
            <div className="price-info">
              <p className="bold-blue">
                {Number(item.amount).toLocaleString()}원
              </p>
            </div>
          </S.ExpenditureLi>
        ))
      ) : (
        <div className="notice">내역이 없습니다.😅</div>
      )}
    </S.ExpenditureUl>
  );
};

export default ExpenditureItem;
