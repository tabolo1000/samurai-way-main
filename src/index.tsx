import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GlobalStyle from "./style/GlobalStyle";
import {BrowserRouter} from "react-router-dom";
import store from "./store/reduxStore";
import {Provider} from "react-redux";

store.subscribe(() => {
    debugger
    renderEntireTree();
});

let renderEntireTree = () => {
    ReactDOM.render(
        <React.Fragment>
            <BrowserRouter>
                <Provider store={store}>
                    <GlobalStyle/>
                    <App />
                </Provider>
            </BrowserRouter>
        </React.Fragment>
        ,
        document.getElementById('root')
    );
};
renderEntireTree();


