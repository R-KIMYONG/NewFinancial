import styled from "styled-components";

export const Fromsubmit = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 0.3fr;
  gap: 20px;
  background: #fff;
  padding: 20px 30px;
  box-sizing: border-box;
  margin-top: 20px;
  border-radius: 10px;
  align-items: flex-end;
`;

export const Formdiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormSaveBtn = styled.button`
  background: lightblue;
  border: none;
  border-radius: 10px;
  height: 40px;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  letter-spacing: 2px;
  transition: 0.3s;
  &:hover {
    box-shadow: 0px 0px 10px #ccc;
  }
`;

export const Formlabel = styled.label`
  margin-bottom: 10px;
`;

export const Forminput = styled.input`
  height: 40px;
  padding-left: 10px;
  box-sizing: border-box;
  &:focus {
    outline: none;
  }
`;
