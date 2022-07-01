import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  body {
    background-color:${(props) => props.theme.bg};
  }

  *{
    color: ${(props)=> props.theme.primary};
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    user-select: none;
  }

  a{
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
