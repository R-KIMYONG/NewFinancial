import styled from "styled-components";

export const ExpenditureUl = styled.ul`
  margin-top: 20px;
  background: #fff;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  & > .notice {
    width:100%;
    text-align: center;
    font-size: 40px;
  }
`;

export const ExpenditureLi = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #e3e3e3;
  padding: 20px 20px;
  box-sizing: border-box;
  border-radius: 10px;
  cursor: pointer;
  transition:0.3s;
  &:hover{transform:scale(102%);box-shadow:0px 5px 7px #939393;}
  & > .price-info {
    width: 40%;
  }
  & > .detail-info {
    width: 55%;
  }
  & > div > .light-blue {
    color: blue;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  & > div > .bold-blue {
    font-size: 25px;
    color: darkblue;
    text-align: end;
  }
`;
