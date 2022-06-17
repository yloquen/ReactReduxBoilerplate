import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App"
import {Provider} from "react-redux";
import store from "./store";
import {BrowserRouter, Routes, Route, Outlet} from "react-router-dom";
import {Nav} from "./components/Nav";
import {Counter} from "./components/Counter";
import {Users} from "./components/Users";
import {Posts} from "./components/Posts";
import {PostDetails} from "./components/PostDetails";
import {Tweens} from "./components/Tweens";
import {Styles} from "./components/Styles";


ReactDOM.render(

    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="/users" element={<Users/>} />
                    <Route path="/posts" element={<Posts/>}>
                        <Route index element={<div>Not found</div>}/>
                        <Route path=":postId" element={<PostDetails/>}/>
                    </Route>
                    <Route path="/tweens" element={<Tweens/>}/>
                    <Route path="/styles" element={<Styles/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </Provider>,

    document.querySelector('#root'));