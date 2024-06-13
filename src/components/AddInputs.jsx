import React from "react";
import * as S from "../styledcomponents/Formstyle.jsx";
import { useCallback } from "react";
import { useSelector } from "react-redux";
const AddInputs = ({ item, value, setInputs }) => {
  const categoryList = useSelector((state) => state.categoryList);
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;

    setInputs((prevInputs) => {
      if (name === "date") {
        const [year, month] = prevInputs.date.split("-");
        let day = value.split("-")[2];
        const validDay = day > 0 && day <= 31 ? day : "";
        const newDate = `${year}-${month}-${validDay}`;
        return {
          ...prevInputs,
          date: newDate,
        };
      }
      return {
        ...prevInputs,
        [name]: value,
      };
    });
  });

  return (
    <S.Formdiv>
      <S.Formlabel htmlFor="date">{categoryList[item].label}</S.Formlabel>
      <S.Forminput
        type={categoryList[item].type}
        value={value}
        name={item}
        autoComplete="off"
        placeholder={categoryList[item].placeholder}
        onChange={handleChange}
      />
    </S.Formdiv>
  );
};

export default React.memo(AddInputs);
