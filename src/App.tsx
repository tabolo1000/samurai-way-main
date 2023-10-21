import React from 'react';
import './App.css';
import {Header} from "./layout/Header/Header";
import styled from "styled-components";
import {Navbar} from "./layout/Navbar/Navbar";
import {Footer} from "./layout/Footer/Footer";
import {Profile} from "./layout/Profile/Profile";



function App() {
  return (
      <AppStyled>
          <Header/>
          <Navbar/>
          <Profile/>
          <Footer/>
      </AppStyled>
  );
}



export default App;

const AppStyled = styled.div`
  display: grid;
  grid-template-areas:
  "header header header"
  "sidebar content content"
  "footer footer footer";
  
  grid-template-rows:  60px 1fr;
  grid-template-columns: 2fr 10fr;
`
