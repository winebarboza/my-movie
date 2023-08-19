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
        overflow-y: hidden;
        overflow-x: hidden;
    }
    h1, h2, h3, h4, p{
        color: ${theme.colors.white};
    }
    button, input{
        border: none;

        textarea:focus, input:focus {
        box-shadow: 0 0 0 0;
        outline: 0;
        }
    }
    button{
        cursor: pointer;
    }
    a{
        text-decoration: none;
    }
`