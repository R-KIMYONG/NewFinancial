import styled from "styled-components";

export const DetailDiv = styled.div`
  position: absolute;
  background: #fff;
  color: #000;
  padding: 40px;
  border-radius: 10px;
  box-sizing: border-box;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  grid-template-rows: max-content;
  gap: 20px;
  & > h2{text-align:center;font-size:40px;}
  & > .detail-input {
    display: flex;
    flex-direction: column; 
  }
  & > .detail-input > label {
    font-size:20px;
    margin: 15px 10px;
  }
  & > .detail-input > input {
    width: 800px;
    height: 55px;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 10px 25px;
    box-sizing: border-box;
    font-weight: bold;
    font-size:18px;
  }
  & > .UDB-btnbox {
    display: flex;
    gap: 20px;
    
  }

  & button {
    background: lightblue;
    color: #fff;
    border: 0px;
    padding: 15px 20px;
    font-weight: bold;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
    box-shadow: 0px 0px 10px #ccc;
  }
  }
`;
