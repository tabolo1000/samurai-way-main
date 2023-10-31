import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GlobalStyle from "./style/GlobalStyle";
import {BrowserRouter} from "react-router-dom";
import {state} from "./redux/state";



ReactDOM.render(
    <React.Fragment>
        <BrowserRouter>
             <GlobalStyle/>
             <App state = {state}/>
        </BrowserRouter>
    </React.Fragment>
    ,
  document.getElementById('root')
);