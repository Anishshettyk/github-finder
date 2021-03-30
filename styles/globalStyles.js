import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const { colors, fonts } = theme;

const GlobalStyles = createGlobalStyle`

html {
    box-sizing: border-box;
}

*,
*:before,
*:after {
    box-sizing: inherit;
}

::selection {
    background-color: ${colors.blue};
    color: ${colors.pinkWhite};
}

body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: ${fonts.light};
    color: ${colors.grey};
    background-color: ${colors.purple};
}

h1, h2, h3, h4, h5, h6 {
   margin:0;
   font-weight: 500;
   font-family:${fonts.heavy};
   color: ${colors.pinkWhite}
}

p {
    line-height: 1.5;
}

a {
    text-decoration: none;
    transition: ${theme.transition};
    color: ${colors.orange};
    display: inline-block;
    &:hover,
    &:focus {
        color: ${colors.pink};
    }
}

ul, ol {
    padding: 0;
    margin: 0;
    list-style: none;
}

img {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
}

svg {
    fill: currentColor;
}

button {
    cursor: pointer;
    border: 0;
    border-radius: 0;
    transition: ${theme.transition};
    &:focus,
    &:active {
      outline: 0;
    }
}

input {
    border-radius: 0;
    outline: 0;
    &:focus {
      outline: 0;
    }
    &::placeholder {
        color: ${colors.lightBlue};
        opacity: 0.5;
    }
    &:focus,
    &:active {
      &::placeholder {
        opacity: 0.3;
      }
    }
}
`;

export default GlobalStyles;
