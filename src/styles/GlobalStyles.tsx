import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";
export const GlobalStyles = createGlobalStyle`
    body, h1, h2, h3, h4, h5, h6, p, ul, ol, button{
        margin: 0;
        padding: 0;       
  }
    body {
        font-family: Arial, Helvetica, sans-serif;
        padding:0;
        margin: 0;
        background-color: ${theme.colors.backgroundColor};
    }
    h1, h3, h4, p{
        color: ${theme.colors.textColorWhite};
    }
    h2{
        color: ${theme.colors.greenTheme};
    }
    button, input{
        border: none;
    }
    button{
        cursor: pointer;
    }

`