import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Oswald', sans-serif;
  }

  a {
    color:#000;

    &:hover {
      text-decoration:none;
      color:#000;
    }
  }

  /* Makes scoll bar transparent */
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
}
 
`;

export default GlobalStyles;
