import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
export const GlobalStyle = createGlobalStyle`
  ${reset}
  body{
    
    font-family: "Jua", sans-serif;
  font-weight: 300;
  font-style: normal;
  background:cornsilk;
  }
  #main{width:1200px;margin:0px auto;}
  
`;
