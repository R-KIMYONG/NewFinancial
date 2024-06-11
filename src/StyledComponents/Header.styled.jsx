import styled from "styled-components";

export const Header = styled.header`
  background: #f7e492;
  height: 65px;
  display: grid;
`;

export const HeaderNav = styled.nav`
  width: 1200px;
  margin: 0px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > a {
    width: 50px;
    display: block;
    & > img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
`;

export const UserInfo = styled.div`
  display: flex;
  height: 100%;
  gap: 20px;
  align-items: center;
  & > div {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    overflow: hidden;
    & > img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
`;

export const LogoutButton = styled.button`
  display: block;
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
`;
