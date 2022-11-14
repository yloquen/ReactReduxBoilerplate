import React, {useEffect, useRef} from 'react';
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
import Test from "./components/Test";
import $ from "jquery";


const Comp1 = (props) =>
{
    return <Comp2>
        TEST
    </Comp2>;
};


const Comp2 = (props) =>
{
    debugger;

    return ReactDOM.createPortal(
        <button ref={props.myRef} id="test">{props.children}</button>,
        $("#portal")[0]);
};

const e = React.createElement(Comp1);
ReactDOM.render(e, document.querySelector('#root'));


/*
ReactDOM.render(

    <Provider store={store}>
        <BrowserRouter>
            <Test/>
            {
                /!*
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
                *!/
            }
        </BrowserRouter>
    </Provider>,

    document.querySelector('#root'));*/
