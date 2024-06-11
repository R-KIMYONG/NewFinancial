import * as S from "@/styledComponents/Expenditurestyle.jsx";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ExpenditureItem = () => {
  const expenses = useSelector((state) => state.expenses);
  const activeIndex = useSelector((state) => state.activeIndex);
  const navigate = useNavigate();
  const newExpenses = () => {
    return expenses
      .slice() //불변성 유지
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
  return (
    <S.ExpenditureUl>
      {newExpenses().length > 0 ? (
        newExpenses().map(
          (
            item //반환된 데이터를 map통해 배치함~
          ) => (
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
                  {item.category} - {item.content}
                </p>
              </div>
              <div className="price-info">
                <p className="bold-blue">
                  {Number(item.amount).toLocaleString()}원
                </p>
              </div>
            </S.ExpenditureLi>
          )
        )
      ) : (
        <div className="notice">내역이 없습니다.😅</div>
      )}
    </S.ExpenditureUl>
  );
};

export default ExpenditureItem;
