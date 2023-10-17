import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GlobalStyle from "./style/GlobalStyle";

ReactDOM.render(
    <React.Fragment>
        <GlobalStyle/>
        <App />
    </React.Fragment>
    ,
  document.getElementById('root')
);