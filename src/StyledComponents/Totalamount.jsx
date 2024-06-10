import styled from "styled-components";

export const TotalAmount = styled.div`
  background: #fff;
  text-align: center;
  padding: 20px 30px;
  box-sizing: border-box;
  margin-top: 20px;
  border-radius: 10px;
  & > h2 {
    font-size: 30px;
  }
`;

export const TotalUl = styled.ul`
  width: 70%;
  display: flex;
  grid-template-columns: repeat(3, 1fr);
  flex-wrap: wrap;
  justify-content: center;
  margin: 0px auto;
  gap: 10px;
`;

export const TotalLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  & > .backcolor {
    width: 30px;
    height: 20px;
    margin-right: 10px;
    background: ${(props) => {
      switch (props.$activeColor) {
        case "여행":
          return "red";
        case "식비":
          return "blue";
        case "미용":
          return "yellow";
        case "도서":
          return "orange";
        default:
          return "gray";
      }
    }};
  }
  & > div {
    text-align: center;
    display: flex;
    flex-direction: column;
  }
  & > div > p {
    margin-top: 2px;
  }
  & span {
    margin-left: 10px;
  }
`;

export const TotalGraphUl = styled.ul`
  width: 80%;
  margin: 0px auto;
  display: flex;
  margin-top: 20px;
  height: 50px;
  border-radius: 10px;
  overflow: hidden;
  background: #ccc;
`;

export const TotalGraphLi = styled.li`
  width: ${(props) => {
    return props.$activeWidth + "%";
  }};
  transition: 0.5s;
  background: ${(props) => {
    switch (props.$activeColor) {
      case "여행":
        return "red";
      case "식비":
        return "blue";
      case "미용":
        return "yellow";
      case "도서":
        return "orange";
      default:
        return "gray";
    }
  }};
`;
