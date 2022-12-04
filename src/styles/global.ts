import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

  html, body #root{
      height: 10%;
  }

  h1 {
    font-family: 'Inter', sans-serif;
    color: #212121;
    font-size: 72px;
    line-height: 72px;
    letter-spacing: normal;
    margin-bottom: 14px
  }
  
  p {
    font-size: 18px;
    line-height: 27px;
    color: #212121;
    margin-bottom: 20px
  }

  body {
    background-color: #FCFCD0;
    font-family: 'Inter', sans-serif;
  }

  button {
    background-color: none;
    border: none;
    outline: none;
  }

  body {
    width: 100vw;
    height: 100vh;
    background-color: #F5F5F5;
    font-family: 'Inter', sans-serif;
  }


`;

export default GlobalStyles;