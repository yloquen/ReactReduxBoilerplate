import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App"
import {Provider} from "react-redux";
import store from "./store";
import {BrowserRouter, Routes, Route} from "react-router-dom";

ReactDOM.render(

    <Provider store={store}>
        <App/>
    </Provider>,

    document.querySelector('#root'));