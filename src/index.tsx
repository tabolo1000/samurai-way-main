import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {dialogTypeProps} from './App';
import GlobalStyle from "./style/GlobalStyle";
import {BrowserRouter} from "react-router-dom";
import store from "./store/reduxStore";
import {Provider} from "./store/reactContext";


let renderEntireTree = (state: any) => {
    ReactDOM.render(
        <React.Fragment>
            <BrowserRouter>
                <Provider store = {store}>
                    <GlobalStyle/>
                    <App />
                </Provider>

            </BrowserRouter>
        </React.Fragment>
        ,
        document.getElementById('root')
    );
};
renderEntireTree(store.getState());


store.subscribe(()=>{
    let state = store.getState()
    renderEntireTree(state);
});
