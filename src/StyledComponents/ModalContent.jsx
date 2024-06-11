import styled from "styled-components";


export const ModalContent = styled.div`
  h2 {
    margin-bottom: 20px;
    font-size: 24px;
  }
  
  div {
    display: flex;
    justify-content: space-between;
  }
  
  button {
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
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