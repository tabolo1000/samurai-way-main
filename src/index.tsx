import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {dialogTypeProps} from './App';
import GlobalStyle from "./style/GlobalStyle";
import {BrowserRouter} from "react-router-dom";
import {state} from "./redux/state";
import {subscriber} from "./redux/state";


    let renderEntireTree = (state:any) => {
    ReactDOM.render(
        <React.Fragment>
            <BrowserRouter>
                <GlobalStyle/>
                <App state={state}/>
            </BrowserRouter>
        </React.Fragment>
        ,
        document.getElementById('root')
    );
};
    renderEntireTree(state);
subscriber(renderEntireTree);



// ReactDOM.render(
//     <React.Fragment>
//         <BrowserRouter>
//              <GlobalStyle/>
//              <App state = {state}/>
//         </BrowserRouter>
//     </React.Fragment>
//     ,
//   document.getElementById('root')
// );