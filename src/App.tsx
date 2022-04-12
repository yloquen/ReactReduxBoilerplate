import React, {useState} from 'react';
import { Counter } from "./components/Counter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Provider} from "react-redux";
import {Nav} from "./components/Nav";
import {Users} from "./components/Users";


export default function App()
{
    return (<BrowserRouter>
            <Nav/>
            <Routes>
                <Route path="/" element={<Counter />} />
                <Route path="/users" element={<Users />} />
            </Routes>
        </BrowserRouter>
    );
}
