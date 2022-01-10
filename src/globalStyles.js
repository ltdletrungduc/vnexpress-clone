import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  /* @font-face {
    font-family: 'Inter';
    src: url('../fonts/Inter-VariableFont_slnt\, wght.ttf')
        format('woff2 supports variations'),
      url('../fonts/Inter-VariableFont_slnt\,wght.ttf') format('woff2-variations');
    font-weight: 100 900;
  } */
  html {
    font-size: 10px;
  }

  body {
    font-size: 1.4rem;
    line-height: normal;
    font-weight: 400;
    font-family: 'Inter', Arial;
    background-color: #fff;
    color: rgba(0, 0, 0, 0.8);
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .link {
    color: #ee4d2d;
    font-size: 1.4rem;
    cursor: pointer;
  }
  ul {
    list-style: none;
  }
  :focus-visible {
    outline: none;
  }
  button {
    cursor: pointer;
    &:disabled {
      cursor: default;
    }
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  svg {
    width: 1em;
    height: 1em;
    fill: currentColor;
  }

  .container {
    width: 100%;
    max-width: 1130px;
    padding: 0 15px;
    margin: 0 auto;
    position: relative;
  }
  .col-small {
    width: calc(100% / 3);
  }
  .col-medium {
    width: calc(100% / 3 * 2);
  }
  .col-left {
    padding-right: 15px;
  }
  .col-right {
    padding-left: 15px;
  }
`

export default GlobalStyles
