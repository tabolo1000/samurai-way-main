import {createGlobalStyle} from "styled-components";

const GlobalStyled = createGlobalStyle`
  html, .root, body {
    height: 100%;
    width: 100%;
  }
  body {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  margin: 0;
    padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
    `

export default GlobalStyled;