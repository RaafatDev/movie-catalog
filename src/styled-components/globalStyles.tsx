import { createGlobalStyle } from "styled-components";
import * as theme from "../styled-components/theme";

type ThemeType = typeof theme;

interface Props {
  theme: ThemeType;
}
const GlobalStyle = createGlobalStyle<Props>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
  }

  body { 
   /* background-color: #020916;  */
   background-color: ${(props) => props.theme.primaryColor}
   /* background-color: white;   */
  }

  a:hover {
    text-decoration: none;  
  }
`;

export default GlobalStyle;
