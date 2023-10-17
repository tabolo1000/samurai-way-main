import React from 'react';
import './App.css';
import {Header} from "./layout/header/Header";
import styled from "styled-components";


function App() {
  return (
      <AppStyled>
            <Header/>
            <h1>fsdf</h1>
      </AppStyled>
  );
}

export default App;

const AppStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
