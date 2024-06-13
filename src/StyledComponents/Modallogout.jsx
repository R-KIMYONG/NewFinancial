import styled from "styled-components";

export const Modallogout = styled.div`
  padding: 40px;
  box-sizing: border-box;
  h2 {
    margin-bottom: 20px;
    font-size: 24px;
  }

  div {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
  }

  button {
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:active {
      box-shadow: inset 0px 0px 5px #5d5d5d;
    }
  }

  button:first-child {
    background-color: #d9534f;
    color: white;
  }

  button:last-child {
    background-color: #5bc0de;
    color: white;
  }
`;
