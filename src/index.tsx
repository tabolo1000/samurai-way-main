import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GlobalStyle from "./style/GlobalStyle";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <React.Fragment>
        <BrowserRouter>
             <GlobalStyle/>
             <App />
        </BrowserRouter>
    </React.Fragment>
    ,
  document.getElementById('root')
);