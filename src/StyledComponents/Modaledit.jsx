import styled from "styled-components";

export const Modaledit = styled.div`
  background: cornsilk;
  padding: 30px;
  box-sizing: border-box;
  border-radius: 10px;
  & > h2 {
    font-size: 35px;
    text-align: center;
    margin-bottom: 40px;
  }
  & .imgPreview {
    display: flex;
    align-items: end;
    gap: 20px;
    margin-bottom: 40px;
    & > div {
      width: 300px;
      height: 200px;
      overflow: hidden;
      border-radius: 20px;

      & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  & .userExistingInfo {
    display: flex;
    gap: 30px;
    align-items: center;
    margin-bottom: 40px;
  }
  & .changeUserNickname {
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    gap: 30px;
    & > input {
      height: 30px;
      width: 200px;
      padding-left: 10px;
      box-sizing: border-box;
    }
  }
  & .onChangeBtnbox {
    display: flex;
    justify-content: space-between;
    & button {
      background: lightblue;
      padding: 10px 30px;
      border: none;
      outline: none;
      border-radius: 5px;
      font-size: 14px;
      font-weight: bold;
      color: #fff;
      cursor: pointer;
      &:active {
        box-shadow: inset 0px 0px 3px #000;
      }
    }
    & .cancellation {
      background: red;
    }
  }
`;
