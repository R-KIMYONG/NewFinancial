import styled from "styled-components";

export const Modaledit = styled.div`
  padding: 30px;
  box-sizing: border-box;
  background: #ccc;
  & > h2 {
    font-size: 35px;
    text-align: center;
    margin-bottom: 40px;
  }
  & .imgPreview {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom:20px;
    & > div {
      width: 300px;
      height: 200px;
      overflow: hidden;
      border-radius: 20px;

      & > img {
        width: 100%;
        height: 100%;
        object-fit:cover;
      }
    }
  }
`;
