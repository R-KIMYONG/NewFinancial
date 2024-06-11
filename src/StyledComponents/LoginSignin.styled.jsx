import styled from "styled-components";

export const LoginSignup = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  padding: 80px;
  box-sizing: border-box;
  border-radius: 15px;
  & > h1 {
    font-size: 40px;
    margin-bottom: 40px;
    text-align: center;
  }
  & > form {
    width: 400px;
    & > div {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
      & > label {
        width: 100px;
        margin-top: 5px;
      }
      & > input {
        width:300px;
        height:35px;
        border:none;
        box-shadow: inset 0px 0px 5px #ccc;
        padding-left:10px;
        box-sizing: border-box;
        border-radius: 5px;
        &:focus{outline:none;}
      }
    }
    & > button {
      display: block;
      margin: 40px auto;
      background: lightblue;
      color: #fff;
      border: none;
      outline: none;
      padding: 10px 30px;
      box-sizing: border-box;
      font-weight: bold;
      border-radius: 5px;
      &:active {
        box-shadow: inset 1px 1px 5px #8f8f8f;
      }
    }
  }
  & .signup {
    text-align: center;
    margin-top: 40px;
  }
`;
