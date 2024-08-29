import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import GlobalStyle from "./styles/GlobalStyle";
import {BrowserRouter} from "react-router-dom";
import store from "./store/reduxStore";
import {Provider} from "react-redux";

store.subscribe(() => {
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


