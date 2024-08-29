import styled from "styled-components"

const App = styled.div`
  display: grid;
  grid-template-areas:
  "header header header"
  "sidebar main main"
  "footer footer footer";

  grid-template-rows:  60px 1fr;
  grid-template-columns: 2fr 10fr;
`
const Main = styled.div`
  grid-area: main;
  min-height: calc(100vh - 55px);
  padding: 10px;
  
`


export const s = {
    App,
    Main,
}