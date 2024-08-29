import styled, { createGlobalStyle } from "styled-components";
import backgroundImage from "../assets/image/blackhole.jpeg"

const GlobalStyled = createGlobalStyle`
  *, *::after, *::before{
    margin:0;
    padding:0;
    box-sizing: border-box;
    
  };

  body {
    background-image: url(${backgroundImage});
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;

    min-height: 100vh;
    

  font-family: "Be Vietnam Pro", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

li{
  list-style: none;
}

a{
  text-decoration: none;
}
    `
export const Avatar = styled.img`
  width: 90px;
  border-radius: 50px;
  height: 110px;
  background-image: url("./assets/image/paulskorupskas7KLaxLbSXAunsplash2.webp");
`
export const AvatarLittle = styled.img`
  object-fit:cover;
  object-position: left top;
  width: 40px;
  border-radius: 50px;
  height: 40px;
`
export default GlobalStyled;