import styled from "styled-components";

export const MonthUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  flex-wrap: wrap;
  padding: 30px 50px;
  box-sizing: border-box;
  gap: 30px;
  background: #fff;
  margin-top: 20px;
  border-radius: 10px;
`;

export const MonthLi = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 15px;
  box-sizing: border-box;
  background: ${(props) => (props.$active ? "cornsilk" : "lightgray")};
  color: ${(props) => (props.$active ? "lightblue" : "#fff")};
  font-size: 25px;
  border-radius: 10px  ;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 10px #ccc;
  }
`;
