import { LightenDarkenColor } from "lighten-darken-color";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  body {
    background-color:${(props) => props.theme.bg};
  }
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: transparent; 
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.secondary};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${(props) => LightenDarkenColor(props.theme.secondary, -20)};
  }

  *{
    color: ${(props) => props.theme.primary};
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
