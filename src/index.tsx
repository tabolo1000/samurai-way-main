import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {dialogTypeProps} from './App';
import GlobalStyle from "./style/GlobalStyle";
import {BrowserRouter} from "react-router-dom";
import {store} from "./store/state";


let renderEntireTree = (state: any) => {
    ReactDOM.render(
        <React.Fragment>
            <BrowserRouter>
                <GlobalStyle/>
                <App store={store}/>
            </BrowserRouter>
        </React.Fragment>
        ,
        document.getElementById('root')
    );
};

renderEntireTree(store.getState());
store.subscriber(renderEntireTree);
