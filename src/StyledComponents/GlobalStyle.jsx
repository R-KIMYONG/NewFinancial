import { createGlobalStyle } from "styled-components";
// import reset from "styled-reset";
export const GlobalStyle = createGlobalStyle`
  /* ${reset} */
  body{
    
    font-family: "Jua", sans-serif;
  font-weight: 300;
  font-style: normal;
  background:cornsilk;
  
  }
  *{margin:0px;padding:0px;}
  li{list-style:none;}
  #main{width:1200px;margin:0px auto;}
  a{color:#000;}
  
`;
